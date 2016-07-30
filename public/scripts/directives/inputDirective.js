angular.module('CSApp')
.directive('inputDirective', function() {
    var controller = function ($scope) {


    };

    return {
        scope: {
            data: '='
        },
        
        controller: controller,
        templateUrl: './scripts/directives/templates/inputDirTmpl.html',
        restrict: 'E'
    };
});