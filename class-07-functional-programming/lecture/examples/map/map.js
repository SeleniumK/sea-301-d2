/*----------------------------------------------------.
 | Demonstration of the .map() Array prototype method |
 .----------------------------------------------------*/

/*
  Roles: Boss, Map, Add20, WrapText

  Whiteboard: "[6, 7, 8]"

  Map: "That array (points to array on whiteboard) is a Javascript object.
        I am Map, a method of that array object.
        In fact, I'm more awesome -- I am a method of ALL Javascript arrays!
        I compute stuff by applying a function to every element of an array."
        This is how I work:
        . I take one parameter: a function that accepts one parameter.
        . I loop thru the array in my execution context.
        . For each element, I call the passed-in function and send
          the element as an argument to that function.
        . The function returns a value, which I save in a new array.
        . I build up the new array, one element at a time as I loop.
        . When I'm done looping, I return the new array to whoever called me."

  Boss: "Map, I'm calling you to tell you to manage Add20!"
  . Map & Add20: Map "calls" Add20, says "6".
                 Add20: "20 plus 6 is 26". Tells Map "26".
                 Map: "Thanks for "return"-ing my call";
                      writes "26" below "6" on whiteboard.
                 Repeat with remaining 2 elements.

    Map: "I am a higher-order function because I accept a function
          (points to Add20) as a argument, and I call him/her."

    Add20: "I am a first class function because I'm a function and
            Boss can pass me to Map as an argument."

  Boss: "Map, I'm calling you to tell you to manage WrapText!"
  . Map & WrapText: Map "Calls" WrapText, says "6"
                    WrapText: Says "I 6 kittens!"
                    Map writes "I 6 kittens" on whiteboard below "26"
                    Repeat with remaining 2 elements.

    WrapText: "I am also a 1st class function, just like Add20,
               because Boss can pass me to Map as an argument."
*/
function printValue(val) { mylog('&nbsp; '+val); }

var oldArray = [6, 7, 8];

function add20(x) {
  return (x + 20);
}

function wraptext(x) {
  return ('I ' + x + ' kittens.');
}

function boss() {
  var add20_map_result    = oldArray.map(add20);
  var wraptext_map_result = oldArray.map(wraptext);

  mylog('Results of mapping add20() onto oldArray:');
  add20_map_result.map(printValue);

  mylog('<br>Results of mapping wraptext() onto oldArray:');
  wraptext_map_result.map(printValue);
}

$(function() {
  boss();
});
