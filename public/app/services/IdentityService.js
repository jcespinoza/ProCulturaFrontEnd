angular.module('app').service('IdentityService', ['$http', 'HostFactory', function($http, HostFactory)
	var baseUrl = HostFactory.serverName ;
	
	IdentityService.getCurrentUser = function(token)
				return  return $http.get(baseUrl + '/api/User',token);
	}

	}]);