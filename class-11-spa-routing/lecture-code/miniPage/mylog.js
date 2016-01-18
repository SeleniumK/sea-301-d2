var $pLog = $('#pLog');
function clearLog()   { $pLog.html(""); }
function mylogNoBr(v) { $pLog.html($pLog.html() + v         ); }
function mylog(v)     { $pLog.html($pLog.html() + v + "<br>"); }

// "One-shot" where only the latest logged string is kept
function mylog1(v)    { clearLog();  $pLog.html($pLog.html() + v + "<br>"); }
