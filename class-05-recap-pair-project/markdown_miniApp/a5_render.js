$(function() {
  var $tBody    = $('#tBody');
  var $pHrawOut = $('#pHrawOut');
  var $pMarkOut = $('#pMarkOut');
  var $pJson    = $('#pJson');
  var mObj = {}; // Empty object, filled in during JSON string update

  function render() {
    var bodVal = $tBody.val(); // Raw article markup
    var m = marked(bodVal); // Convert markup to html
    $pHrawOut.text(m); // Render raw markup
    $pMarkOut.html(m); // Render article preview (rendered as HTML)

    // Update JSON article
    mObj.articleBody = m;
    var jsonStr = $pJson.text(JSON.stringify(mObj));
  }

  // Any character change (article editing) updates the live output paragraphs
  $tBody.on('input', render);

  render(); // Render once on doc load
});
