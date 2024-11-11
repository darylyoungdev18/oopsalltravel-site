import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Visitor } from './Visitor.js';


export const User = sequelize.define('Guest', {
    Guest_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Visitor_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Visitor',
      key: 'Visitor_ID'
    }
  },
  Visited_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Guest',
  timestamps: true
});

export default Guest;
