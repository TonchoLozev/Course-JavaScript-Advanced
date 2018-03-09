class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        //this.calcArea = function () {       //this works, but batter with the other option
        //    return this.width * this.height;
        //}
    }

    calcArea() {                             //this works too
        return this.width * this.height;
    }
}

let myRect = new Rectangle(4, 5, 'blue', 'salam');
myRect.color = 'green';
console.log(myRect.calcArea());