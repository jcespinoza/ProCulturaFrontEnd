/**
 * Created by william on 8/30/15.
 */

angular.module('app').controller('EventController',["$scope","EventService","$location",
function($scope,EventService, $location){

    $scope.event ={};
    $scope.events =[];
    $scope.isProcessing = false;
    $scope.showErrorMessage = true;

    EventService.getEvents().success(function(data, status, headers, config) {
        $scope.events = data;
    });
    console.log($scope.events);

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