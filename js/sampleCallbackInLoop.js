managers: function(callback) {


  var managers = Array();

  // Find all RestaurantsManagers join records with this Restaurant id      RestaurantsManagers.findByRestaurantId(this.id).done(function(err, restaurants_managers) {

  // If there are no records, just return the empty array
  if(restaurants_managers.length == 0) {
    callback(managers);
  }

  // Else load each manager
  else {

          // Counter to determine when all managers loaded
        var numManagersLoaded = 0;

      restaurants_managers.forEach(function(restaurant_manager) {

       // Load the manager record Manager.findOne(restaurant_manager.manager_id).done(function(err, manager) {

          // Push it onto the array
          managers.push(manager);

          // Increment the counter
          numManagersLoaded++;

          // If all managers have been loaded, trigger the callback
          if(numManagersLoaded == restaurants_managers.length) {
              callback(managers);
          }
        });

      });

    }

  });

},