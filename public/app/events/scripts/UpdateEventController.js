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
        $scope.event = EventService.getEvent($routeParams)
        .success(function(data, status, headers, config) {
            
        }).
    error(function(data, status, headers, config) {
        toastr.error(data);

     });

    };

    $scope.getEvent();


    }]);
