'use strict';
angular.module('app').controller('SignUpController', ['$scope','RolesUserService','$location', function($scope, RolesUserService, $location){
		 $scope.isProcessing = false;
  		 $scope.showErrorMessage = false;
  		 $scope.userPriviliege ={
  		 	userName = "",
  		 	role = ""
  		 };
  		 $scope.createUserPrivilige =function(){
            $scope.isProcessing = true;
            RolesUserService.createUserRole($scope.createUserPrivilige)
            .success(function(data, status, headers, config) {
                $scope.isProcessing = false;
                toastr.success(data.Message);
            }).error(function(data, status, headers, config) {
                toastr.error(data.Message);
                $scope.isProcessing = false;
                $scope.showErrorMessage = true;
            });
    };
  		 }

	}]);
