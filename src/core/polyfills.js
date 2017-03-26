if (typeof window.Object.assign !== 'function') {
  window.Object.assign = function(target) { // .length of function is 2
    'use strict';
    if (target === null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = window.Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (window.Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

try {
  window.Object.assign({}, {});
} catch (e) {
  alert('your browser is not supported, please upgrate to a more secure browser');
  window.location.href = 'https://browser-update.org';
}