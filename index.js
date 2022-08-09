const express = require("express");
const cors = require("cors");
const app = new express();
const router = require("./router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((error, req, res, next) => {});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Invalid URL !!" });
});

const server = app.listen(5000, () => {
  console.log(`Server started successfully`);
});
