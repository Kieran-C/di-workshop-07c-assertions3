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

// /** Delete this line and the one at the bottom when you're ready for exercise 17

    suite('Unit Tests Exercise 17 - Object TypeOf',function(){
      // 17 #typeOf asserts that value’s type is the given string,
      // as determined by Object.prototype.toString.
      // Use #typeOf or #notTypeOf where appropriate
      test('Object typeof',function(){
        assert.typeOf(myCar, 'object');
      }),
      test('type of Object property 1',function(){
        assert.typeOf(myCar.model, 'string');
      });
      test('type of Object property 2',function(){
        assert.notTypeOf(airlinePlane.wings, 'string');
      });
      test('type of Object property 3',function(){
        assert.typeOf(airlinePlane.engines, 'array');
      });
      test('type of Object property 4',function(){
        assert.typeOf(myCar.wheels, 'number');
      });
    })

// Delete this line when you're ready for exercise 17 **/
