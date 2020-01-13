var chai = require('chai');
var assert = chai.assert;


// /** Delete this line and the one at the bottom when you're ready for exercise 14

  suite('Unit Tests Exercise 14 - String include',function(){
      // 14 - #include (on #notInclude ) works for strings too !!
      // It asserts that the actual string contains the expected substring
      test('Checking String Inclusion 1', function(){
        assert.include('Arrow', 'row', "Arrow contains row...");
      });
      test('Checking String Inclusion 2', function(){
        assert.notInclude('dart', 'queue', "But a dart doesn't contain a queue");
      });
    });

// Delete this line when you're ready for exercise 14 **/
