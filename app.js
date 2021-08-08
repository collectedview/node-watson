const path = require("path");

const express = require("express");
const app = express();

const watsonRoutes = require("./watson");

require("dotenv").config();

app.use(express.json());

app.use("/", watsonRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (request, response) => {
  response.sendFile(
    path.join(__dirname, "react-watson", "build", "index.html")
  );
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Watson now running at http://localhost:${port}`);
});
