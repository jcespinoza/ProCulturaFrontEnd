/**
 * Created by jcespinoza on 6/21/15.
 */
angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {templateUrl: 'partials/main/view/main', controller: 'mainController'})
        .when('/signup', {templateUrl: 'partials/account/view/signup', controller: 'signupController'})
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
        console.log(rejection);
    });
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        console.log(next.templateUrl);
    });
});