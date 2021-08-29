import './style.css'

// Escrever o HTML dentro do JavaScript, mesmo princípio do JSX do React
function CardGame() {
    return `
        <article class="card-game">
            <img src="./images/alura-pixel.png" alt="Logo da alura" data-js="card">
        </article>
    `;
}

function CardGameReverse() {
    return './images/logo-javascript.png';
}

export {CardGameReverse,CardGame};