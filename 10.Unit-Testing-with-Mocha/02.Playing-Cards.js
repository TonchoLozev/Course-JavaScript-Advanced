function makeCard(face, suit) {
    let arrOfFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let objOfSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    if(arrOfFaces.indexOf(face) === -1 || !objOfSuits.hasOwnProperty(suit)){
        throw new Error;
    }else{
        return {
            face: arrOfFaces[arrOfFaces.indexOf(face)],
            suit: objOfSuits[suit],
            toString: function () {
                return `${this.face}${this.suit}`
            }
        }
    }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));
