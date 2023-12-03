const { playBingoGame } = require('./bingoGame');
const { readNumbers, readCard } = require('./fileReader');

// Get file paths from command line arguments
const [,, numbersPath, cardPath] = process.argv;

// Check if file paths are provided
if (!numbersPath || !cardPath) {
  console.log('Please provide two file paths as command line arguments. The first argument must be the numbers file and the second argument must be the card file. Example: node main.js numbers.txt card1.txt');
  process.exit(1);
}

// Read and process datasets
const numbersArray = readNumbers(numbersPath);
const cardsArray = readCard(cardPath);

playBingoGame(numbersArray, cardsArray);
