const fs = require("fs");

fs.readFile("workshop/test.txt", "utf-8", (error, file) => {
  console.log(file);
});
