<<<<<<< HEAD
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

    return eventService;
=======
angular.module('app').service('EventService', ['$http', 'HostFactory', function($http, HostFactory){


    var baseUrl = HostFactory.serverName ;
    var eventFactory = {};

    eventFactory.createEvent = function(event){
        event.eventId = 4;
        event.imgUrl = '';
        events.push(event);
        return $http.post(baseUrl + '/api/createEvent', event);
    };

    eventFactory.getEvents = function(){
        return $http.get(HostFactory.serverName + '/api/Event');

    };


    return eventFactory;
>>>>>>> 7e0f8a8288fac1d98ad7587f99d4ffbf20231261
}]);
