import PlayerName from "../../components/PlayerName";

function BoardScore(){
    return /*html*/`
    <header class="board-score">
        ${PlayerName('Player1')}
        ${PlayerName('Player2')}
    </header>
    `;
}

export default BoardScore;