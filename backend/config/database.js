import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('oops_all_travel', 'root',  'Br@dfordgates755', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });