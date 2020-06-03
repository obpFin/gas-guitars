import { Sequelize } from 'sequelize';

const { PG_USER, PG_PASSWORD, PG_DATABASE, PG_PORT, PG_HOST } = process.env;

export const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  port: parseInt(PG_PORT),
  dialect: 'postgres',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});
