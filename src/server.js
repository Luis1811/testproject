const app = require("./app");
const swaggerDocs = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on ${process.env.HOST}/api/v1`);
  swaggerDocs(app, PORT);
});
