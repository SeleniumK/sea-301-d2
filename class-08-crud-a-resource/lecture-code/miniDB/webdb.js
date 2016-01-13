var webDB = {};
webDB.sqlResult = null;

webDB.verbose = function (verbose) {
  var msg;
  if (verbose) {
    html5sql.logInfo = true;
    html5sql.logErrors = true;
    html5sql.putSelectResultsInArray = true;
    msg = 'html5sql verbosity on';
  } else {
    html5sql.logInfo = false;
    html5sql.logErrors = false;
    html5sql.putSelectResultsInArray = false;
    msg = 'html5sql verbosity off';
  }
  console.log(msg);
};

webDB.init = function() {
  // Open and init DB
  try {
    if (openDatabase) {
      webDB.verbose(true);
      webDB.connect('blogDB', 'Blog Database', 5*1024*1024);
    } else {
      console.log('Web Databases not supported.');
    }
  } catch (e) {
    console.error('Error occured during DB init. Web Database may not be supported.');
  }
};

webDB.connect = function (database, title, size) {
  html5sql.openDatabase(database, title, size);
};

webDB.runSQLcmd = function(cmd) {
  webDB.execute( cmd,
                 function(response) {
                   mylog('<hr>'+cmd+"<br>"+JSON.stringify(response));
                 }
               );
}

webDB.execute = function (sql, callback) {
  callback = callback || function() {};
  html5sql.process(
    sql,
    function (tx, result, resultArray) {
      callback(resultArray);
    }
  );
};

webDB.defer = function (callback) {
  callback = callback || function() {};
  html5sql.process(
    'SELECT * FROM articles WHERE 0=1;',
    function (tx, result, resultArray) {
      callback(resultArray);
    }
  );
};

webDB.getAllArticles = function (callback) {
  callback = callback || function() {};
  html5sql.process(
    'SELECT * FROM articles;',
    function (tx, result, resultArray) {
      callback(resultArray);
    }
  );
};

webDB.importArticlesFrom = function (path) {
  $.getJSON(path, webDB.insertAllRecords);
};

webDB.insertAllRecords = function (articles) {
  articles.forEach(webDB.insertRecord);
};

// Insert article record into database
webDB.insertRecord = function (a) {
  html5sql.process(
    [{
      'sql': 'INSERT INTO articles (title, author, body) VALUES (?, ?, ?);',
      'data': [a.title, a.author, a.body],
    }],
    function () {
      console.log('Success inserting record for ' + a.title);
    }
  );
};
