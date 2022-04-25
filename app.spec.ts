import request from "supertest";
import newApp from "./app";
import express from "express";

describe("new app", function () {
  let anApp: express.Express;
  beforeEach(function () {
    anApp = newApp();
  });

  it("responds to /", function testHome(done) {
    request(anApp).get("/").expect(200, "helloworld", done);
  });
});

describe("user can add clip", function () {
  let anApp: express.Express;
  beforeEach(function () {
    anApp = newApp();
  });

  it("POST /clip", function testHome(done) {
    request(anApp).post("/clip").expect(200, done);
  });
});
