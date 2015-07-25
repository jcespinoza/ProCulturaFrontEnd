/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('LoginController', function($cookies,$scope, $http){
    $scope.user = {};
    var serverRoute = 'http://localhost:11705';

    $scope.checkPasswordLengthIsAcceptable = function(password){
        return password !== undefined && password.length > 8;
    };

    $scope.signIn = function(userModel){
        $http.post(serverRoute + '/api/login', userModel).
            success(function(data, status, headers, config) {
                console.log('SUCCESS!');
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
             $cookies.put('Token',data);
            }).
            error(function(data, status, headers, config) {
                console.log('ERROR!');
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
    };
});
