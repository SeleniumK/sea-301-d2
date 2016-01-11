/*global data */
/*eslint quotes: 0 */

// initialize the `data` variable here so, it has a global scope
// so it can be called from Function objects
var data = '';

// STEPS holds all the code we will walk through, step-by-step
var steps = [];

steps[0] = {
  hint: "// first just log the raw data. It is in a variable named data.\n\
// use jQuery's text method to set the value of the textarea named output\n\
// click the process data button when ready to test\n\
$('textarea[name=output]')\n",
  answer: "$('textarea[name=output]').text(data);"
};

steps[1] = {
  hint: "// first real step is to figure out the rows\n\
// split will create an array of rows for us\n\
// split on the html for the row delimiter, <tr>\n",
  answer: "$('textarea[name=output]').text( data.split( '<tr>' ) );"
};

steps[2] = {
  hint: "// the first result in the array of rows is an empty string, so\n\
// let's get rid of that\n",
  answer: "$('textarea[name=output]').text(\n\
    data\n\
      .split('<tr>')\n\
      .slice(1)   // take everything in the array but the first one (zero-th index)\n\
  );"
};

steps[3] = {
  hint: "// now let's process each row\n\
// we'll need to transform each row into something useful (like columns!)\n\
// a map applies a function to each element of an array, so that's what we want\n\
// make sure to invoke the step3(); at the end of the text area, it's not added for you automatically",
  answer: function step3() {
    $('textarea[name=output]').text(
    data
      .split('<tr>')
      .slice(1)
      .map( function(row) {
        // first we need to remove the closing </tr>
        // the -5 means remove the last 5 characters
        return row
          .slice(0, -5);
      })
  );
  }
};

steps[4] = {
  hint: "//now we need to split the row into columns\n\
// what delimits a column in a table? a <td>",
  answer: function step4() {
    $('textarea[name=output]').text(
    data
      .split('<tr>')
      .slice(1)
      .map( function(row) {
        return row
          .slice(0, -5)
          // now we need to split the row into columns
          .split('<td>')
          // remove the first empty column
          .slice(1);
          // now we have a nice array of arrays.
          // Each elment in the outer array has six elements, which are the
          // columns of the table.
      })
  );
  }
};



steps[5] = {
  hint: "// the problem is that each column has a </td> in it. That's extraneous.\n\
// Let's get rid of it. We need to transform each element in an array, so\n\
// that is a map, again. This time for each colulmn.",
  answer: function step5() {
    $('textarea[name=output]').text(
    data
      .split('<tr>')
      .slice(1)
      .map( function(row) {
        return row
          .slice(0, -5)
          .split('<td>')
          .slice(1)
          .map( function(col){
            // chop off the last 5 characters
            return col.slice(0, -5);
          });
      })
  );
  }
};


steps[6] = {
  hint: "// now we can answer our question about which programming languages have moved\n\
// up in rank",
  answer: function step6() {
    var newData =
    data
      .split('<tr>')
      .slice(1)
      .map(function(row) {
        return row
          .slice(0, -5)
          .split('<td>')
          .slice(1)
          .map(function(col) {
            return col.slice(0, -5);
          });
      })
      .reduce(function(acc, col) {
        var rank = col[0];
        var prevRank = col[1];
        var name = col[3];
        if (rank < prevRank) {
          acc.push({
            rank: rank,
            prevRank: prevRank,
            name: name
          });
        }
        return acc;
      }, []);
    $('textarea[name=output]').text(JSON.stringify(newData, null, '  '));
  }
};

// end of steps definition


// events
$('.step-buttons').append(
  steps.map(function(step, i) {
    var questionAndAnswer = $('<div>');

    var questionButton = $('<button>Step ' + i + '</button>');
    questionButton.on('click', function(e) {
      code_editor.setValue(steps[i].hint.toString());
      $('#answer' + i).fadeIn(9000);
    });

    var answerButton = $('<button id="answer' + i
      + '" style="display: none">Answer '
      + i
      + '</button>');
    answerButton.on('click', function(e) {
      code_editor.setValue(steps[i].answer.toString());
    });

    questionAndAnswer.append([
      questionButton,
      " ",
      answerButton
    ]);

    return questionAndAnswer;
  })
);

$('#prefill').on('click', function prefill(e) {
  $.get('tiobe.html', function(response){
    $('textarea[name=input]').text(response);
    data = response;
  });
});

$('input[name=submit]').on('click', function(e){
  e.preventDefault();
  var processor = new Function(code_editor.getValue());
  processor();
});

$('button#clear').on('click',function(e){
  $('textarea[name=output]').text('');
});

// set up editor
var code_editor = ace.edit('code');
code_editor.getSession().setMode('ace/mode/javascript');
code_editor.getSession().setTabSize(2);
code_editor.getSession().setUseSoftTabs(true);
code_editor.$blockScrolling = Infinity;
