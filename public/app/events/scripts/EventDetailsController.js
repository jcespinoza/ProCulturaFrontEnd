/**
 * Created by william on 8/31/15.
 */

angular.module('app').controller('EventDetailsController',["$scope","EventService","$routeParams",
    function($scope,EventService, $routeParams){


        EventService.getEvent($routeParams.eventId)
            .success(function(data, status, headers, config) {
                $scope.event = data;
            });

    }]);
