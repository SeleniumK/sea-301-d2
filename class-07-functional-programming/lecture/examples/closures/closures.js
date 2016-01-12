/*---------------------------------.
 | Demonstration of closures in JS |
 .---------------------------------*/

/*
  Physical Demo

  Roles: Boss, mtnCook, A, B

  Boss: Call mtnCook, give card A, say "1".
        mtnCook returns A w/ private card A and memory of "2".

  Boss: Call mtnCook, give card B, say "2".
        mtnCook returns B w/ private card B and memory of "1".

  Boss: Call A with "1"
        A: Read aloud private card 2 (i.e., memory(2) * "1") times.
  Boss: Call B with "3"
        B: Read aloud private card 3 (i.e., memory(1) * "3") times.
*/

function mtnCook(card_in, nReps_in) {
  var card  = card_in;
  var nReps = nReps_in; // Twice the number of repeats
  var newCitizen = function(mult) {
    for (var ii = 0; ii < (mult * nReps); ii++) {
      mylog('My card says ' + card);
    }
  }

  return newCitizen;
}

function boss() {
  var fnA = mtnCook("Diffuse", 2);
  var fnB = mtnCook("ExplodingKitten", 1);

  mylog('Results of filtering oldArray using lucky():');
  fnA(1);

  mylog('<br>Results of filtering oldArray using revenge():');
  fnB(3);
}

$(function() {
  boss();
});
