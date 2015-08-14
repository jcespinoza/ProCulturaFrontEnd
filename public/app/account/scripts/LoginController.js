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

            LoginService.login($scope.user).
                success(function(data, status, headers, config) {
                    toastr.success('Login Succesfully');
                    $location.path('/');
                    $cookies.put('Token',data.AccessToken);
                    $scope.isProcessing = false;
                }).
                error(function(data, status, headers, config) {
                    toastr.error(data);
                    $scope.isProcessing = false;
                    $scope.showErrorMessage = true;
                });
        };
}]);
