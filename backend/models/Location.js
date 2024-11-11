import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Blog } from './Blog.js';

export const Location = sequelize.define('Location', {
  Location_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Blog_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Blog,
      key: 'id'
    }
  },
  Is_Featued_Location: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Blog_City: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Blog_Country: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
},{
    tableName: 'Location',
    timestamps: false
} );

export default Location;