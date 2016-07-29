angular.module('CSApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './scripts/views/login/loginTmpl.html',
            controller: 'login-controller'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: './scripts/views/settings/settingsTmpl.html',
            controller: 'settings-controller'
        })
        .state('stats', {
            url: '/stats',
            templateUrl: './scripts/views/stats/statsTmpl.html',
            controller: 'stats-controller'
        })
        .state('misc', {
            url: '/misc',
            templateUrl: './scripts/views/misc/miscTmpl.html',
            controller: 'misc-controller'
        })
        .state('spells', {
            url: '/spells',
            templateUrl: './scripts/views/spells/spellsTmpl.html',
            controller: 'spells-controller'
        });

    $urlRouterProvider
        .otherwise('/');
});