import { sequelize } from '../db/index.js';
import Product from './Product.js';
import ProductReview from './ProductReview.js';
import User from './User.js';
import Category from './Category.js';
import ProductImage from './ProductImage.js';
import CategoryType from './CategoryType.js';

const models = { Product, ProductReview, User, Category, ProductImage , CategoryType};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default models;
