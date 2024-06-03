const getTheTitles = function(bookLib) {
  const books = Array.from(bookLib);
  return books.map((book) => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
