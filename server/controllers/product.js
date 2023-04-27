const Product = require('../models/Product');

module.exports.addProduct = async (req, res) => {
  const {title, description, image, category, size, color , price , inStock} = req.body;
  const data = {
    title:title,
    description:description,
    image:image,
    category:category,
    size:size,
    color:color,
    price:price,
    inStock:inStock
  }
  let newProduct = await Product.create(data);
  // const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: 'Product is added successfully.',
      product: savedProduct
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      });
    res.status(200).json({
      message: "Product is updated successfully.",
      updatedProduct
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.deleteOne();
    res.status(200).json({
      message: "Product is deleted successfully."
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getProducts = async (req, res) => {
  const newQuery = req.query.new;
  const categoryQuery = req.query.category;
  try {
    let products;
    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(8);
    } else if (categoryQuery) {
      products = await Product.find({
        category: categoryQuery
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};