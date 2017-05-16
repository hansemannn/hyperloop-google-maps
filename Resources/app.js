var GoogleMaps = require('ti.googlemaps');

GoogleMaps.setAPIKey('AIzaSyAKQ1T37XqCnU2aAFNIj6R6RhaEGvZttX0');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = GoogleMaps.createView({
    type: GoogleMaps.MAP_TYPE_NORMAL
});

var annotation = GoogleMaps.createAnnotation({
    latitude: 52.279911,
    longitude: 8.047179,
    title: 'Hyperloop rocks!'
});

mapView.addAnnotation(annotation.getInstance());

win.add(mapView.getInstance());
win.open();
