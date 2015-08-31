/**
 * Created by JuanCarlos on 8/30/2015.
 */

angular.module('app').service('EventService', ['$http', 'HostFactory', function($http, HostFactory){

    var baseUrl = HostFactory.serverName ;
    var eventService = {};

    eventService.createEvent = function(event){
        return $http.post(baseUrl + '/api/event', event);
    };

    return eventService;
}]);
