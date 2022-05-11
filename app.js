const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const tasks = require("./Routes/tasks");

// Middlewares
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Some data have been sent");
});

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server listening on port 3000...");
    });
  } catch (error) {
    console.log("error : ", error);
  }
};

start();
