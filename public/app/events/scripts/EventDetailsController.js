/**
 * Created by william on 8/31/15.
 */

angular.module('app').controller('EventDetailsController',["$scope","EventService","$routeParams",
    function($scope,EventService, $routeParams){


        $scope.event = EventService.getEvents()[$routeParams.eventId];


    }]);
