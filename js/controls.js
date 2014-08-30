(function(){
  var app = angular.module("mapperApp", []);
  
  app.controller("MapperController", ['$http', function($http){
    var mapper = this;
    mapper.routes = [ ];
    
    $http.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT  route_id, route_short_name, route_long_name, route_desc, trip_id, trip_headsign, direction_id, shape_id " +
      "FROM 1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR " +
      "ORDER BY route_short_name ASC " +
      "&key=AIzaSyBHIHBWz2uCkh3L2mufd6ZWUCM9Ps56wCw"
    ).success(function(data){
      mapper.routes = data.rows;
    }).error(function(){
      alert("GET request failed");
    });
    
    //this.
    
  }]);
  
})();