// Read the txt files and initialise the number and card arrays
const fs = require("fs");

function readNumbers(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  const numbersArray = dataString.split(',').map(Number);
  return numbersArray;
}

function readCard(filePath) {
  const dataString = fs.readFileSync(filePath, 'utf8');
  return dataString
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/).map(Number));
}

// Get file paths from command line arguments
const [,, filePath1, filePath2] = process.argv;

// Check if file paths are provided
if (!filePath1 || !filePath2) {
  console.log('Please provide two file paths as command line arguments.');
  process.exit(1);
}

// Read and process datasets
const numbersArray = readNumbers(filePath1);
const cardArray = readCard(filePath2);

console.log('numbersArray:', numbersArray);
console.log('cardArray:', cardArray);

const rowArray = new Array(cardArray.length).fill(0);
const columnArray = new Array(cardArray[0].length).fill(0);

console.log('this array', rowArray)
console.log('that array', columnArray)

// Iterate through the numbersArray
numbers: for (let i = 0; i < numbersArray.length; i++) {
  // Iterate through the rows
  rows: for (let j = 0; j < cardArray.length; j++) {
    // Iterate through the columns
    columns: for (let k = 0; k < cardArray[j].length; k++) {
      console.log(k)
      console.log(j)
      if (numbersArray[i] === cardArray[j][k]) {
        // console.log(numbersArray[i])
        console.log('row = ', j)
        console.log('column = ', k)
        rowArray[j] += 1;
        columnArray[k] += 1;
        console.log('rowArray', rowArray)
        console.log('columnArray', columnArray)
        if (rowArray[j] === 5 || columnArray[k] >= 5) {
          console.log('Bingo!')
          break numbers;
        }
        break rows;
      }
    }
  }
  // !!!fix this, could be NaN!!!
  // console.log('row', row + 1)
  // console.log('column', column + 1)
}
