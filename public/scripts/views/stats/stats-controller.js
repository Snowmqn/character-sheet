angular.module('CSApp').controller('stats-controller',
function($scope, $state, characterService) {
    var load = function() {
        var character = characterService.getCharacter();
        console.log(character);
        if(character.name) return $scope.character = character;        
        else return $state.go('settings');
    }
    load();

    $scope.goToSettings = function() {
        $state.go('settings');
    }

    $scope.updateCharacter = function() {
        characterService.updateCharacter($scope.character)
        .then(function(result) {
            alert('Successfully Updated');
        });
    };

});