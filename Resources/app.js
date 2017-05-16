var GoogleMaps = require('ti.googlemaps');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = GoogleMaps.createView({
    type: GoogleMaps.MAP_TYPE_TERRAIN
});

win.add(mapView);
win.open();
