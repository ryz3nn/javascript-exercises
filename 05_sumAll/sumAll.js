const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) return 'ERROR';
    if (typeof(arguments[1]) != typeof(arguments[0])) return 'ERROR';
    if (start > end) [start,end] = [end,start];
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
