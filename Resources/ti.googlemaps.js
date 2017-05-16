var GMSMapView = require('GoogleMaps/GMSMapView'),
	kGMSTypeTerrain = require('GoogleMaps').kGMSTypeTerrain,
	UIScreen = require('UIKit/UIScreen'),
	UIViewAutoresizingNone = require('UIKit').UIViewAutoresizingNone;

exports.createView = function(params) {
	var mapView = GMSMapView.alloc().initWithFrame(UIScreen.mainScreen.applicationFrame);
	// mapView.setDelegate(GoogleMapsDelegate);
	mapView.setAutoresizingMask(UIViewAutoresizingNone);
	
	return mapView;
};

exports.MAP_TYPE_TERRAIN = kGMSTypeTerrain;
