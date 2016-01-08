var util = {};

util.slug = function(str) {
  return str.replace(/\W/g, '-');
};

util.today = function() {
  return (new Date()).toISOString().slice(0,10);
};
