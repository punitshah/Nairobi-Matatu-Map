var API_KEY_URL = "&key=" + API_KEY;

(function(){
  var app = angular.module("mapperApp", []);
  
  app.controller("MapperController", ['$http', function($http){
    var mapper = this;
    mapper.routes = [ ];
    mapper.filterQuery = "hihi";
    
    $http.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT  route_id, route_short_name, route_long_name, route_desc, trip_id, trip_headsign, direction_id, shape_id, row_order " +
      "FROM " + POLYLINE_TABLE_ID + " " +
      "WHERE direction_id = 1 " +
      "ORDER BY row_order ASC " +
      API_KEY_URL
    ).success(function(data){      
      mapper.routes = data.rows; // todo: convert from array to objects, factor by route (then direction), reorder based on order in download
    }).error(function(){
      alert("GET request failed");
    });
    
    /*$scope.updateMap (route) {
      updateMap(route);
    }*/
    
    mapper.filter = function (query) {
      mapper.filterQuery = query;
      angular.element('#routeIdToFilter').trigger('click');
    }
    
  }]);
  
})();