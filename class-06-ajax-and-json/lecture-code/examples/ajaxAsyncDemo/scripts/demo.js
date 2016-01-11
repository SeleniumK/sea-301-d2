// Run this and demo execution order.
// Try different methods to ensure correct execution.
$.get('dialog/speech.txt', function (data) {
  console.log(data);
  console.log('I should come first.');
});

console.log('I should come second.');
console.log('I should come third!');
