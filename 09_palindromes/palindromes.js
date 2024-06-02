const palindromes = function (string) { 
  let alphalnumberic = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  const cleanedString = string.toLowerCase()
                              .split('')
                              .filter((char) => alphalnumberic.includes(char));
  let reversedString = Array.from(cleanedString).reverse();
  if(reversedString.join() === cleanedString.join()) return true;
  else return false; 
}
// Reverse change original array

// Do not edit below this line
module.exports = palindromes;
