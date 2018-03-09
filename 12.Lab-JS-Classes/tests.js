class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
let myRect = new Rectangle(4, 5, 'blue', 'salam');
myRect.color = 'green';
console.log(myRect);