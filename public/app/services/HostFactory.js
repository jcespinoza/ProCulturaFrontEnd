angular.module('app').factory('HostFactory', function($location) {
 	var serverName = "";
 	var indexOfLocalHost = $location.absUrl().indexOf('localhost');
 	if(indexOfLocalHost != -1){
         serverName = "http://localhost:11705";
 	}else
 	{
 		serverName = "http://procultura.jcespinoza.com";
 	}

   return {
   	
   	serverName : serverName
   }
 	
});










