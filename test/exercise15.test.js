var chai = require('chai');
var assert = chai.assert;

// /** Delete this line and the one at the bottom when you're ready for exercise 7
var formatPeople = function(name, age) {
return '# name: ' + name + ', age: ' + age + '\n';
};

    suite('Unit Tests Exercise 15 - Approximation',function(){
      // 15 - #match Asserts that the actual value
      // matches the second argument regular expression.
      test('#match, #notMatch', function() {
        var regex =  /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
        assert.match(formatPeople('John Doe', 35), regex);
      });
      test('#match, #notMatch', function() {
        var regex =  /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
        assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
      });
    })


// Delete this line when you're ready for exercise 15 **/
