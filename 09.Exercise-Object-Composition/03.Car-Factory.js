function solve(obj) {
    let objToReturn = {};
    let model = obj.model;
    let power = 0;
    let volume = 0;
    let color = obj.color;
    let coupeOrHath = obj.carriage;
    let wheels = obj.wheelsize;
    if (obj.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (obj.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }
    if (obj.wheelsize % 2 === 0) {
        wheels = obj.wheelsize - 1;
    }
    let wheelsArr = [wheels, wheels, wheels, wheels];

    objToReturn.model = model;
    objToReturn.engine = {power: power, volume: volume};
    objToReturn.carriage = {type: coupeOrHath, color: color};
    objToReturn.wheels = wheelsArr;
    return objToReturn;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));