import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

// import swaggerDocument from "../../config/swagger.json";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Gas Guitars',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from Gas Guitars server.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [
    path.join(__dirname, 'services', 'guitars', 'routes.ts'),
    'src/services/**/*.{ts,js}',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export const handleAPIDocs = (router: Router): Router =>
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
