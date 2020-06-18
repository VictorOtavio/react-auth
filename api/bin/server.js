import app from "../src/app";

const selectPort = function (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const port = selectPort(process.env.PORT || "8000");

app.listen(port, function () {
  console.log(`API listening on port ${port}`);
});
