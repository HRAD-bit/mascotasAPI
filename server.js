const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
var corsOption = {
  origin: "localhost:8080",
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to HRAD's app!" });
});
require("./routes/routes")(app);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

