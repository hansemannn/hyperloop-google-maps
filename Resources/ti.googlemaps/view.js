var mapView,
	GMSMapView = require('GoogleMaps/GMSMapView'),
	UIScreen = require('UIKit/UIScreen'),
	UIViewAutoresizingNone = require('UIKit').UIViewAutoresizingNone;

function MapView(params) {
	mapView = GMSMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
	// mapView.setDelegate(GoogleMapsDelegate);
	mapView.setAutoresizingMask(UIViewAutoresizingNone);
}

MapView.prototype.addAnnotation = function addAnnotation() {
	annotation.setMap(mapView);
};

MapView.prototype.getInstance = function getInstance() {
	return mapView;
};

module.exports = MapView;
