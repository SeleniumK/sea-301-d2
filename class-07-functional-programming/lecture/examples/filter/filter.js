/*-------------------------------------------------------.
 | Demonstration of the .filter() Array prototype method |
 .-------------------------------------------------------*/

/*
Filter Demo
  Roles: Boss, Filter, Lucky, Revenge

  Filter: "That array (points to array on whiteboard) is a Javascript object.
        I am Filter, a method of that array object.
        In fact, I'm more awesome -- I am a method of ALL Javascript arrays!
        I compute stuff by applying a function to every element of an array.
        This is how I work:
        . I take one parameter: a function that accepts one parameter.
        . I loop thru the array in my execution context.
        . For each element, I call the passed-in function and send
          the element as an argument to that function.
        . The function returns a boolean.
          If true, I save the element to a new  array. Else I just move on.
          Sometimes I save the whole array, sometimes I save a few
          items, sometimes I save nothing at all. It depends on which
          elements the function likes.
        . I keep looping, visiting each element.
        . When I'm done looping, I return the new array to whoever called me."

  Boss: "Filter: I'm calling you to tell you to manage Lucky!"
  . Filter & Lucky: Filter "calls" Lucky, says "6".
                 Lucky: "No way!"  Tells Filter "FALSE"
                 Filter:"Thanks for "return"-ing my call. You don't
                         like 6, so I won't save a copy."
                        Calls Lucky again, says "7".
                 Lucky: "I like it!" Tells Filter "TRUE"
                 Filter:"Thanks for "return"-ing my call. I'll keep 7";
                        Writes 7 on board (on left)
                 Repeat with FALSE for 8.

  Filter: "I am a higher-order function because I accept a function
          (points to Add20) as a argument, and I call him/her."

  Lucky: "I am also a 1st class function, just like Add20 and WrapText,
          because Boss can pass me to Filter as an argument."
    Instructor: Ask secret question.
    Lucky:      Give secret answer.

  Boss: "Filter: I'm calling you to tell you to manage Revenge!"
  . Filter & Revenge: Filter "calls" Revenge, says "6".
                 Revenge: "I like it!"  Tells Filter, "TRUE"
                 Filter:"Thanks for "return"-ing my call. You like 6";
                        Writes 6 on board (on left)
                        Calls Lucky again, says "7".
                 Revenge: "Ewww!" Tells Filter, "FALSE"
                 Filter:"Thanks for "return"-ing my call. You don't
                         like 7, so I won't save a copy";
                 Repeat with TRUE for 8.
  Revenge: "I'm a 1st class function. Boss passed me to Filter as an arg."
    Instructor: Ask secret question.
    Revenge:    Give secret answer.
*/
function printValue(val) { mylog('&nbsp; '+val); }

var oldArray = [6, 7, 8];

function lucky(x) {
  return (7 == x);
}

function revenge(x) {
  return ((x % 2) == 0);
}

function boss() {
  var lucky_filter_result  = oldArray.filter(lucky);
  var revenge_filter_result = oldArray.filter(revenge);

  mylog('Results of filtering oldArray using lucky():');
  lucky_filter_result.map(printValue);

  mylog('<br>Results of filtering oldArray using revenge():');
  revenge_filter_result.map(printValue);
}

$(function() {
  boss();
});
