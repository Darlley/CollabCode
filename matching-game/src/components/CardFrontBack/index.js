import CardGame from "../CardGame";

function CardFrontBack(Cards){
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('javascript', 'Logo do JavaScript')}
        </article>
    `;
}

export default CardFrontBack;