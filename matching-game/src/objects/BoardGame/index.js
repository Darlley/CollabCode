import './style.css'
import CardGame from '../../components/CardGame'
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCards) {
    const $htmlContent = CardFrontBack().repeat(amountCards);
    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
export default BoardGame;