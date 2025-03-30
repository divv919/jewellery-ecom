import { sequelize } from '../model/index.js';
import Product from './Product.js';
import ProductReview from './ProductReview.js';
import User from './User.js';
import Category from './Category.js';
import ProductImage from './ProductImage.js';

const models = { Product, ProductReview, User, Category, ProductImage };

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default models;
