// "the odds are good but the goods are odd"
var xs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var isOdd = function(x) {
  return x % 2;
};

var odds = xs.filter( isOdd );

console.log( odds );
