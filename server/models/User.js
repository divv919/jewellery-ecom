import {Model, DataTypes, Sequelize} from 'sequelize';
import { sequelize } from '../models/index.js';

class User extends Model {
    static associate(models){
        this.hasMany(models.ProductReview, {foreignKey : 'user_id', as: 'review'})
    }
}
User.init(
   {
    user_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },
    username : {
        type : DataTypes.STRING(20),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    first_name : {
        type : DataTypes.STRING(20),
        allowNull : false
    },
    last_name : {
        type : DataTypes.STRING(20),
        allowNull : false
    },
    created_at : {
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    is_active : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
   },
   {
    sequelize,
    modelName : 'User',
    tableName : 'users',
    timestamps : false
   }
)

export default User;