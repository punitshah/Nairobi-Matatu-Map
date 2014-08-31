var API_KEY_URL = "&key=" + API_KEY;

(function(){
  var app = angular.module("mapperApp", []);
  
  app.controller("MapperController", ['$http', function($http){
    var mapper = this;
    mapper.routes = [ ];
    
    $http.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT  route_id, route_short_name, route_long_name, route_desc, trip_id, trip_headsign, direction_id, shape_id " +
      "FROM 1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR " +
      "ORDER BY route_short_name ASC " +
      API_KEY_URL
    ).success(function(data){
      /*var fullOutput = [ ];
      var cols = data.columns;
      
      for (var row in data.rows) {
        var rowOutput = { };
        for (var i = 0; i < cols.length; i++) {
          rowOutput[cols[i]] = row[i];
          //alert(rowOutput[cols[i]].toString);
        }
        fullOutput.push(rowOutput);
        //alert (rowOutput.toString());
      }
      
      mapper.routes = fullOutput;*/
      
      mapper.routes = data.rows; // todo: convert from array to objects, factor by route (then direction), reorder based on order in download
    }).error(function(){
      alert("GET request failed");
    });
    
  }]);
  
})();