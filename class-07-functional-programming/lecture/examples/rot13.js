// "Encrypt" a string using ROT13
// This can be run in node or Chrome console

var plaintext = 'What is the plan Stan? I am in the brown van.';

var encryptor = function(x) {
  return String.fromCharCode( x.charCodeAt(0) + 13 );
};

// String.prototype does not have the map method
// TypeError: plaintext.map is not a function
//var result = plaintext.map(encryptor);

// We can borrow map from Array
var result = Array.prototype.map.call( plaintext, encryptor ).join('');

console.log( result );
