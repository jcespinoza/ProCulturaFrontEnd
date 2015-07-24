/**
 * Created by jcespinoza on 6/21/15.
 */
/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('SignUpController', function($scope, $http, $location){

    var serverRoute = 'http://localhost:11705';
	$scope.user = {
		name:"",
		userName:"",
		email:"",
		password:"",
        ConfirmPassword:""

	};

    $scope.confirmPassword = function() {
    	// body...
    	if($scope.user.password === $scope.password2){
            $scope.passwordMatchError = "";
            return true;
        }
         $scope.passwordMatchError = "Password doesn't match";
    	return false;
    };



    $scope.checkUserName = function(){
       for(var i = 0; i < $scope.existentsUsers.length; i++){
            var obj = $scope.existentsUsers[i];
            if($scope.user.userName === obj.userName)
                return true;
       }

       return false;
    };

    $scope.checkEmail = function(){
      for(var i = 0; i < $scope.existentsUsers.length; i++){
            var obj = $scope.existentsUsers[i];
            if($scope.user.email === obj.email)
                return true;
       }
       return false;
    };

    $scope.createUser = function(user){
        console.log(user);
        $http.post(serverRoute + '/api/User', user);
    };

    $scope.login = function(userModel){
        $http.post('/api/login', userModel).
        success(function(data, status, headers, config) {

            $location.path('/login');
            console.log('SUCCESS!');
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        }). error(function(data, status, headers, config) {
            console.log('ERROR!');
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });
    };
});