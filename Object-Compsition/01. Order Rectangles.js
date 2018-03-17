function solveRectnagles(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let width = Number(arr[i][0]);
        let height = Number(arr[i][1]);
        let obj = {
            width: width,
            height: height,
            area: (function () {
                return this.height * this.width;
            }),
            compareTo: function (anotherRect) {
                if(anotherRect.area() - this.area() === 0){
                    return anotherRect.width - this.width
                }
                return anotherRect.area() - this.area();
            }
        };
        array.push(obj);
    }
    array = array.sort((a, b) => {
        return a.compareTo(b);
    });
    return array;
}

console.log(solveRectnagles([[1, 20], [20, 1], [5, 3], [5, 3]]));