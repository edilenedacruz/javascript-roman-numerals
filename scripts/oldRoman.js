var pry = require('pryjs')

function convertToOldRoman(integer) {
  var toArray = makeArray(integer)
  var finalRoman = ""
  for(j = 1; j <= integer; j++) {
    toArray.forEach(function romanfy(num) {
      if (num < 5) {
        finalRoman.append('I')
      } else if (num === 5) {
        finalRoman = "V"
      }
    });
  }
  // eval(pry.it);
  return finalRoman
}

function makeArray(integer) {
  var array = []
  for(i = 1; i <= integer; i++) {
    array.push(i)
  }
  return array
}

module.exports = convertToOldRoman;
