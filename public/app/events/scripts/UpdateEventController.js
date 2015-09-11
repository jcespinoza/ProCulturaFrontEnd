/**
 * Created by Rafael on 07/09/2015.
 */
angular.module('app').controller('UpdateEventController',["$scope","EventService","$routeParams",
    function($scope,EventService, $routeParams){

    $scope.event = {};
    $scope.updateEvent = function(){
    EventService.updateEvent($scope.event)
        .success(function(data, status, headers, config) {
            toastr.success('Event Update Succesfully');
        }).
    error(function(data, status, headers, config) {
        toastr.error(data);

     });
    };
    
    $scope.getEvent = function(){
        EventService.getEvent($routeParams.eventId)
        .success(function(data, status, headers, config) {
                $scope.event = data;

                $scope.event.BeginDate = new Date(data.BeginDate);

                $scope.event.EndDate = new Date(data.EndDate);
        }).
    error(function(data, status, headers, config) {
        toastr.error(data);

     });

    };

    $scope.getEvent();


    }]);
