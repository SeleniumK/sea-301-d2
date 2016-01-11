// Link and run this script to demo fail and always methods.
$.get('dialog/speech.txt', function (data) {
  console.log('I am the data');
  console.log(data);
}).fail(function () {
  console.log('I should come if it fails!');
}).always(function () {
  console.log('I should come always!');
});
