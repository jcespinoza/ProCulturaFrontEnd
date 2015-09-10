/**
 * Created by william on 8/30/15.
 */

angular.module('app').controller('EventController',["$scope", "$location","EventService", function($scope, $location, EventService){
    $scope.events = [];
    $scope.event = {};

    EventService.getAllEvents()
        .success(function(data, status, headers, config) {
            $scope.events = data;
        });

    $scope.createEvent = function(){
        $scope.isProcessing = true;
        EventService.createEvent($scope.event)
            .success(function(data, status, headers, config) {
                toastr.success('Event Created Succesfully');
                $location.path('/events');
                $scope.isProcessing = false;
            }).
            error(function(data, status, headers, config) {
                toastr.error(data.Message);
                $scope.isProcessing = false;
            });
    };
}]);