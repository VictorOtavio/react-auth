const app = require("../src/app");
const port = selectPort(process.env.PORT || "3030");

function selectPort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

app.listen(port, function () {
  console.log(`API listening on port ${port}`);
});
