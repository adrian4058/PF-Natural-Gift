const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: String,
});

const Categories = mongoose.Model("categories", categoriesSchema);

module.exports = Categories;
