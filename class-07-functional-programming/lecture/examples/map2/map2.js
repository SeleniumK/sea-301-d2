/*----------------------------------------------------.
 | Demonstration of the .map() Array prototype method |
 .----------------------------------------------------*/
var oldArray = ['Car',   9,   { property1: "free" } ];

function makeNewValue(val) { // Prepend string 'NEW' to val
  var newVal = '**NEW**_' + val;
  return newVal;
}

function printValue(val, label) { mylog('&nbsp; '+label+'= '+val); }

mylog('.============.');
mylog('| IMPERATIVE |');
mylog('.============.<br>');

function boringMap(A) {
  var newA = [];
  for (var ii = 0; ii < A.length; ii++) {
    newA.push(makeNewValue(A[ii])); // Hard-coded function: *NOT FLEXIBLE!*
  }
  return newA;
}

function boringPrintArray(A, label) {
  for (var ii = 0; ii < A.length; ii++) {
    printValue(A[ii], label+'['+ii+']');
  }
}

var newArray = boringMap(oldArray);
boringPrintArray(oldArray, 'oldArray');  mylog('');
boringPrintArray(newArray, 'newArray');

mylog('<br>&nbsp; -----------------------------------------------------');
mylog('&nbsp; Modified prototype of JS\'s built-in data type \"Array\"');
mylog('&nbsp; -----------------------------------------------------');

Array.prototype.sayHi = function(arrayName) {
  mylog('&nbsp; Array \"'+arrayName+'\" says hi!');
}
oldArray.sayHi('oldArray');
newArray.sayHi('newArray');

/*------------.
 | FP version |
 .------------*/
mylog('<br>*==================*');
mylog('| FP (DECLARATIVE) |');
mylog('*==================*<br>');

// NOTE: The `label` parameter is only for demo purposes.
// The built-in .map() operates only on each *element* of an array.
Array.prototype.mymap = function(callback, label) {
  var thisArray = this;
  var newArray = [];
  for (var ii = 0; ii < thisArray.length; ii++) {
    newArray[ii] = callback(thisArray[ii], label); // MUCH MORE FLEXIBLE!
  }
  return newArray;
}

var FParray = oldArray.mymap(makeNewValue);
mylog('Why does the following not print correctly:<br>');
oldArray.mymap(boringPrintArray, 'FPprint:oldArray');

mylog('<br>whereas these print correctly?<br>');
oldArray.mymap(printValue, 'FPprint:oldArray');
mylog('');
FParray.mymap(printValue, 'FPprint:FParray');
