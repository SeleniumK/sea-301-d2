// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.initNewArticlePage = function() {
    // Show the HTML form

    // Hide export field (but show it later when article content exists)

    // Add event handlers
    //   . Highlight selected input area
    //   . Update article (live preview)
};

articleView.create = function() {
    // Remove existing article draft

    // Instantiate an article using data the user entered in the form fields

    // Call article's method that uses Handblebars to add this new article to the DOM

    // Apply color/font syntax highlighting to all code blocks in the article

    // Show the export field and Export the new article as a JSON
    // string so it's ready to copy/paste into blogArticles.js
};
