function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon};
}
    let classes = solve();
    let Balloon = classes.Balloon;
    let PartyBalloon = classes.PartyBalloon;
    let BirthdayBalloon = classes.BirthdayBalloon;
    let casualBal = new Balloon('blue', 24);
    let partyBal = new PartyBalloon('blue', 24, 'purple', 13);
    let birthDayBal = new BirthdayBalloon('blue', 24, 'purple', 13, 'waza');
    console.log(birthDayBal);