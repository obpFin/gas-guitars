import { Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import parser from 'body-parser';
import compression from 'compression';

export const handleCors = (router: Router): Router =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router): void => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router): void => {
  router.use(compression());
};

export const handleHelmet = (router: Router): void => {
  router.use(helmet());
};
