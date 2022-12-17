const fibonacci = function(num) {
    // Check for negative number
    if (num < 0) {
        return 'OOPS';
    }

    // Create array of numbers up to num
    let array = [1,1];
    for (i = 2; i < num; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array[(num - 1)];
    // Sum array number from num-2 & num-1 and return
};

// Do not edit below this line
module.exports = fibonacci;
