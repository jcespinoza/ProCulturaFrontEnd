/**
 * Created by jcespinoza on 6/21/15.
 */
angular.module('app', ['ngRoute', 'ngResource','ngCookies','pascalprecht.translate',
                'tmh.dynamicLocale']).config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $routeProvider
        .when('/', {templateUrl: 'partials/main/view/main', controller: 'MainController'})
        .when('/login',  {templateUrl: 'partials/account/view/login', controller: 'LoginController'})
        .when('/signup', {templateUrl: 'partials/account/view/signup', controller: 'SignUpController'})
        .when('/events', {templateUrl: 'partials/events/view/events', controller: 'EventController'})
        .when('/createEvent', {templateUrl: 'partials/events/view/createEvent', controller: 'EventController'})
        .when('/event/:eventId', {templateUrl: 'partials/events/view/eventDetails', controller: 'EventDetailsController'})
        .when('/updateEvent/:eventId', {templateUrl: 'partials/events/view/updateEvent', controller: 'UpdateEventController'});

}).constant('LOCALES', {
    'locales': {
        'es_HN': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
}).run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
    });
}).run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        
    });
}).config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
});