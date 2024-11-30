document.getElementById('roll-button').addEventListener('click', rollDice);

function rollDice() {
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  const diceNumbers = [1, 2, 3, 4, 5, 6];

  const dice1Element = document.getElementById('dice1');
  const dice2Element = document.getElementById('dice2');
  const resultMessageElement = document.getElementById('result-message');
  const randomNumberElement = document.getElementById('random-number');

  dice1Element.style.animationPlayState = 'running';
  dice2Element.style.animationPlayState = 'running';
  resultMessageElement.textContent = '';
  randomNumberElement.textContent = '';

  setTimeout(() => {
    const dice1Index = Math.floor(Math.random() * 6);
    const dice2Index = Math.floor(Math.random() * 6);

    const dice1Value = diceNumbers[dice1Index];
    const dice2Value = diceNumbers[dice2Index];

    dice1Element.textContent = diceFaces[dice1Index];
    dice2Element.textContent = diceFaces[dice2Index];

    const sum = dice1Value + dice2Value;

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (sum % 2 === 0) {
      resultMessageElement.textContent = `Dice results in ${sum}. It's even, you need to add.`;
      randomNumberElement.textContent = `You need to make ${randomNumber}.`;
    } else {
      resultMessageElement.textContent = `Dice results in ${sum}. It's odd, you need to subtract.`;
      randomNumberElement.textContent = `You need to make ${randomNumber}.`;
    }

    dice1Element.style.animationPlayState = 'paused';
    dice2Element.style.animationPlayState = 'paused';
  }, 1000);
}
