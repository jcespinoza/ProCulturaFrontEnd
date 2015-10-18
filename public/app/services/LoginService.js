/**
 * Created by william on 8/3/15.
 */
angular.module('app').service('LoginService', ['$http', 'HostFactory', function($http, HostFactory){
	
	var loginService = {};

	loginService.login = function(user){
		return $http({
				method: 'POST',
				url: HostFactory.serverName + '/Token',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
				data: {grant_type:'password', username: user.username, password: user.password}
		});
	};
	return  loginService;
}]);