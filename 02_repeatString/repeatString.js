const repeatString = function(str, num) {
    let string = str;

    if (num < 0) {
        return "ERROR";
    } else {
        return string.repeat(num);
    }
};

// Do not edit below this line
module.exports = repeatString;
