import express, { Router } from "express";
import request from "supertest";
import { applyMiddleware, applyRoutes } from "../../utils";
import * as promiseRequest from "request-promise";
import middleware from "../../middleware";
import errorHandlers from "../../middleware/errorHandlers";
import routes from "../../services/search/routes";

// jest.mock("request-promise");

// const mockedPromiseRequest = promiseRequest as jest.Mocked<typeof promiseRequest>;
// const pRequest = mockedPromiseRequest.default;

// pRequest.mockImplementation(() => '{"features": []}' as any);

describe("routes", () => {
  let router: Router;

  beforeEach(() => {
    router = express();
    applyMiddleware(middleware, router);
    applyRoutes(routes, router);
    applyMiddleware(errorHandlers, router);
  });

  test("a valid string query", async () => {

    const response = await request(router).get("/api/v1/search?q=Cham");
    expect(response.status).toEqual(200);
  });

  test("a non-existing api method", async () => {
    const response = await request(router).get("/api/v11/search");
    expect(response.status).toEqual(404);
  });

  test("an empty string", async () => {
    const response = await request(router).get("/api/v1/search?q=");
    expect(response.status).toEqual(400);
  });

  // test("a service is not available", async () => {
  //   (requestPromise as any).mockImplementation(() => "Service Unavailable.");
  //   const response = await request(router).get("/api/v1/search?q=Paris");
  //   expect(response.status).toEqual(503);
  // });
});