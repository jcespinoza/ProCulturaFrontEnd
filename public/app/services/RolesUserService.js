angular.module('app').service('RolesUserService', ['$http', 'HostFactory', function($http, HostFactory){
	var baseUrl = HostFactory.serverName;

	//post
	RolesUserService.createUserRole = function(userPrivilige){
    	//call BackEnd
	}


}]);
