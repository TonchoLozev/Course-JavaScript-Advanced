let result = (function result() {
    let counter = 1;
    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {
            for (let keys of Object.keys(template)) {
                console.log(keys);
                if (typeof(template[keys]) === 'function') {
                    Object.getPrototypeOf(this)[keys] = template[keys];
                } else {
                    this[keys] = template[keys];
                }
            }
        }
    }
})()
let Extensible = result;
let obj1 = new Extensible();
let template = {
    extensionMethod: function () {
        console.log('Jorkicha')
    },
    extensionProperty: 'someString'
};

obj1.extend(template);
console.log(obj1);
