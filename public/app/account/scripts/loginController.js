/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('LoginController', function($cookies,$scope, $http,HostFactory){
    $scope.user = {};
  
    $scope.showErrorMessage = false;
    $scope.isProcessing = false;
    $scope.checkPasswordLengthIsAcceptable = function(password){
        return password !== undefined && password.length > 8;
    };

    $scope.signIn = function(userModel){
        $scope.showErrorMessage = false;
        $scope.isProcessing = true;

        $http.post(HostFactory.serverName + '/api/login', userModel).
            success(function(data, status, headers, config) {
                $cookies.put('Token',data.AccessToken);
                $scope.isProcessing = false;
            }).
            error(function(data, status, headers, config) {
                console.log('ERROR!');
                $scope.isProcessing = false;
                $scope.showErrorMessage = true;
            });
    };
});
