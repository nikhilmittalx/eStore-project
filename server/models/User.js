const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")
const crypto = require("crypto");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    salt: {
      type: String,
    },
  }, {
  timestamps: true
}
);

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//       next();
//   }
//   else {
//       console.log(this.password, "password hash")
//       this.password = await bcrypt.hash(this.password, 10)
//       next();
//   }
// })


userSchema.pre("save", function (next) {
  if (this.password && this.password.length > 0) {
    this.salt = new Buffer(crypto.randomBytes(16).toString("base64"), "base64");
    this.password = this.hashPassword(this.password);
  }
  next();
});


userSchema.methods.hashPassword = function (password) {
  if (this.salt && password) {
    return crypto
      .pbkdf2Sync(password, this.salt, 10000, 64, "sha512")
      .toString("base64");
  } else {
    console.log("hashPassword",password)
  }
}


// ye ni chl rha
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
  })
}

module.exports = mongoose.model('User', userSchema);