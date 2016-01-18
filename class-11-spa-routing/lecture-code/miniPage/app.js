// the "notfound" implements a catch-all with page('*',
// notfound). Here we have no catch-all, so page.js will redirect to
// the location of paths which do not match any of the following
// routes
page.base('');

page('/', index);
page('/about', about);
page('/contact', contact);
page('/contact/:contactName', contact);
page('*', notFound);

page();

function index() { mylog1('MAIN INDEX PAGE.<br>Article 1<br>Article 2'); }
function about() { mylog1('About Me:<br>I\'m a coder!'); }

function contact(ctx) {
  mylog1('Contact me at supercoder@supercoder.com<br>' +
	 'Context: ' + (ctx.params.contactName || ''));
}

function notFound() {
    mylog1('Page not found. Please re-type the URL.<br>Or just watch Seahawks game highlights.');
}
