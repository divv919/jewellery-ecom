import { Model, DataTypes } from "sequelize";
import { sequelize } from "../models/index.js";
import models from "../models/index.js";
import CategoryType from "./CategoryType.js";

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, { foreignKey: "type_id", as: "type" });
    this.hasMany(models.Product, { foreignKey: "gender_id", as: "gender" });

    this.hasMany(models.Product, { foreignKey: "occasion_id", as: "occasion" });

    this.belongsTo(models.CategoryType, {
      foreignKey: "category_type_id",
      as: "category_type",
    });
  }
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CategoryType,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Category;
