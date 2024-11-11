import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Visitor = sequelize.define('Visitor', {
    Visitor_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  IP_Address: {
    type: DataTypes.STRING(39),
    allowNull: false
  },
  Is_Returning_Visitor: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Visitor',
  timestamps: true
});

export default Visitor;
