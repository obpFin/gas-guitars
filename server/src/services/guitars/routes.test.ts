import express, { Router } from "express";
import { db } from '../../db/index';

import request from "supertest";
import { applyMiddleware, applyRoutes } from "../../utils";
import * as promiseRequest from "request-promise";
import middleware from "../../middleware";
import errorHandlers from "../../middleware/errorHandlers";
import routes from "../guitars/routes";

// jest.mock("request-promise");

// const mockedPromiseRequest = promiseRequest as jest.Mocked<typeof promiseRequest>;
// const pRequest = mockedPromiseRequest.default;

// pRequest.mockImplementation(() => '{"features": []}' as any);

describe("/guitars routes", () => {
  let router: Router;

  beforeEach(() => {
    router = express();
    applyMiddleware(middleware, router);
    applyRoutes(routes, router);
    applyMiddleware(errorHandlers, router);
  });

  test("GET /guitars", async () => {

    const response = await request(router).get("/api/v1/guitars");
    expect(response.status).toEqual(200);
  });

  test("a non-existing api method", async () => {
    const response = await request(router).get("/api/v11/search");
    expect(response.status).toEqual(404);
  });
});