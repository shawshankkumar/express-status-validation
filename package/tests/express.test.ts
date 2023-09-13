import request from "supertest";
import { app } from "./express";
import { expect, test, describe } from "bun:test";

describe("Test the correct routes", () => {
  test("It should return 200", async () => {
    const response = await request(app).get("/i-am-a-200");
    expect(response.statusCode).toBe(200);
  });
  test("It should return 500", async () => {
    const response = await request(app).post("/i-am-a-500");
    expect(response.statusCode).toBe(500);
  });
  test("It should return 404", async () => {
    const response = await request(app).delete("/i-am-john-cena");
    expect(response.statusCode).toBe(404);
  });
});

describe("Test the broken links", () => {
  test("It should return 500", async () => {
    const response = await request(app).get("/i-am-a-709");
    expect(response.statusCode).toBe(500);
  });
  test("It should return 200", async () => {
    const response = await request(app).post("/i-am-a-string");
    expect(response.statusCode).toBe(200);
  });
  test("It should return 500", async () => {
    const response = await request(app).delete("/i-am-an-object");
    expect(response.statusCode).toBe(500);
  });
});
