/**
 * Created by jcespinoza on 6/21/15.
 */
angular.module("app").controller("MainController", function($scope){
    $scope.showUpCommingEvents = true;
    $scope.showPopularEvents = false;
    $scope.showEvents = function(option){
        if(option === 'upcoming'){
            $scope.showUpCommingEvents = true;
            $scope.showPopularEvents = false;
        }else{
            $scope.showUpCommingEvents = false;
            $scope.showPopularEvents = true;
        }
    };
    $scope.upComingEvents = [
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: false,
            isPaid: true
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : true,
            isFree: false,
            isPaid: false
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: false,
            isPaid: true
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: false,
            isPaid: true
        }
    ];

    $scope.popularEvents = [
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: true,
            isPaid: false
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : true,
            isFree: false,
            isPaid: false
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: false,
            isPaid: true
        },
        {
            title : "Using Social Services Increase Your Sales",
            description: "Lorem ipsum dolor sit amet, feugiat delicata id cum, eu sit. [...]",
            isSoldOut : false,
            isFree: true,
            isPaid: false
        }
    ];
});