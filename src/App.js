import React from 'react';
import Head from './components/Head/Head';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {

  let nextValue;

  const winCombinations = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"],
  ];

  const defaultGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameState = defaultGameState.slice();

  function handleButton(buttonElement) {
    if (nextValue) return;

    nextValue = buttonElement.dataset['value'];

    const firstPlayerName = prompt("Enter player name 1:")
    const firstPlayerTextElem = document.querySelector(`.nameplayers__${nextValue}`);

    if (firstPlayerTextElem) {
        firstPlayerTextElem.innerHTML = firstPlayerName;
    }

    const secondUserSign = nextValue === 'x' ? 'o' : 'x';

    const secondPlayerName = prompt("Enter player name 2:")
    const secondPlayerTextElem = document.querySelector(`.nameplayers__${secondUserSign}`);

    if (secondPlayerTextElem) {
        secondPlayerTextElem.innerHTML = secondPlayerName;
    }

    // показывает div с блоком игровой зоны
    let gameAreaElement = document.getElementById('gameArea');
    const style = window.getComputedStyle(gameAreaElement);
    if (style.display === 'none') {
        gameAreaElement.style.display = 'block';
    }

}

  return (
    <div>
      <Head button={handleButton}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
