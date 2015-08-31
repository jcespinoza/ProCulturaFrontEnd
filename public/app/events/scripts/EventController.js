/**
 * Created by Light on 31/08/2015.
 */
angular.module('app').controller('EventController',["$scope","EventService","$location",
    function($scope,EventService, $location){

        $scope.event ={};

        $scope.events = EventService.getEvents();

        $scope.createEvent = function(){
            EventService.createEvent($scope.event)
                .success(function(data, status, headers, config) {
                    $scope.isProcessing = false; //TODO: missing loading bar
                    toastr.success(data.Message);
                    $location.path('/events');
                }).error(function(data, status, headers, config) {
                    toastr.error(data);
                    $scope.isProcessing = false; //TODO: missing loading bar
                    $scope.showErrorMessage = true;
                });
        };


    }]);