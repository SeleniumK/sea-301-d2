model = {};

model.setupTable = function() {
  webDB.runSQLcmd('DROP TABLE articles');
  webDB.runSQLcmd('CREATE TABLE IF NOT EXISTS articles (title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, body TEXT NOT NULL);');
};
