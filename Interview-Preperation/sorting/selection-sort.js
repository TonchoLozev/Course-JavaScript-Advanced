function bubleSort(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            sortedArr.push(arr[i]);
        } else {
            let index = 0;
            for (let j = 0; j < sortedArr.length; j++) {
                if (arr[i] > sortedArr[j]) {
                   index = j+1;
                }else {
                    break;
                }
            }
            sortedArr.splice(index, 0, arr[i]);
        }
    }
    return sortedArr;
}

console.log(bubleSort([4, 5, 6, 1, 2, 3, 11, 23, 4334, 23, 11]));