// https://www.codewars.com/kata/vector-class/train/javascript

var Vector = function(components) {
  // TODO: Finish the Vector class.
  // Add functionality
  this.data = components;
  this.add = function(vect) {
    if (this.data.length === vect.length) {
      let result = [];
      for (let i = 0; i < components.length; i++) {
        result[i] = components[i] + vect[i];
      }
      return new Vector(result);
    }
    
    return Error();
  };

  // Subtract functionality
  this.subtract = function(vect) {
    let result = [];
    if (this.data.length === vect.length) {
      for (let i = 0; i < components.length; i++) {
        result[i] = components[i] - vect[i];
      }
      return new Vector(result);
    }

    throw Error();
  };

  this.dot = function(vect) {
    let result = [];
    if (this.data.length === vect.length) {
      vect.map((ele, i) => {
        result[i] = ele * components[i];
      });

      return result;
    }

    throw Error();
  };

  this.norm = function() {
    let result = [];
    components.map((ele, i) => {
      result[i] = Math.pow(components[i], 2);
    });

    return result;
  };

  this.toString = function(vect) {
    return '(' + vect.toString() + ')';
  };

  this.equals = function(vect) {
    console.log(vect.data);
    let status = true;

    vect.data.forEach((ele, i) => {
      if (ele !== components[i]) {
        status = false;
        return;
      }
    });
    return status;
  };
};

var obj1 = new Vector([1, 2, 3]);
console.log(obj1.add([1, 1, 1, 4]));
