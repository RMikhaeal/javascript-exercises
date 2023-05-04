const removeFromArray = function(arr) {
    const len = arguments.length;
    let array = arr;

    for (let i = 1; i < len; i++) {
        array = array.filter(e => e !== arguments[i]);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
