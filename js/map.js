//var stops = $.parseJSON(stopsData);
 
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-1.2833, 36.8167),
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  /*for (var i = 0; i < stops.length; i++) {
    var myLatlng = new google.maps.LatLng(stops[i][0], stops[i][1]);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
  }*/
  
  
  var routeLayer = new google.maps.FusionTablesLayer({
    clickable: true,
    map: map,
    suppressInfoWindows: false,
    query: {
      select: "polyline",
      from: "1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR"
      //where: "route_short_name = '46'"
    }
  });
  
  
  
}

google.maps.event.addDomListener(window, 'load', initialize);



/*
route_short_name, route_long_name, route_desc, trip_id, trip_headsign, direction_id, shape_id

 GROUP BY 'route_short_name', 'route_long_name'
 
 *************
https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20route_id,%20route_short_name,%20route_long_name,%20route_desc,%20trip_id,%20trip_headsign,%20direction_id,%20shape_id%20FROM%201AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR%20ORDER%20BY%20route_short_name%20ASC%20&key=AIzaSyBHIHBWz2uCkh3L2mufd6ZWUCM9Ps56wCw
 
https://www.googleapis.com/fusiontables/v1/query?sql=SELECT  route_id, route_short_name, route_long_name, route_desc, trip_id, trip_headsign, direction_id, shape_id
FROM 1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR
ORDER BY route_short_name ASC
&key=AIzaSyBHIHBWz2uCkh3L2mufd6ZWUCM9Ps56wCw 
 
 
 *************
 
 https://www.googleapis.com/fusiontables/v1/query?sql=SELECT  route_id, route_short_name, route_long_name, route_desc, trip_id, shape_id, COUNT()

FROM 1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR

GROUP BY route_id, route_short_name, route_long_name, route_desc, trip_id, shape_id

 ORDER BY route_short_name ASC
 
 &key=AIzaSyBHIHBWz2uCkh3L2mufd6ZWUCM9Ps56wCw



*/

