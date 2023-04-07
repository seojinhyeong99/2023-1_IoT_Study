const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/dust", (req, res) => {
  res.json([
    { team: "모각코 6조", value: "1000" },
    { team: "모각코 2조", value: "38" },
  ]);
});

app.patch("/toggle", (req, res) => {
  const { toggle } = req.body;
  if (toggle == "ON") {
    res.json({ toggle: "OFF" });
  } else if (toggle == "OFF") {
    res.json({ toggle: "ON" });
  }
});

app.listen(PORT, () => {
  console.log(`server start on port: ${PORT}`);
});
