/* Students: Boss, Helper, Writer, Timer

   Boss writes this on the whiteboard:
     "Thanks for the ______, _______. I also like the __________ it came in.
                     (gift)  (giver)                  (pkg type)

      Generous person: _______'

   Boss asks Writer to do these, in order:
     When Helper hands you a gift,
     1. Describe it verbally.
     2. Fill in blanks on the whiteboard.
     3. Copy sender's name to the blank after 'Generous person'.
     4. Take Timer's marker away.

   Boss asks Helper to do these, in order:
     1. Get gift from post office.
     2. Talk to Writer when gift is on hand.

   Boss tells Timer:
     Writes sequence of integers on the board, starting at 1, and count up.
     Write a new num. every 2 secs and read aloud the 'Generous person'. If it's
     blank, yell ["blank", "undefined", or "error" depending on global var below.]
     Stops writing when Writer takes marker.

   Helper takes at least 10 seconds to get gift from post office.
*/
var msDelay = 1;
var ii = 1;
var card_written = false;
var idInterval = 0;

// 1. Declare global var, init to empty string
var generousPerson = '';

// 2. Worse: Declare global var but don't init
//var generousPerson;

// 3. Even worse: Don't even declare global var.
//

function write_thankU_card(gift) {
  mylog('<p>JSON object\'s contents:<br>' + JSON.stringify(gift));


  mylogNoBr('Thanks for the <strong>'  + gift.contents + '</strong>, ');
  mylogNoBr('<strong>' + gift.sender + '</strong>! ');
  mylog('I love the <strong>' + gift.package_type + '</strong> it came in.');

  generousPerson = gift.sender; // Copy data to global var
  card_written = true;
}

function showTicks() {
  mylogNoBr('tic toc, ii=' + ii + ' '); ii++;
  mylog('Generous person = ' + generousPerson);
  if (card_written) { stopInterval(); } // Stop timer loop
}

function stopInterval() {
  if (idInterval) { clearInterval(idInterval); }
}

$.getJSON("gift.json",
          write_thankU_card);
var idInterval = setInterval(showTicks, msDelay);
