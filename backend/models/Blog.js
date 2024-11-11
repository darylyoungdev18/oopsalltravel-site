import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { User } from './User.js';

export const Blog = sequelize.define('Blog', {
  Blog_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  User_Account_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  Is_Featued_Blog: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Blog_Title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Blog_IMG_SRC: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  Blog_City: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Blog_Country: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Blog_Details: {
    type: DataTypes.STRING(2000)
  },
  Blog_Video_SRC: {
    type: DataTypes.STRING(200)
  },
  Is_Video_Blog: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Is_Written_Blog: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Created_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

export default Blog;