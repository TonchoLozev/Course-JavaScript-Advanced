function getExtendableObject() {
    let obj = {}

    obj = Object.create(obj)

    obj.extend = function(template) {
        for (var key in template) {
            if (template.hasOwnProperty(key)) {
                var element = template[key];
                if (typeof element === 'function') {
                    obj.__proto__[key] = element
                } else {
                    obj[key] = element
                }
            }
        }
    }

    return obj
}

let template = {
    extensionMethod: function() { console.log('gosho') },
    extensionProperty: 'someString'
}


let obj = getExtendableObject()
obj.extend(template)

console.log(obj)