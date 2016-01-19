(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repos) {
    var aboutTemplate = Handlebars.compile($('#about-template').text());
    return aboutTemplate(repos);
  };

  repoView.index = function(){
    ui();
    $('#about ul').append(
      repos.with('stargazers_count').map(render)
  )};

  module.repoView = repoView;
})(window);
