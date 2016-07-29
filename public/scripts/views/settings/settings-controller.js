angular.module('CSApp').controller('settings-controller',
function($scope, userService, $state, characterService) {
    var load = function() {
        var user = userService.getUser();
        console.log(user);
        if(user.username) return $scope.user = user;        
        userService.getUserInfo()
        .then(function(result) {
            return $scope.user = result;
        }, function(err) {
            $state.go('login');
        });
    }
    load();

    $scope.createCharacter = function(name, level) {
        userService.createCharacter(name, level)
        .then(function(result) {
            $scope.newName = '';
            $scope.newLevel = '';
            return $scope.user = result;
        });
    };

    $scope.deleteCharacter = function(id) {
        userService.deleteCharacter(id)
        .then(function(result) {
            return $scope.user = result;
        });
    };

    $scope.goToCharacter = function(id) {
        characterService.goToCharacter(id)
        .then(function(result) {
            $state.go('stats');
        });
    };
});