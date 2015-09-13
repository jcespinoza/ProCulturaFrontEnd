/**
 * Created by JuanCarlos on 8/30/2015.
 */

angular.module('app').service('EventService', ['$http', 'HostFactory', function($http, HostFactory){

    var baseUrl = HostFactory.serverName ;
    var eventService = {};

    eventService.createEvent = function(event){
        return $http.post(baseUrl + '/api/event', event);
    };

    eventService.getAllEvents = function(){
        return $http.get(baseUrl + '/api/event');
    };

    eventService.getEvent = function(id){
        return $http.get(baseUrl + '/api/event/' + id);
    };
    eventService.updateEvent = function(event){
        return $http.put(baseUrl +'/api/event/' + event.id, event);
    }
    eventService.deleteEvent = function(id){
        return $htpp.delete(baseUrl +'/api/event/' + id)
    }
    return eventService;
}]);
