function sortObjects(matrix) {
    let arrayOfObjects = [];
    for (let i = 0; i < matrix.length; i++) {
        let objRectangle = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (otherObj) {
                let diff = otherObj.area() - this.area();
                if (diff === 0) {
                    return otherObj.width - this.width;
                }
                return diff;
            }
        };
        arrayOfObjects.push(objRectangle);
    }
    return arrayOfObjects.sort((a, b) => a.compareTo(b));
}

console.log(sortObjects([[1, 20], [20, 1], [5, 3], [5, 3]]));