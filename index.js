'use strict';

module.exports = gcf;

/**
 *  Get the highest set of factors (by nearest 2 values) for a number
 *    that is equal to or greater than the argument
 *
 *  @param {Number} num
 *  @return {Array}
 *  @api public
 */

function gcf (num) {

  // some short circuits
  if (num === 1) return [1, 1];
  if (num === 2) return [1, 2];
  if (num === 3) return [1, 3];

  var factors;
  var squareRoot = getSqrt(num);
  var middle

  // if the number is square, return the sqrts
  if (squareRoot) {
    return [squareRoot, squareRoot];
  };

  factors = getFactors(num);
  middle = Math.floor(factors.length / 2)

  if (!factors[middle] || !factors[middle+1]) {
    num++;
    return gcf(num);
  };

  return [factors[middle] || 1, factors[middle+1] || 1]
};

/**
 *  Get an array of the factors for a number
 *
 *  @param {Number}
 *  @return {Array}
 *  @api private
 */

function getFactors(num) {
  var factors = [];

  for (var i = 0; i < num; i++) {
    if (num % i === 0) factors.push(i);
  };

  return factors;
};

/**
 *  Get the square root of a number or false
 *
 *  @param {Number} num
 *  @return {Number|False}
 *  @api private
 */

function getSqrt(num) {
  var val = Math.sqrt(num);
  var found = false;

  // this doesn't work for `4` so:
  if (num === 4) return 2;

  for (var i = 0; i < (num / 2); i++) {
    if (val === i) {
      found = i;
      break;
    };
  };

  return found;
};
