# SQL and Resource CRUD

The starter code is all set for you and a pair to dive it, and get it working!

## User Stories: MVP
 - As a developer, I want article data to persist with SQL, so that I can store more, faster and have more query flexibility.

This means you'll want to be able to do full CRUD on articles in the database. You'll have to use SQL to make a table for articles (and clear out the table for troubleshooting), and then teach each article instance how to write or update itself to the database, or delete itself.

Crucially, you'll need to trace through the app logic, and all those callback functions to determine WHEN is the right time to load data, or convert JSON.

Look through the TODOs, which signify areas of the code with varying levels of completeness, and focus initially on writing correct SQL. Practice in the web inspector.

Since there is no portfolio assignment, see if you can reach any stretch goals. 

## User Stories: Stretch Goals
 - As a developer, I want a more flexible editor page (editor/articles.html) that can add, update, or delete entries.
 - As an author, I want an admin mode with an edit link on each article (index.html?admin=true).
 - As an author, I want to load an existing article in the editor (editor/articles.html?id=42).
 - As an author, I want to have draft posts, so that I can save my writing without publishing.

## Technical Requirements and Grading Rubric
 - Keep your code linted, as you work. Clean up all concerns before submitting.
 - Continue to make good use of SMACSS principles.
 - Utilize webSQL (the via provided `webDB` wrapper) to load and store articles information
 - Import the data into WebSQL from your JSON source.
