function functiongArray() {
    let collection = [];
    return {
        add: function (element) {
            collection.push(element);
            collection = collection.sort((a, b) => Number(a) - Number(b));
            this.size += 1;
        },
        remove: function (index) {
            if (index < collection.length && index > -1) {
                collection.splice(index, 1);
                collection = collection.sort((a, b) => Number(a) - Number(b));
                this.size -= 1;
            }
        },
        get: function (index) {
            if (index < collection.length && index > -1) {
                return collection[index];
            }
        },
        size: 0
    }
}

let result = functiongArray();
result.add(5);
result.add(3);
console.log(result.size);
