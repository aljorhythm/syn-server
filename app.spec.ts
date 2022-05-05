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

    it("POST /clip and GET /clip", async function () {
        let response = await request(anApp)
            .post("/clip")
            .auth('joel', '')
            .set('Accept', 'application/json')
            .expect(200);

        let { id } = response.body

        let getResponse = await request(anApp)
            .get(`/clip/${id}`)
            .expect(200);

        
    });
});
