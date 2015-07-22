/**
 * Created by jcespinoza on 6/21/15.
 */
/**
 * Created by jcespinoza on 6/21/15.
 */
'use strict';
angular.module('app').controller('SignUpController', function($scope, $http){
	$scope.user = {
		name:"",
		userName:"",
		email:"",
		password:""

	};

    $scope.existentsUsers = [
        {   name:"testName",
            userName:"test",
            email:"test@test.com",
            password:"1234"
        },
        {
            name:"testName1",
            userName:"test1",
            email:"ttt@t.com",
            password:"33422"
        }
    ];
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
        $http.post('/api/signup', user);
    };

    $scope.login = function(userModel){
        $http.post('/api/login', userModel)
    };
});