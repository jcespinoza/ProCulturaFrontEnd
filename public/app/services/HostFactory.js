angular.module('app').factory('HostFactory', function($location) {
	$location
 	var serverName = "";
 	if($location.absUrl().indexOf('localhost')){
         serverName = "http://localhost:11705";
 	}else
 	{
 		serverName = "http://procultura.jcespinoza.com"
 	}

   return {
   	
   	serverName : serverName
   }
 	
});










