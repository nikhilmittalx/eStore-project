const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const {createAccessToken} = require('../service/authService/createToken')

const User = require('../models/User');

module.exports.register = async(req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const isAdmin = req.body.isAdmin || false;
    let payload = {
      username:username,
      email:email,
      password:password,
      isAdmin:isAdmin
    };
    
    let ExistingUsername = await User.findOne({ username });
    let ExistingUser = await User.findOne({ email });

    if (ExistingUser || ExistingUsername) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
      }
      if(password.length<8){
        return res
        .status(400)
        .json({ success: false, message: "Password must be atleast 8 digits" });
      }

      let user1 = await User.create(payload)
      
      // console.log(user1, "registered user");
      
      const tokenObject = {
        id: user1._id,
        email:email,
      }
      
      // console.log(tokenObject, "token");
      let token = await createAccessToken(tokenObject, 1440);
    // const token = user1.getJWTToken();

    // const options = {
    //     httpOnly: true,
    //     expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    // }
    res.status(201).json({
        success: true,
        token,
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
  

  // const errors = validationResult(req);
  // !errors.isEmpty() && res.status(400).json({ errors: errors.array() });

  // const username = req.body.username;
  // const email = req.body.email;
  // const password = req.body.password;
  // const isAdmin = req.body.isAdmin || false;
  // bcrypt.hash(password, 12)
  //   .then(hashedPassword => {
  //     const user = User.create({
  //       username,
  //       email,
  //       password: hashedPassword,
  //       isAdmin
  //     });
  //     return user.save();
  //   })
  //   .then(user => {
  //     res.status(201).json({
  //       message: 'User is registered successfully.',
  //       user
  //     });
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });
};

module.exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let user;
  User.findOne({ username })
    .then(foundUser => {
      !foundUser && res.status(400).json({
        message: 'Username is not valid!'
      });
      user = foundUser;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      !isEqual && res.status(400).json({
        message: 'Password is not correct!'
      });
      // Generate the JWT
      const token = jwt.sign(
        {
          id: user._id.toString(),
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1d'
        }
      );
      res.status(200).json({
        message: 'User is logined successfully.',
        token,
        userId: user._id.toString(),
        isAdmin: user.isAdmin
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
};