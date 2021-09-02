import './style.css'
import CardGame from './src/components/cardGame';

const $root = document.querySelector('[data-js="app"]');

const $card = CardGame();
$root.insertAdjacentHTML("beforeend", $card)
console.log($card)

