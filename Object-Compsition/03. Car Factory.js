function selectCar(obj) {

    let model = obj.model;
    let power = obj.power;
    let color = obj.color;
    let carriage = obj.carriage;
    let wheelSize = obj.wheelsize;
    let volume = 0;

    (function () {
        if (power <= 90) {
            power = 90;
            volume = 1800;
        } else if (power <= 120) {
            power = 120;
            volume = 2400;
        } else {
            power = 200;
            volume = 3500;
        }
    })();
    let wheels = [];
    if (wheelSize % 2 === 0) {
        wheelSize -= 1;
        wheels =[wheelSize, wheelSize, wheelSize, wheelSize];
    }
    wheels =[wheelSize, wheelSize, wheelSize, wheelSize];
    let car = {
        model: model,
        engine: {power: power, volume: volume},
        carriage: {type: carriage, color: color},
        wheels: wheels
    };
    return car;
}

console.log(selectCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));