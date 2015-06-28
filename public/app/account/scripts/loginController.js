/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('loginCOntroller', function($scope, $http){
    $scope.checkPasswordLengthIsAcceptable = function(password){
        return password !== undefined && password.length > 8;
    };

    $scope.signIn = function(userModel){
        $http.post('/api/login', userModel)
    };
});