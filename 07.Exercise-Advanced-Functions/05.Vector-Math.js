let solution = (function solution() {
    return {
        'add': function (vec1, vec2) {
            let first = vec1[0] + vec2[0];
            let second = vec1[1]+vec2[1];
            return [first, second];
        },
        'multiply': function (vec1, scalar) {
            let first = vec1[0] * scalar;
            let second = vec1[1] * scalar;
            return [first, second];
        },
        'length': function (vec1) {
            let first = vec1[0] * vec1[0];
            let second = vec1[1] * vec1[1];
            return Math.sqrt(first + second);
        },
        'dot': function (vec1, vec2) {
            let first = vec1[0] * vec2[0];
            let second = vec1[1] * vec2[1];
            return first + second;
        },
        'cross': function (vec1, vec2) {
            let first = vec1[0] * vec2[1];
            let second = vec1[1] * vec2[0];
            return first - second;
        }
    }
})();
console.log(solution.add([5.43, -1], [1, 31]));
