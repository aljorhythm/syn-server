import newApp from "./app";

const PORT = parseInt(process.env.PORT || "");

function initApp(port: number) {
  const app = newApp();
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

initApp(PORT);
