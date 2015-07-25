/**
 * Created by jcespinoza on 6/21/15.
 */
angular.module('app', ['ngRoute', 'ngResource','ngCookies']).config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $routeProvider
        .when('/', {templateUrl: 'partials/main/view/main', controller: 'mainController'})
        .when('/login',  {templateUrl: 'partials/account/view/login', controller: 'LoginController'})
        .when('/signup', {templateUrl: 'partials/account/view/signup', controller: 'SignUpController'})
}).run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
        console.log(rejection);
    });
}).run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        console.log(next.templateUrl);
    });
});