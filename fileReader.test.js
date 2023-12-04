const { readNumbers, readCard } = require('./fileReader');
const numbersArray = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
const cardArray = [
  [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ]
];

describe('When the numbers path is passed to the readNumbers function', () => {
  const filePath = './numbers.txt';

  it('should read and parse numbers from a file', () => {
    const numbersArray = readNumbers(filePath);
    expect(numbersArray).toEqual(numbersArray);
  });

  it('should handle an empty file', () => {
    const emptyFilePath = './emptyNumbers.txt';
    const numbersArray = readNumbers(emptyFilePath);
    expect(numbersArray).toEqual([]);
  });

  it('should handle a file with non-numeric content', () => {
    const nonNumericFilePath = './nonNumbers.txt';
    const numbersArray = readNumbers(nonNumericFilePath);
    expect(numbersArray).toEqual([]);
  });
});

describe('When the card path is passed to the readCard function', () => {
  const filePath = './card1.txt';

  it('should read and parse card tables from a file', () => {
    const cardTables = readCard(filePath);
    expect(cardTables).toEqual(cardArray);
  });

  it('should handle an empty file', () => {
    const emptyFilePath = 'emptyNumbers.txt';
    const cardTables = readCard(emptyFilePath);
    expect(cardTables).toEqual([]);
  });

  it('should handle a file with non-numeric content', () => {
    const invalidTableFilePath = 'nonNumbers.txt';
    const cardTables = readCard(invalidTableFilePath);
    expect(cardTables).toEqual([]);
  });
});
