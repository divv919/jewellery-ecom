import { Model, DataTypes } from "sequelize";
import { sequelize } from "../models/index.js";
import Category from "./Category.js";

class Product extends Model {
  static associate(models) {
    this.hasMany(models.ProductReview, {
      foreignKey: "product_id",
      as: "reviews",
    });
    this.hasMany(models.ProductImage, {
      foreignKey: "product_id",
      as: "images",
    });
    this.belongsTo(models.Category, { foreignKey: "type", as: "categoryType" });
    this.belongsTo(models.Category, {
      foreignKey: "gender",
      as: "categoryGender",
    });
    this.belongsTo(models.Category, {
      foreignKey: "occasion",
      as: "categoryOccasion",
    });

    // this.belongsToMany(models.User, { through: models.Favorite });
    // this.belongsToMany(models.User, { through: models.Order });
    // this.belongsToMany(models.User, { through: models.Cart });
    this.hasMany(models.Cart, { foreignKey: "product_id" });
    this.hasMany(models.Favorite, { foreignKey: "product_id" });
    this.hasMany(models.Order, { foreignKey: "product_id" });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    metal_price: {
      type: DataTypes.NUMERIC,
      allowNull: true,
    },
    metal_type: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    diamond_clarity: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    karatage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gross_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    occasion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    size: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    diamond_color: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    diamond_shape: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    diamond_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    metal_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    number_of_diamonds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    diamond_price: {
      type: DataTypes.NUMERIC,
      allowNull: true,
    },
    making_charges: {
      type: DataTypes.NUMERIC,
      allowNull: true,
    },
    gst: {
      type: DataTypes.NUMERIC,
      allowNull: true,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    occasion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    price: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Product;
