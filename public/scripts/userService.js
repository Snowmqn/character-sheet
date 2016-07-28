angular.module('CSApp').service('userService',
function($http, $q, $state) {

    var user = {};

    this.createUser = function(username, password){
        var defer = $q.defer();
        var userObj = {username: username, password:password};
        $http.post('/api/auth', userObj)
        .then(function(result){
            var data = result.data;
            user = data;
            defer.resolve(data);
        });
        return defer.promise;
    };

    this.getUserInfo = function() {
        var defer = $q.defer();
        $http.get('/api/user')
        .then(function(result) {
            var data = result.data;
            user = data;
            defer.resolve(data);
        }, function(err) {
            $state.go('login');
        });
        return defer.promise;
    };

    this.getUser = function() {return user};

    function parseUserData(obj) {
        user = {
            username: obj.username,
            id: obj._id,
            characters: obj.characters
        };
        return user;
    };
});