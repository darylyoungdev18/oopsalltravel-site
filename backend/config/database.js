import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('oopsalltravel', 'root', 'password0515', {
  host: 'localhost',
  dialect: 'mysql'
});

