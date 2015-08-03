/**
 * Created by william on 8/3/15.
 */
angular.module('app').factory('LoginService', ['$http', 'HostFactory', function($http, HostFactory){
	
	var loginService = {};

	loginService.login = function(user){
		 return $http.post(HostFactory.serverName + '/api/login', user);
	};
	return  loginService;
}]);