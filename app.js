const express = require("express");
const app = express();

const tasks = require("./Routes/tasks");

app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Some data have been sent");
});

const port = 3000;

app.listen(port, () => {
  console.log("Server listening on port 3000...");
});
