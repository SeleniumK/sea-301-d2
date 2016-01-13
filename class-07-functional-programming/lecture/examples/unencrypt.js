// "Encrypt" a string using ROT13
// This can be run in node or Chrome console

var cyphertext;

// detect node or browser
if (typeof window === 'undefined') {
  // command would be `node unencrypt cyphertext`
  cyphertext = process.argv[2];
} else {
  cyphertext = prompt('What text do you want to unencrypt?');
}

var decryptor = function(x) {
  return String.fromCharCode( x.charCodeAt(0) - 13 );
};

// String.prototype does not have the map method
// TypeError: plaintext.map is not a function
//var result = plaintext.map(encryptor);

// We can borrow map from Array
var result = Array.prototype.map.call( cyphertext, decryptor ).join('');

console.log( result );
