const assert = require('chai').assert
const convertToOldRoman = require('../scripts/oldRoman')
var pry = require('pryjs')

describe('convertToOldRoman', function(){
  context('converting to roman numerals', function(){
    // it('can convert 1 to old Roman numeral', function(){
    //   assert.deepEqual(convertToOldRoman(1), 'I')
    // });

    it('can convert 4 to old Roman numeral', function() {
      assert.deepEqual(convertToOldRoman(4), 'IIII')
    });

    // it('can convert 5 to old Roman numeral', function(){
    //   assert.deepEqual(convertToOldRoman(5), 'V')
    // });
  });
});
