page.base('/');
page('/', index);
page('/about', about);

page();

function index(){
  articlesController.index();
}

function about(){
  aboutController.index();
}
