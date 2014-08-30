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
  
  //polyline
  /* 
  var plCoord_shape48a_1 = [];
  //alert (shape48a_1.toString());
  for (var i = 0; i < shape48a_1.length; i++) {
    //alert (shape48a_1[i][1]);
    plCoord_shape48a_1.push (new google.maps.LatLng(shape48a_1[i][0], shape48a_1[i][1]));
  }
  
  var polyline_shape48a_1 = new google.maps.Polyline({
    path: plCoord_shape48a_1,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
  polyline_shape48a_1.setMap(map);
  */
  
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