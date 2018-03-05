function printDeckOfCards(arr) {
    let arrayOfCardsToPrint = [];
    for (let i = 0; i < arr.length; i++) {
        let face = arr[i].slice(0, arr[i].length - 1);
        let suit = arr[i].slice(arr[i].length - 1);
        try {
            arrayOfCardsToPrint.push(makeCard(face, suit).toString());
        } catch (ex) {
            console.log(`Invalid card: ${arr[i]}`);
            return;
        }
    }
    console.log(arrayOfCardsToPrint.join(' '));

    function makeCard(face, suit) {
        let arrOfFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let objOfSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        if (arrOfFaces.indexOf(face) === -1 || !objOfSuits.hasOwnProperty(suit)) {
            throw new Error;
        } else {
            return {
                face: arrOfFaces[arrOfFaces.indexOf(face)],
                suit: objOfSuits[suit],
                toString: function () {
                    return `${this.face}${this.suit}`
                }
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
