exports.name = 'api.users.photos';
exports.require = 'api.users';

exports.plugin = function() {
	return {
		init: function() {
			this.require["api.users"].module.getUser(function(user) {
				console.log(user);
			})
		}
	}
}