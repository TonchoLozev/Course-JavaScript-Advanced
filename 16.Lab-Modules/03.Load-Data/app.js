let data = require('./data');

function sort(property) {
    let sortedArray = data.sort((a, b) => {
        if (isNaN(Number(a[property])) && isNaN(Number(b[property]))) {
            return a[property].localeCompare(b[property]);
        } else {
            return a[property] - b[property];
        }
    });
    return sortedArray;
}

function filter(property, value) {
    let filteredArray = [];
    for(let obj of data){
        if(obj[property] === value){
            filteredArray.push(obj);
        }
    }
    return filteredArray;
}

result.sort = sort;
result.filter = filter;