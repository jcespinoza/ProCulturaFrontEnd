/**
 * Created by jcespinoza on 6/21/15.
 */

'use strict';
angular.module('app').controller('SignUpController', function($scope, $http, $location){
    $scope.isProcessing = false;
    $scope.showErrorMessage = false;
    var serverRoute = 'http://localhost:11705';
	$scope.user = {
		name:"",
		userName:"",
		email:"",
		password: "",
        confirmPassword: ""

	};

    $scope.confirmPassword = function() {
    	if($scope.user.password === $scope.user.confirmPassword){
            return true;
        }
    	return false;
    };

    $scope.createUser = function(user){
        $scope.isProcessing = true;
        $http.post(serverRoute + '/api/User', user)
            .success(function(data, status, headers, config) {
                $scope.isProcessing = false;
                $location.path('/login');
            }).error(function(data, status, headers, config) {
                $scope.isProcessing = false;
                $scope.showErrorMessage = true;
            });
    };

});