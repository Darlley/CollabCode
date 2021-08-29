import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

// Toda variavel com $ indica que ela acessa algum elemento da DOM
import {CardGameReverse,CardGame} from './src/components/CardGame/';
import playerScore from './src/components/PlayerScore';

const $root = document.querySelector('[data-js="app"]');
const $htmlCardGame = CardGame();

for(let i=0; i<6; i++){
    $root.insertAdjacentHTML("beforeend", $htmlCardGame);
}

document.addEventListener('click', (event) => {
    if(event.target.dataset.js == "card"){
        event.target.src = CardGameReverse();
        event.target.parentElement.style.backgroundColor = "#F25A70"
    }
})