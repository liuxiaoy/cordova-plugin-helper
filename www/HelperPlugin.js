var exec = cordova.require('cordova/exec'); // eslint-disable-line no-undef

module.exports = {
	a: function (success, error) {
		exec(success, error, "HelperPlugin", "a", []);
	},
};
