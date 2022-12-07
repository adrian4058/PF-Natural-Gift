const server = require("./src/app");
const initDB = require("./src/db");

server.listen(3001, () => {
  console.log("%s listening at 3001"); // eslint-disable-line no-console
});

initDB();
