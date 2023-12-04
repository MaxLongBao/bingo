const playBingoGame = (numbersArray, cardsArray) => {
  if (!isValidInput(numbersArray, cardsArray)) {
    console.log('Invalid input. Please provide valid numbers and cards arrays.');
    return;
  }

  // Check if there is only one card or more
  if (cardsArray.length === 1) {
    const cardArray = cardsArray[0];
    const [, announceBingo] = checkBingo(numbersArray, cardArray);
    console.log(announceBingo);
  } else {
    const winningCard = findWinningCard(numbersArray, cardsArray);
    console.log(`Psst... to win against the squid, select the card number ${winningCard}!`);
  }
}

const checkBingo = (numbersArray, cardArray) => {
  let announceBingo = 'Bingo! On ';

  const [rowArray, columnArray] = initializeCounters(cardArray);

  // Iterate through the numbersArray
  numbers: for (let i = 0; i < numbersArray.length; i++) {
    // Iterate through the rows
    rows: for (let j = 0; j < cardArray.length; j++) {
      // Iterate through the columns
      columns: for (let k = 0; k < cardArray[j].length; k++) {
        if (numbersArray[i] === cardArray[j][k]) {
          rowArray[j] += 1;
          columnArray[k] += 1;
          if (rowArray[j] >= 5 || columnArray[k] >= 5) {
            if (rowArray[j] >= 5) {
              announceBingo += `row ${j + 1}`;
            }
            if (columnArray[k] >= 5) {
              announceBingo += `column ${k + 1}`;
            }
            return [i, announceBingo];
          }
          break rows;
        }
      }
    }
  }
  announceBingo = 'No winning card';
  return [null, announceBingo]
}

const isValidInput = (numbersArray, cardsArray) => {
  return (
    Array.isArray(numbersArray) &&
    Array.isArray(cardsArray) &&
    numbersArray.length > 0 &&
    cardsArray.length > 0
  );
};

const initializeCounters = (cardArray) => {
  const rowArray = new Array(cardArray.length).fill(0);
  const columnArray = new Array(cardArray[0].length).fill(0);
  return [rowArray, columnArray];
};

const findWinningCard = (numbersArray, cardsArray) => {
  let numbersCounter, winningCard;

  cardsArray.forEach((cardArray, index) => {
    const [numberIndex, announceBingo] = checkBingo(numbersArray, cardArray);
    console.log(announceBingo);

    if (numberIndex < numbersCounter || numbersCounter === undefined) {
      numbersCounter = numberIndex;
      winningCard = index + 1;
    }
  });

  return winningCard;
};

module.exports = {
  playBingoGame,
  checkBingo,
  isValidInput,
  initializeCounters,
  findWinningCard,
};
