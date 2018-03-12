function solveMelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        toString() {
            let text = `Element: ${this._name}\n`;
            text += `Sort: ${this.melonSort}\n`;
            text += `Element Index: ${this._elementIndex}`;
            return text;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._name = 'Water';
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._name = 'Fire';
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._name = 'Earth';
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._name = 'Air';
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._name = 'Water';
            this.elements = ['Water', 'Fire', 'Earth', 'Air'];
            this.currentElemenet = 0;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        morph() {
            if (this.currentElemenet === this.elements.length - 1) {
                this.currentElemenet = -1;
            }
            this.currentElemenet += 1;
            this._name = this.elements[this.currentElemenet];
        }
    }

    return {Melon, Airmelon, Earthmelon, Watermelon, Firemelon, Melolemonmelon};
}

let classes = solveMelons();

let Melon = classes.Melon;

let Airmelon = classes.Airmelon;
let Earthmelon = classes.Earthmelon;
let Watermelon = classes.Watermelon;
let Firemelon = classes.Firemelon;
let Melolemonmelon = classes.Melolemonmelon;

if (Object.getPrototypeOf(Object.getPrototypeOf(Melolemonmelon)) === Melon) {
    console.log('Yes');
} else {
    console.log('No');
}
