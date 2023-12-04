const { playBingoGame, checkBingo } = require('./bingoGame');

const numbersArray = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
const nonWinningNumbersArray = [50, 60, 70, 80, 90];
const cardArray1 = [
  [22, 13, 17, 11, 0],
  [8, 2, 23, 4, 24],
  [21, 9, 14, 16, 7],
  [6, 10, 3, 18, 5],
  [1, 12, 20, 15, 19],
];

const cardArray2 = [
  [3, 15, 0, 2, 22],
  [9, 18, 13, 17, 5],
  [19, 8, 7, 25, 23],
  [20, 11, 10, 24, 4],
  [14, 21, 16, 12, 6],
];

const cardArray3 = [
  [14, 21, 17, 24, 4],
  [10, 16, 15, 9, 19],
  [18, 8, 23, 26, 20],
  [22, 11, 13, 6, 5],
  [2, 0, 12, 3, 7],
];

const cardsArray = [
  cardArray1,
  cardArray2,
  cardArray3
]

const invalidInputMessage = 'Invalid input. Please provide valid numbers and cards arrays.';

describe('When playing the bingo game', () => {
  describe('when using one card', () => {
    describe('when the winning numbers are in a row', () => {
      it('should ouput the winning row', () => {
        const [, announceBingo] = checkBingo(numbersArray, cardArray1);
        expect(announceBingo).toBe('Bingo! On row 3');
      });
    });

    describe('when the winning numbers are in a column', () => {
      it('should ouput the winning column', () => {
        const [, announceBingo] = checkBingo(numbersArray, cardArray2);
        expect(announceBingo).toBe('Bingo! On column 3');
      });
    });

    describe('when there are no winning numbers', () => {
      it('should ouput a message with no winning card', () => {
        const [, announceBingo] = checkBingo(nonWinningNumbersArray, cardArray2);
        expect(announceBingo).toBe('No winning card');
      });
    });
  });
  describe('when using multiple cards', () => {
    let logSpy;
    describe('when there is no winning card', () => {
      beforeAll(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        playBingoGame(nonWinningNumbersArray, cardsArray);
      });

      afterAll(() => {
        logSpy.mockRestore();
      });
      it('should output a message with no winning card', () => {
        const consoleOutput = logSpy.mock.calls[0][0];
        expect(consoleOutput).toBe('No winning card');
      });
    });
    describe('when there is a winning card', () => {
      beforeAll(() => {
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        playBingoGame(numbersArray, cardsArray);
      });
    
      afterAll(() => {
        logSpy.mockRestore();
      });
      it('should output the number of the winning card', () => {
        const consoleOutput = logSpy.mock.calls[3][0];
        expect(consoleOutput).toBe('Psst... to win against the squid, select the card number 3!');
      });
  
      it('should output the winning rows and columns of all the cards', () => {
        expect(logSpy.mock.calls[0][0]).toBe('Bingo! On row 3');
        expect(logSpy.mock.calls[1][0]).toBe('Bingo! On column 3');
        expect(logSpy.mock.calls[2][0]).toBe('Bingo! On row 1');
      });
    });
  });
  describe('when the numbers array is empty', () => {
    it('should log an error message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      playBingoGame([], cardsArray);
      expect(logSpy).toHaveBeenCalledWith(invalidInputMessage);
      logSpy.mockRestore();
    });
  });
  describe('when the cards array is empty', () => {
    it('should log an error message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      playBingoGame(numbersArray, []);
      expect(logSpy).toHaveBeenCalledWith(invalidInputMessage);
      logSpy.mockRestore();
    });
  });
  describe('when the numbers array is not an array', () => {
    it('should log an error message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      playBingoGame('not an array', cardsArray);
      expect(logSpy).toHaveBeenCalledWith(invalidInputMessage);
      logSpy.mockRestore();
    });
  });
  describe('when the cards array is not an array', () => {
    it('should log an error message', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      playBingoGame(numbersArray, 'not an array');
      expect(logSpy).toHaveBeenCalledWith(invalidInputMessage);
      logSpy.mockRestore();
    });
  });
});
