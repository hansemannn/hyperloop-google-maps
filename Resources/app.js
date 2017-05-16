var GoogleMaps = require('ti.googlemaps');

GoogleMaps.setAPIKey('AIzaSyAKQ1T37XqCnU2aAFNIj6R6RhaEGvZttX0');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var mapView = GoogleMaps.createView({
    type: GoogleMaps.MAP_TYPE_NORMAL
});

var annotation = GoogleMaps.createAnnotation({
    latitude: 37.01,
    longitude: -22.01,
    title: 'Hello World!'
});

mapView.addAnnotation(annotation.getInstance());

win.add(mapView.getInstance());
win.open();
