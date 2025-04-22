import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./index.js";

class User extends Model {
  static associate(models) {
    this.hasMany(models.ProductReview, { foreignKey: "user_id", as: "review" });
    this.hasOne(models.AccountInfo, {
      foreignKey: "user_id",
      as: "accountInfo",
    });
    this.belongsToMany(models.Product, { through: models.Favorite });
    this.belongsToMany(models.Product, { through: models.Order });
    this.belongsToMany(models.Product, { through: models.Cart });
    this.hasMany(models.Cart, { foreignKey: "user_id" });
    this.hasMany(models.Favorite, { foreignKey: "user_id" });
    this.hasMany(models.Order, { foreignKey: "user_id" });
  }
}
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
