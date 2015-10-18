/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';

angular.module('app').controller('LoginController', ['$cookies', '$scope', 'LoginService','$location',
    function($cookies,$scope, LoginService, $location){
        $scope.user = {};
        $scope.showErrorMessage = false;
        $scope.isProcessing = false;

        $scope.signIn = function(){
            $scope.showErrorMessage = false;
            $scope.isProcessing = true;
            $scope.user.username = $scope.user.Email;
            $scope.user.password = $scope.user.Password;

            LoginService.login($scope.user).
                success(function(data, status, headers, config) {
                    toastr.success('Login Succesfully');
                    $location.path('/');
                    $cookies.put('Token',data.access_token);
                    $scope.isProcessing = false;
                }).
                error(function(data, status, headers, config) {
                    toastr.error(data.Message);
                    $scope.isProcessing = false;
                    $scope.showErrorMessage = true;
                });
        };
}]);
