// Which programming languages have increased in rank recently?
// We can find this data on the TIOBE index here:
// http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html

// I've scraped the page and saved just the table rows for you in tiobe.html
// This avoids a Cross Origin Resource sharing issue where you are not allowed to
// $.get pages that are not on your domain

// initialize the `data` variable here so, it has a global scope
// if we were being really careful we could wrap all this in an IIFE or module
var data = '';

$.get('tiobe.html', function(response){
  // we take the response (text of tiobe.html) and assign it to data.
  data = response;
})
  // and then we hand off to processTable when done
  .done(processTable);

function processTable(){
  // first we will just log the raw data
  console.log(data);

  // first real step is to figure out the rows
  // split will create an array of rows for us
  console.log( data.split( '<tr>' ) );

  // the first result in the array of rows is an empty string, so
  // let's get rid of that
  console.log(
    data
      .split('<tr>')
      .slice(1)   // take everything in the array but the first one (zero-th index)
  );

  // now let's process each row
  // we'll need to transform each row into something useful (like columns!)
  // a map applies a function to each element of an array, so that's what we want
  console.log(
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

  console.log(
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

  // the problem is that each column has a </td> in it. That's extraneous.
  // Let's get rid of it. We need to transform each element in an array, so
  // that is a map, again. This time for each colulmn.
  console.log(
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

  // now we can answer our question about which programming languages have moved
  // up in rank

  console.log(
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
      }, [])
  );
}
