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
}]);
