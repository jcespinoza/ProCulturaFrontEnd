/**
 * Created by Rafael on 07/09/2015.
 */
angular.module('app').controller('UpdateEventController',["$scope","EventService","$routeParams",
    function($scope,EventService, $routeParams){

            EventService.updateEvent($routeParams.event)
                .success(function(data, status, headers, config) {
                    toastr.success('Event Created Succesfully');
                }).
        error(function(data, status, headers, config) {
            toastr.error(data);
        });

    }]);