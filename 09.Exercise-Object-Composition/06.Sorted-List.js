function sortedCollection() {
    return {
        collection: [],
        sort: function () {
            this.collection = this.collection.sort((a, b) => a - b);
        },
        add: function (element) {
            this.size++;
            this.collection.push(element);
            this.sort()
        },
        remove: function (element) {

            if (element < this.collection.length && element>=0) {
                this.collection.splice(element, 1);
                this.size--;
                this.sort()
            }
        },
        get: function (element) {
            if (element < this.collection.length && element>=0) {
                return this.collection[element];
            }
        },
        size: 0
    }
}

let collection = sortedCollection();
collection.add(2);
collection.add(1);
collection.add(5);
collection.remove(2);
console.log(collection.size);
console.log(collection.collection);