function mapSort(map, sortFn) {
    let newMap = new Map();
    if (arguments.length === 1) {
        let sortedMap = Array.from(map).sort((a, b) => {
            if (isNaN(a[0]) && isNaN(b[0])) {
                return a[0].localeCompare(b[0])
            } else {
                return a[0] - b[0];
            }
        });
        for (let [key, value] of sortedMap) {
            newMap.set(key, value)
        }
        return newMap;
    } else if (arguments.length > 1) {
        let sortedMap = Array.from(map).sort(sortFn);
        for (let [key, value] of sortedMap) {
            newMap.set(key, value)
        }
        return newMap;
    }
}

module.exports = mapSort;

let map = new Map();
map.set("Stefan", true);
map.set("Azazel", false);
map.set("Bismoth", false);
map.set("Balrog", true);
map.set("Martel", true);
let sortedMap = mapSort(map);
console.log(sortedMap);