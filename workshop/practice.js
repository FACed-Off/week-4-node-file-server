const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "test.txt"), (error, file) => {
  console.log(file);
});
