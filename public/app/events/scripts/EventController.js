/**
 * Created by william on 8/30/15.
 */

angular.module('app').controller('EventController',["$scope","EventService","$location",
    function($scope,EventService, $location){

           $scope.event ={};

           $scope.isProcessing = false;
           $scope.showErrorMessage = true;

            $scope.events = EventService.getEvents();


        $scope.createEvent = function(){
            EventService.createEvent($scope.event)
                .success(function(data, status, headers, config) {
                    $scope.isProcessing = false;
                    toastr.success(data.Message);
                    $location.path('/events');
                }).error(function(data, status, headers, config) {
                    toastr.error(data);
                    $scope.isProcessing = false;
                    $scope.showErrorMessage = true;
                });
        };


    }]);