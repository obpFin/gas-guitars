import http from 'http';
import express from 'express';

import { applyMiddleware, applyRoutes } from './utils';
import routes from './services';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import logger from './utils/logger'
import { db } from './db/index';

process.on('uncaughtException', (e) => {
  logger.log('error', e.message);
  process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
  logger.debug(reason);
  process.exit(1);
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
