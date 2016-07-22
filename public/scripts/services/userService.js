angular.module('CSApp').service('userService',
function($http, $q) {

    this.authUser = function(){};

    this.createUser = function(username, password){
        var defer = $q.defer();
        var userObj = {username: username, password:password};
        $http.post('/api/auth', userObj)
        .then(function(result){
            console.log(result.data);
            defer.resolve(parseUserData(result.data));
        });
        return defer.promise;
    };

    function parseUserData(obj) {
        return {
            username: obj.username,
            id: obj._id,
            characters: obj.characters
        };
    };
});