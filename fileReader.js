const fs = require("fs");

function readNumbers(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  const numbersArray = dataString.split(',').map(Number);
  return numbersArray;
}

function readCard(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  const tablesData = dataString.trim().split('\n\n');
  let tables = tablesData.map(table => (
    table.split('\n').map(row => row.split(' ').map(Number))
  ));
  return tables;
}

module.exports = {
  readNumbers,
  readCard
};
