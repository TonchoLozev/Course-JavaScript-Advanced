class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        if (!isNaN(score)&& score!== null) {
            this.scores.push(Number(score));
            return this;
        }
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        let sorted = this.scores.sort((a, b) => b - a);
        return sorted[0];
    }

    get topFiveScore() {
        let arr = [];
        let sorted;
        if (this.scores.length > 5) {
            sorted = this.scores.sort((a, b) => b - a);
            for (let i = 0; i < 5; i++) {
                arr.push(sorted[i]);
            }
        } else {
            sorted = this.scores.sort((a, b) => b - a);
            for (let i = 0; i < this.scores.length; i++) {
                arr.push(sorted[i]);
            }
        }
        return arr;
    }

    toString() {

        let sorted = this.scores.sort((a, b) => b - a);
        return `${this.nickName}: [${sorted.join(',')}]`;
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);


console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria").addScore(350).addScore(779).addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);