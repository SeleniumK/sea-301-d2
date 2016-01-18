(function(module) {
  var articlesController = {};

  articlesController.index = function() {
    $('#about').hide();
    $('#articles').show();
    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
  };

  module.articlesController = articlesController;
})(window);
