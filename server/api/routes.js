module.exports = function (app) {
	const configController = require('./controllers/ConfigurationController');
	const userController = require('./controllers/UserController');
	const keyManagerController = require('./controllers/KeyManagerController');

	// Configuration
	app.route('/configuration').get(configController.get);
	// User
	app.route('/user/:publicKey').get(userController.get);
	// Key Manager
	app.route('/keyManager/:publicKey').get(keyManagerController.get);
};
