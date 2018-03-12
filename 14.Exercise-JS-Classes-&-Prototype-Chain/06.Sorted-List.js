class SortedList {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    sort() {
        this.collection = this.collection.sort((a, b) => a - b);
    }

    add(element) {
        this.size++;
        this.collection.push(element);
        this.sort()
    }

    remove(element) {

        if (element < this.collection.length && element >= 0) {
            this.collection.splice(element, 1);
            this.size--;
            this.sort()
        }
    }

    get(element) {
        if (element < this.collection.length && element >= 0) {
            return this.collection[element];
        }
    }
}
let list = new SortedList();
list.add(5);
list.add(7);
list.remove(1);
console.log(list.get(0));
console.log(list);