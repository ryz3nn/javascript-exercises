const fibonacci = function(ordinal) { 
  const base = [1,1];
  if (ordinal == 0) return 0;
  if (ordinal == 1) return 1;
  if (ordinal == 2) return 1;
  if (ordinal >= 2) {
    for (let i = 2; i < ordinal; i++) {
      base.push(base[i-2] + base[i-1]);
    }
    return base[ordinal - 1];
  }
  else return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
