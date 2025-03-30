import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../models/index.js';

class Category extends Model{
    static associate(models) {
        this.hasMany(models.Product, { foreignKey: 'category_id', as: 'product' });
      }
};

Category.init(
    {
        id : {
          type : DataTypes.INTEGER,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true  
        },
        name : {
            type : DataTypes.STRING(20),
            allowNull : true
        },
        description : {
           type : DataTypes.TEXT,
        allowNull : true
        }
    },
    {
        sequelize,
        modelName : 'Category',
        tableName : 'categories',
        timestamps : false,
        freezeTableName : true
    }
)

export default Category;