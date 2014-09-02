 
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
  
  var fusionTableId = "1AZcGA39YNhzlGn1AByIVjwF1iymohJhc_-2vv1zR";
  var locCol = "polyline";
  
  var routeLayer = new google.maps.FusionTablesLayer({
    clickable: true,
    map: map,
    suppressInfoWindows: false,
    query: {
      select: locCol,
      from: fusionTableId,
      //where: "route_id = '80200048C11'"
    }
  });
  
  google.maps.event.addDomListener(document.getElementById('routeIdToFilter'), 'click', function() {      
      filterRoutes(routeLayer, fusionTableId, locCol, "route_id", document.getElementById('routeIdToFilter').value );
  });
  
  
}

google.maps.event.addDomListener(window, 'load', initialize);

function filterRoutes(routeLayer, fusionTableId, locCol, filterCol, filterVal) {
  routeLayer.setOptions({
    query: {
        select: locCol,
        from: fusionTableId,
        where: filterCol + " = '" + filterVal + "'"
      }
    });
  
}
