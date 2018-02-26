module.exports = function (app) {
	// application -------------------------------------------------------------
	app.get('/', function (req, res) {
		res.sendfile('./public/js/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// api
	app.get('/api/getData', function (req, res) {
		res.send('test data');
	});
};