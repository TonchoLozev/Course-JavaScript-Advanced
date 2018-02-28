function solve(arr, sortingType) {

    function sortAsecnding(a, b) {
        return a - b;
    }

    function sortDesecnding(a, b) {
        return b - a;
    }

    //calling the type of sort with Object
    let sorting = {
        'asc': sortAsecnding,
        'desc': sortDesecnding
    };

    //calliung the typew of sort with Map
    let sortingMap = new Map ();
    sortingMap.set('asc', sortAsecnding);
    sortingMap.set('desc', sortDesecnding);

    return arr.sort(sortingMap.get(sortingType));
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));