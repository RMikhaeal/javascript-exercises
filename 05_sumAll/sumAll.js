const sumAll = function(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number" || n1 < 0 || n2 < 0) return "ERROR";

    let sum = 0, x1, x2, temp;

    if (n1 > n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
    } 

    for (let i = n1; i <= n2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
