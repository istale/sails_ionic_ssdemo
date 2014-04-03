angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope) {
  // "Pets" is a service returning mock data (services.js)
  // $scope.pets = PetService.all();


    $scope.mapIsReady = false;

    navigator.geolocation.getCurrentPosition(
        function success(position){

          console.log('latitude: ' + position.coords.latitude );
          console.log('longitude: ' + position.coords.longitude );

          $scope.mapIsReady = true;
          console.log('isReady: ' + $scope.mapIsReady);

          $scope.map = {
            center: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            zoom: 15
          };
          $scope.marker1={
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            icon: 'images/parking.png'
          };

          addBusMarkers();
          addBikeMarkers();
          
          $scope.$apply();
          
      }, 
        function fail(err){
          console.log('geolocation not work'+'\n'+err);
          console.log('isReady: ' + $scope.mapIsReady);
      },
      {timeout:10000}
    );
  
    function addBusMarkers(){
      var dataMarkers = [
          {
            latitude: 23.461135499999998,
            longitude: 120.4326167,
            icon: 'images/bus.png'
          },
          {
            latitude: 23.464135499999998,
            longitude: 120.4356167,
            icon: 'images/bus.png'
          }
      ];

      $scope.map.busMarkers = dataMarkers;
    }

    function addBikeMarkers(){
      var dataMarkers = [
        {
            latitude: 23.466535499999998,
            longitude: 120.4306167,
            icon: 'images/bike.png'
        },
        {
            latitude: 23.468535499999998,
            longitude: 120.43776167,
            icon: 'images/bike.png'
        }
      ];

      $scope.map.bikeMarkers = dataMarkers;
    }

  // $scope.$on('$viewContentLoaded', function () {
  //   var mapHeight = 500; // or any other calculated value
  //   $("#map-canvas .angular-google-map-container .angular-google-map").height(mapHeight);
  // });

  // var genRandomMarkers = function (numberOfMarkers, scope) {
  //       var markers = [];
  //       for (var i = 0; i < numberOfMarkers; i++) {
  //           markers.push(createRandomMarker(i, scope.map.bounds))
  //       }
  //       scope.map.randomMarkers = markers;
  //   };

  //   var createRandomMarker = function (i, bounds) {
  //       var lat_min = bounds.southwest.latitude,
  //               lat_range = bounds.northeast.latitude - lat_min,
  //               lng_min = bounds.southwest.longitude,
  //               lng_range = bounds.northeast.longitude - lng_min;

  //       var latitude = lat_min + (Math.random() * lat_range);
  //       var longitude = lng_min + (Math.random() * lng_range);
  //       return {
  //           latitude: latitude,
  //           longitude: longitude,
  //           title: 'm' + i
  //       };
  //   };


})

.controller('AdoptCtrl', function($scope, PetService){

  $scope.pets = PetService.all();


})

.controller('GameCtrl', function($scope, PartyService){

  PartyService.getAll(function(data){
    console.log(data);
    $scope.games = data;
  });
  

  

  // var games = [
  //               {name: '北回歸線標識', email: '夏至那天太陽會直射的地點'},
  //               {name: '中央噴水池', email: '旁有文化路，是嘉義市最熱鬧的地方'},
  //               {name: '嘉義大學蘭潭校區', email: '以前的農專，天下嘉農'}
  //             ];

  // $scope.games = games;

})

.controller('PartyCtrl', function($scope, PartyService){

  var parties = PartyService.getAll();
  console.log(parties);

  $scope.games = parties;

})

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
