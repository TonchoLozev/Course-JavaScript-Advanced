function mergeSort(arr) {

    arr = mergeSortFunc(arr, 0, arr.length);

    function mergeSortFunc(array, left, right) {
        if (left - right < 2) {
            return array;
        }
        let middle = (left + right) / 2;
        array = mergeSortFunc(array, left, middle);
        array = mergeSortFunc(array, middle, right);

        array = merge(array, left, middle, right);
        return array;
        function merge(array, left, middle, right) {
            let i = left;
            let j = middle;
            let sortedArr = [];
            let k = 0;
            while (true) {
                if (i < middle && j < right) {
                    if(array[i] < array[j]){
                        sortedArr[k] = array[i];
                        ++i;
                    }else{
                        sortedArr[k] = array[j];
                        ++j;
                    }
                }
                else if (i < middle){
                    sortedArr[k] = array[i];
                    ++i;
                }else if(j < right){
                    sortedArr[k] = array[j];
                    ++j;
                }else{
                    break;
                }
                ++k;
            }
            return sortedArr;
        }
    }
}

console.log(mergeSort([1, 5, 22, 13, 6, 8, 13]));