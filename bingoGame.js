const playBingoGame = (numbersArray, cardsArray) => {
  if (!numbersArray.length || !Array.isArray(numbersArray) || !cardsArray.length || !Array.isArray(cardsArray)) return;

  // Check if there is only one card or more
  if (cardsArray.length === 1) {
    const cardArray = cardsArray[0];
    const [, announceBingo] = checkBingo(numbersArray, cardArray);
    console.log(announceBingo);
  } else {
    let numbersCounter, winningCard;
    for (let card = 0; card < cardsArray.length; card++) {
      const cardArray = cardsArray[card];
      const [numberIndex, announceBingo] = checkBingo(numbersArray, cardArray);
      console.log(announceBingo);
      if (numberIndex < numbersCounter || !numbersCounter) {
        numbersCounter = numberIndex;
        winningCard = card + 1;
      }
    }
    console.log(`Psst... to win against the squid, select the card number ${winningCard}!`);
  }
}

const checkBingo = (numbersArray, cardArray) => {
  let announceBingo = 'Bingo! On ';

  // Initialise the counters for rows and columns
  const rowArray = new Array(cardArray.length).fill(0);
  const columnArray = new Array(cardArray[0].length).fill(0);
  
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

module.exports = {
  playBingoGame,
  checkBingo,
};
