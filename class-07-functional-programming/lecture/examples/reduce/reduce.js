/*-------------------------------------------------------.
 | Demonstration of the .reduce() Array prototype method |
 .-------------------------------------------------------*/

/* Roles: Boss, Reduce, Add, Mult

   Boss tells Reduce to run Add  on arr1.
   Boss tells Reduce to run Mult on arr1.

   Repeat on arr2.
 */

var arr1 = [-2, -1, 0, 1];
var arr2 = [ 2,  3, 4];

function add(prev, cur) {
  return (prev + cur);
}

function mult(prev, cur) {
  return prev * cur;
}

function boss() {
  var sum1  = arr1.reduce(add);
  var prod1 = arr1.reduce(mult);

  var sum2  = arr2.reduce(add);
  var prod2 = arr2.reduce(mult);

  mylog('Result of adding together all elements of arr1: '      + sum1 );
  mylog('Result of multiplying together all elements of arr1: ' + prod1);

  mylog('<br>Result of adding together all elements of arr2: '  + sum2 );
  mylog('Result of multiplying together all elements of arr2: ' + prod2);
}

$(function() {
  boss();
});
