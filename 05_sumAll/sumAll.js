const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if (firstNum < 0 || lastNum < 0 || (typeof(firstNum) != 'number') || (typeof(lastNum) != 'number')) {
        return 'ERROR'
    }
    else if (firstNum > lastNum) {
        for (let i = firstNum; i >= lastNum; i--) {
            sum += i;
        }
        return sum;
    }
    else {
        for (let i = firstNum; i <= lastNum; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
