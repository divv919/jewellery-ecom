import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../models/index.js';
import Product from './Product.js';
class ProductImage extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    }
  }

ProductImage.init(
    {
        image_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true 
        },
        product_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : Product,
                key : 'id'
            },
            onUpdate : 'CASCADE',
            onDelete : 'CASCADE'
        },
        
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          is_primary: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName : 'ProductImage',
        tableName : 'product_images',
        timestamps : false,
        freezeTableName : true
    }
)

export default ProductImage