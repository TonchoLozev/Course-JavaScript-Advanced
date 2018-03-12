class Rat {

    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {

        if (this.constructor.name === otherRat.constructor.name) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let string = `${this.name}\r\n`;
        for (let i = 0; i < this.unitedRats.length; i++) {
            string += `##${this.unitedRats[i].name}`;
        }
        return string;
    }
}

let rat1 = new Rat('Pesho');
let rat2 = new Rat('Gosho');
rat1.unite(rat2);
console.log(rat1.toString());