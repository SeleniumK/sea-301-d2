(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
