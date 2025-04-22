import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./index.js";
import User from "./User.js";
import Product from "./Product.js";
class Favorite extends Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Product, { foreignKey: "product_id", as: "product" });
  }
}

Favorite.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  sequelize,
  modelName: "Favorite",
  tableName: "favorites",
  timestamps: false,
  freezeTableName: true,
});

export default Favorite;
