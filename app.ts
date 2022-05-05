import express from "express";

function initClipRouter() {
  const ClipRouter = express.Router();

  ClipRouter.post("/", (_, res) => {
    res.status(200);
    res.send();
  });

  ClipRouter.get("/:clipId", (req, res) => {
      res.status(200)
      res.send()
  })

  return ClipRouter;
}

export default function newApp() {
  const app = express();

  app.get("/", (_, res) => {
    res.send("helloworld");
  });

  app.use("/clip", initClipRouter());

  return app;
}
