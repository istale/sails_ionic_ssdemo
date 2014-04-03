angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: '市立停車場', description: '空位: 20' },
    { id: 1, title: '公有停車場', description: '空位: 0' },
    { id: 2, title: '高鐵週邊停車場', description: '空位: 5' },
    { id: 3, title: '私人停車場', description: '空位：8' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

.factory('UserService', function(){




})

.factory('TeamService', function(){




})

.factory('GameService', function(){




})

.factory('PartyService', function($http){

  

  var factory = {};

  // define method
  // factory.method = function(param){ ... }

  factory.getAll = function(callback){
    $http.get('/party/list')
        .success(function(data, status) {
            callback(data);
        })
        .error(function(data, status) {
          console.log("no data");
        });
  };

  return factory;

});







