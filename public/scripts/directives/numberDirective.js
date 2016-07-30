angular.module('CSApp')
.directive('numberDirective', function() {
    var controller = function ($scope) {


    };

    return {
        scope: {
            data: '='
        },
        
        controller: controller,
        templateUrl: './scripts/directives/templates/numberDirTmpl.html',
        restrict: 'E'
    };
});