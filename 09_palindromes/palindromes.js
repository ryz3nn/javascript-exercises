const palindromes = function (string) {
  let alphanumeric = 'qwertyuiopasdfghjklzxcvbnm0123456789'
  let cleanedString = string
  .toLowerCase()
  .split('')
  .filter((char) => alphanumeric.includes(char))
  .join('');
  
  let reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
}
palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
