angular.module('CSApp')
.directive('checkDirective', function() {
    var controller = function ($scope) {


    };

    return {
        scope: {
            data: '='
        },
        
        controller: controller,
        templateUrl: './scripts/directives/templates/checkDirTmpl.html',
        restrict: 'E'
    };
});