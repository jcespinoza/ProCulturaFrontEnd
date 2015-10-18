/**
 * Created by Light on 26/09/2015.
 */
angular.module('app').directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
        restrict: 'A',
        replace: true,
        template: ''+
        '<div class="language-select" ng-if="visible">'+
        '<label>'+
        '{{"languageSelection" | translate}}:'+
        '<select ng-model="currentLocaleDisplayName"'+
        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
        'ng-change="changeLanguage(currentLocaleDisplayName)">'+
        '</select>'+
        '</label>'+
        '</div>'+
        '',
        controller: function ($scope) {
            $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
            $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
            $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;

            $scope.changeLanguage = function (locale) {
                LocaleService.setLocaleByDisplayName(locale);
            };
        }
    };
});