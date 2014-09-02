 
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-1.2833, 36.8167),
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  var routeLocCol = "polyline";
  var stopLocCol = "latitude";
  
  var routeLayer = new google.maps.FusionTablesLayer({
    clickable: true,
    map: map,
    suppressInfoWindows: false,
    query: {
      select: routeLocCol,
      from: POLYLINE_TABLE_ID,
      //where: "route_id = '80200048C11'"
    }
  });
  
  var stopLayer = new google.maps.FusionTablesLayer({
    map: map,
    query: {
      select: stopLocCol,
      from: STOP_TABLE_ID,
      //where: "route_id = '80200048C11'"
    }
  });
  
  google.maps.event.addDomListener(document.getElementById('routeIdToFilter'), 'click', function() {      
    filterRoutes(routeLayer, POLYLINE_TABLE_ID, routeLocCol, "route_id", document.getElementById('routeIdToFilter').value );
    filterRoutes(stopLayer, STOP_TABLE_ID, stopLocCol, "route_id", document.getElementById('routeIdToFilter').value );
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
