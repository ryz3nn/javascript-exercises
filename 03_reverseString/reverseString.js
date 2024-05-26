const reverseString = function(word) {
    // Classic version
    // let wlen = word.length;
    // const reverseText = [];
    // for (let i = 0, j = wlen - 1; i <=  wlen && j >= 0; i++, j--) {
    //     reverseText[i] = word.charAt(j);
    // }
    // return reverseText.join('');

    // Modern version
    return word.split('').reverse().join('');
};
reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
