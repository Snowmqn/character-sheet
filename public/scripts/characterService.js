angular.module('CSApp').service('characterService', 
function($http, $q, $state) {

    var character = {};

    this.goToCharacter = function(id) {
        var defer = $q.defer();
        $http.get('/api/character/' + id)
        .then(function(result) {
            var data = result.data;
            character = data;
            defer.resolve(data);
        });
        return defer.promise;
    };

    this.getCharacter = function() {return character;};

    this.updateCharacter = function(obj) {
        var defer = $q.defer();
        $http.put('/api/character/' + obj._id, obj)
        .then(function(result) {
            
        });
        $http.put('/api/character/stats/' + obj.stats._id, obj.stats)
        .then(function(result) {

        });
        return defer.promise;
    };

    // this.addWeapon = function() {
    //     var defer = $q.defer();
    //     $http.put('/api/character/stats/weapons' + character.stats._id,)
    //     .then(function(result) {
    //         defer.resolve(result.data);
    //     });
    //     return defer.promise;
    // };
});