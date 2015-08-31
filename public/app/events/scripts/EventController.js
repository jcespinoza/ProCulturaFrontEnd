/**
 * Created by william on 8/30/15.
 */

angular.module('app').controller('EventController',["$scope",
    function($scope){

            $scope.event ={};

            $scope.events = [{
                eventId: 1,
                title: "National Artists Concert",
                summary: "This is an event where every National Artist come to a meeting and perform a song ",
                startDate: "18/11/2015",
                imgUrl: "http://farm6.staticflickr.com/5802/20967738616_f315d2de98_m.jpg",
                location:"SPS",
                endDate: "18/11/5",
                status: "InProgress",
                price: 0


            },
            {
                eventId: 2,
                title: "Cultural Meeting at the Museum",
                summary: "This is a meeting for the art lovers who want to watch boring pieces of art",
                startDate: "5/5/2014",
                imgUrl:"http://farm6.staticflickr.com/5824/20769434970_6db7a2fc87_m.jpg",
                location:"SPS",
                endDate: "5/5/2014",
                status: "Completed",
                price: 5


            },
            {
                eventId: 3,
                title: "Global Hackaton",
                summary: "This is an event for people who want to developed apps in a group in less than 24 hours",
                startDate: "10/11/2015",
                imgUrl:"http://farm6.staticflickr.com/5820/20785030910_3875995dee_m.jpg",
                location:"SPS",
                endDate: "10/11/2015",
                status: "InProgress",
                price: 0


            }];


        $scope.createEvent = function(){
            EventService.createEvent($scope.event)
                .success(function(data, status, headers, config) {
                    $scope.isProcessing = false;
                    toastr.success(data.Message);
                    $location.path('/login');
                }).error(function(data, status, headers, config) {
                    toastr.error(data);
                    $scope.isProcessing = false;
                    $scope.showErrorMessage = true;
                });
        };


    }]);