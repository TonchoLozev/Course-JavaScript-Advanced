class Circle {
    constructor (radius){
        this.radius = radius;
    }
    get diameter (){
        return 2 * this.radius;
    }
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

let circle1 = new Circle(2);
console.log(circle1.diameter);
circle1.diameter = 6;
console.log(circle1.diameter);
console.log(circle1);