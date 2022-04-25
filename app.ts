import express from "express";

export default function newApp() {
  const app = express();

  app.get("/", (_, res) => {
    res.send("helloworld");
  });

  return app;
}
