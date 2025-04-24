import { sequelize } from "../db/index.js";
import Product from "./Product.js";
import ProductReview from "./ProductReview.js";
import User from "./User.js";
import Category from "./Category.js";
import ProductImage from "./ProductImage.js";
import CategoryType from "./CategoryType.js";
import AccountInfo from "./AccountInfo.js";
import Favorite from "./Favorite.js";
import Order from "./Order.js";
import Cart from "./Cart.js";

const models = {
  Product,
  ProductReview,
  User,
  Category,
  ProductImage,
  CategoryType,
  AccountInfo,
  Cart,
  Favorite,
  Order,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default models;
