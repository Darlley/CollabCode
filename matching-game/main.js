// Toda variavel com $ indica que ela acessa algum elemento da DOM
import CardGame from './src/components/CardGame/';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);