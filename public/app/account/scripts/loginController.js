/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('LoginController', ['$cookies', '$scope', 'LoginService',
    function($cookies,$scope, LoginService){
        $scope.user = {};
        $scope.showErrorMessage = false;
        $scope.isProcessing = false;


        $scope.signIn = function(){
            $scope.showErrorMessage = false;
            $scope.isProcessing = true;

            LoginService.login($scope.user).
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
}]);
