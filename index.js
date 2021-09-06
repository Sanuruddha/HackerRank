const path = require('path');
const fs = require('fs');

(function app() {
  const folderName = process.argv[2];
  if (!folderName) {
    return;
  }
  const filePath = path.join(process.cwd(), folderName, 'index.js');
  const doesExist = fs.existsSync(filePath);
  console.log(filePath, folderName);
  if (!doesExist) {
    return;
  }
  (require(filePath))();
})();

