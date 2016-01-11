// Link and run this demo to show use of named functions.
demo = {};
demo.getData = function (data) {
  console.log(data);
  console.log('I should come first.');
};

demo.getDone = function () {
  console.log('I should come second.');
};

demo.getDoneR = function () {
  console.log('I should come third!');
};


$.get('dialog/speech.txt', demo.getData)
  .done(demo.getDone)
  .done(demo.getDoneR);
