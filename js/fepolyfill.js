if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.forEach called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      const arr = this;
      for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
          callback.call(thisArg, arr[i], i, arr);
        }
      }
    };
  }