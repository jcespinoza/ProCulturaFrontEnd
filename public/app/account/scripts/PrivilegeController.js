'use strict';
angular.module('app').controller('SignUpController', ['$scope','UserService','$location', function($scope, UserService, $location){
		 $scope.isProcessing = false;
  		 $scope.showErrorMessage = false;

	}]);
