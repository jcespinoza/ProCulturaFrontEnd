/**
 * Created by jcespinoza on 6/21/15.
 */
/**
 * Created by jcespinoza on 6/21/15.
 */
//'use strict';
angular.module('app').controller('SignUpController', ['$scope','UserService','$location', function($scope, UserService, $location){
    $scope.isProcessing = false;
    $scope.showErrorMessage = false;
    $scope.confPassword = '';
    $scope.matchedPassword =false;

	$scope.user = {
		name:"",
		userName:"",
		email:"",
		password: ""

	};
    
    $scope.confirmPassword = function() {
    	if($scope.user.password === $scope.confirmPassword){
            $scope.matchedPassword =true;
            console.log("Show");
            return true;
        }
        console.log("Hide");
        $scope.matchedPassword =false;
    	return false;
    };


    $scope.createUser = function(){ 
            $scope.isProcessing = true;
            UserService.createUser($scope.user)
            .success(function(data, status, headers, config) {
                $scope.isProcessing = false;

                    toastr.info('Se creo exitosamente','Crear Usuario');
                    $location.path('/login');

            }).error(function(data, status, headers, config) {
                $scope.isProcessing = false;
                $scope.showErrorMessage = true;
            });


    };


    

}]);