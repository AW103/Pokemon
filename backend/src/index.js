const app = require("./app");
require("dotenv").config();

const port = process.env.port || "3001";

// Starting server on port 3001
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Listening on ${port}`);
});
