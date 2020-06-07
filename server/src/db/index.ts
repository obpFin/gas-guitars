import { Sequelize } from 'sequelize';

// import { UserFactory } from './models/user';
import { GuitarFactory } from './models/guitar';


const { PG_USER, PG_PASSWORD, PG_DATABASE, PG_PORT, PG_HOST } = process.env;

export const db = new Sequelize({
  database: PG_DATABASE,
  username: PG_USER,
  password: PG_PASSWORD,
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

// export const User = UserFactory(db);
export const Guitar = GuitarFactory(db);

