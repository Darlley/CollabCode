import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

// Toda variavel com $ indica que ela acessa algum elemento da DOM
import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';
import BoardScore from './src/objects/BoardScore';

const $root = document.querySelector('#root');
$root.insertAdjacentHTML("beforeend", `
    ${BoardScore()}
    ${BoardGame(6)}
`);