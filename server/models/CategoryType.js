import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../models/index.js';

class CategoryType extends Model{
    static associate(models){
        this.hasMany(models.Category, {foreignKey : 'category_type_id', as : 'categories'})
    }
}

CategoryType.init(
    {id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    name : {
        type : DataTypes.TEXT,
    },
    title :{
        type : DataTypes.TEXT,
    }, 
    subtitle :{
        type : DataTypes.TEXT,
    } 
    },
    {
        sequelize,
    modelName : 'CategoryType',
    tableName : 'category_types',
    timestamps : false,
    freezeTableName  : true
    }

)
export default CategoryType