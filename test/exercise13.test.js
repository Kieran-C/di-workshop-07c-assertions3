var chai = require('chai');
var assert = chai.assert;

    suite('Unit Tests Exercise 13 - Strings',function(){
      // 13 - #isString asserts that the actual value is a string.
      test('Are floating numbers strings?', function(){
        assert.isNotString(Math.sin(Math.PI/4), 'a float is not a string');
      });
      test('Are Environment Variables strings?', function(){
        assert.isString(process.env.PATH, 'env vars are strings (or undefined)');
      });
      test('Are JSONs strings?', function(){
        assert.isString(JSON.stringify({type: 'object'}), 'a JSON is a string');
      });
    });
