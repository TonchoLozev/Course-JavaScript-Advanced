function GCD(a, b) {
    let d = 0;
    while (true) {
        if (a % 2 !== 0 || b % 2 !== 0) {
            break;
        }
        a /= 2;
        b /= 2;
        d++;
    }
    while (true) {
        if (a === b) {
            break;
        }
        if (a % 2 === 0) {
            a /= 2;
        } else if (b % 2 === 0) {
            b /= 2;
        } else if (a > b) {
            a = (a - b) / 2;
        } else {
            b = (b - a) / 2;
        }
    }
    return a;
}

console.log(GCD(252, 105));