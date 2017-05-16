var GMSMapView = require('GoogleMaps/GMSMapView'),
	GMSServices = require('GoogleMaps/GMSServices'),
	kGMSTypeTerrain = require('GoogleMaps').kGMSTypeTerrain,
	UIScreen = require('UIKit/UIScreen'),
	UIViewAutoresizingNone = require('UIKit').UIViewAutoresizingNone;

exports.setAPIKey = function(apiKey) {
	GMSServices.provideAPIKey(apiKey);
}

exports.createView = function(params) {
	var mapView = GMSMapView.alloc().initWithFrame(UIScreen.mainScreen.applicationFrame);
	// mapView.setDelegate(GoogleMapsDelegate);
	mapView.setAutoresizingMask(UIViewAutoresizingNone);
	
	return mapView;
};

exports.MAP_TYPE_TERRAIN = kGMSTypeTerrain;
