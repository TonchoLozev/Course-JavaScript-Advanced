function cardDeckBuilder(selector) {
    let suits = {
        C: '\u2663',
        D: '\u2666',
        H: '\u2665',
        S: '\u2660'
    };

    function addCard(face, suit) {
        let cardDiv = $(`<div>${face} ${suits[suit]}</div>`).addClass('card');
        cardDiv.on('click', reverseFunc
        );
        $(selector).append(cardDiv);
    }

    function reverseFunc() {
        let divs = $(selector).children().toArray();
       divs.reverse();
        $(selector).append(divs);

    }

    return {addCard};
}