function copyrProperties() {
    let obj = {};
    obj.extend = function (template) {
        for (let key in template) {
            if (typeof template[key] === 'function') {
                obj.__proto__[key] = template[key];
            } else {
                obj[key] = template[key];
            }

        }
    };
    return obj;
}

let template = {
    extensionMethod: function () {
        console.log('pesho');
    },
    extensionProperty: 'someString'
};
let obj = copyrProperties();
obj.extend(template)
console.log(obj.__proto__)
console.log(obj)
let obj3 = Object.create(template);
console.log(obj3.__proto__)