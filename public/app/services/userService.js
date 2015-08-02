angular.module('app').factory('userService', ['$http', 'HostFactory', function($http, HostFactory){
	
	var baseUrl = HostFactory.serverName ;
	var userFactory = {};

	userFactory.createUser = function(user){
        return $http.post(baseUrl + '/api/User', user);
	};
	
	return userFactory;
}]);