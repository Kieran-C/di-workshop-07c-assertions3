var chai = require('chai');
var assert = chai.assert;

 // These variables are used in the tests. Don't Edit them.
 var Car = function() {
  this.model = 'cedan';
  this.engines = 1;
  this.wheels = 4;
};

var Plane = function() {
  this.model = '737';
  this.engines = ['left', 'right'];
  this.wheels = 6;
  this.wings = 2;
};

var myCar = new Car();
var airlinePlane = new Plane();


// /** Delete this line and the one at the bottom when you're ready for exercise 16

    suite('Unit Tests Exercise 16 - Objects',function(){
      // Use #property or #notProperty where appropriate
      test('Object has property 1', function() {
        assert.notProperty(myCar, 'wings', 'A car has not wings');
      });
      test('Object has property 2', function() {
         assert.property(airlinePlane, 'engines', 'planes have engines');
      });
      test('Object has property 3', function() {
        assert.property(myCar, 'wheels', 'Cars have wheels');
      });
    });

// Delete this line when you're ready for exercise 16 **/
