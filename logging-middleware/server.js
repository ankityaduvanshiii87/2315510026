const Log = require("./src/logger");

(async () => {
  await Log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
  );
})();