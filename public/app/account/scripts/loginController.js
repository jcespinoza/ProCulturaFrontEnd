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
                    $location.path('/signup');
                    $cookies.put('Token',data.AccessToken);
                    $scope.isProcessing = false;
                }).
                error(function(data, status, headers, config) {
                    toastr.error('Error');
                    console.log('ERROR!');
                    $scope.isProcessing = false;
                    $scope.showErrorMessage = true;
                });
    };
}]);
