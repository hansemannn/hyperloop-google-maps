var GoogleMaps = require('ti.googlemaps');

GoogleMaps.setAPIKey('AIzaSyAKQ1T37XqCnU2aAFNIj6R6RhaEGvZttX0');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = GoogleMaps.createView({
    type: GoogleMaps.MAP_TYPE_TERRAIN
});

win.add(mapView);
win.open();
