const fs = require("fs");

function readNumbers(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  const numbersArray = dataString.split(',').map(Number);
  if (numbersArray.length === 1 && !numbersArray[0]) {
    return [];
  }
  if (numbersArray.some(isNaN)) {
    return [];
  }
  return numbersArray;
}

function readCard(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  const tablesData = dataString.trim().split('\n\n');
  let tables = tablesData.map(table => (
    table.split('\n').map(row => row.split(' ').map(Number))
  ));
  if (tables.length === 1 && !tables[0][0][0]) {
    return [];
  }
  return tables;
}

module.exports = {
  readNumbers,
  readCard
};
