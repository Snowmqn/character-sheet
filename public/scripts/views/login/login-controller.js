angular.module('CSApp').controller('login-controller',
function($scope, userService, $state) {

    $scope.submitNewUser = function(username, password, cPassword) {
        if(cPassword !== password) return alert("Password's don't match!!!!");
        if(username.length < 4) return alert('Username must be 4 characters or more!');
        if(password.length < 8) return alert('Password must be 8 characters or more!')
        userService.createUser(username, password)
        .then(function(result) {
            $scope.user = result;
            $state.go('settings');
        });
    };
});