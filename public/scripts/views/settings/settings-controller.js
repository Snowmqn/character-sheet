angular.module('CSApp').controller('settings-controller',
function($scope, userService, $state) {
    var load = function() {
        var user = userService.getUser();  
        if(user.username) return $scope.user = user;        
        userService.getUserInfo()
        .then(function(result) {
            return $scope.user = result;
        }, function(err) {
            $state.go('login');
        });
    }
    load();

});