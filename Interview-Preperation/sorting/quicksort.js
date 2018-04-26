function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];

    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }

    let leftSorted = quickSort(leftArr);
    let rightSorted = quickSort(rightArr);

    let sortedArr = [];

    for (let i = 0; i < leftSorted.length; i++) {
        sortedArr[i] = leftSorted[i]
    }
    sortedArr.push(pivot);

    for (let i = 0; i < rightSorted.length; i++) {
        sortedArr[leftSorted.length + 1 + i] = rightSorted[i];
    }

    return sortedArr;

}

console.log(quickSort([6, 7, 1, 5,]));