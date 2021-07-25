import { Router, urlencoded, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

export const handleCors = (router: Router): Router =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router): void => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCompression = (router: Router): void => {
  router.use(compression());
};

export const handleHelmet = (router: Router): void => {
  router.use(helmet());
};
