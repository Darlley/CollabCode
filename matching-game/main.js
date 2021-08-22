import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

// Toda variavel com $ indica que ela acessa algum elemento da DOM
import CardGame from './src/components/CardGame/';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);