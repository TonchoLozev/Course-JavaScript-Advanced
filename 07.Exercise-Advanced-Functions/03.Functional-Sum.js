function add (num) {
    let result = num;

    function sum(num1){
        result += Number(num1);
        return sum;
    }
    sum.toString = function () {
        return result;
    };
    return sum;
}

console.log(add(1));