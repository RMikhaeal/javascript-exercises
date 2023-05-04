const reverseString = function(str) {
    let len = str.length;
    let string = '';
    
    for (i = len - 1; i >= 0; i--) {
        string += str[i];
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
