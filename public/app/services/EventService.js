/**
 * Created by william on 8/31/15.
 */
angular.module('app').service('EventService', ['$http', 'HostFactory', function($http, HostFactory){

    var baseUrl = HostFactory.serverName ;
    var eventFactory = {};

    eventFactory.createEvent = function(event){
        return $http.post(baseUrl + '/api/createEvent', event);
    };

    return eventFactory;
}]);
