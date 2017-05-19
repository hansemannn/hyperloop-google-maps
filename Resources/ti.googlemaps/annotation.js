var annotation,
	GMSMarker = require('GoogleMaps/GMSMarker'),
	CLLocationCoordinate2DMake = require('CoreLocation').CLLocationCoordinate2DMake;

function Annotation(params) {
	annotation = new GMSMarker();
	
	// Set Position
	annotation.setPosition(positionFromParameters(params));
	
	// Set title if passed to the constructor
	// TODO: Find a more flexible way to handle constructor setters
	params.title && annotation.setTitle(params.title);
}

Annotation.prototype.getInstance = function getInstance() {
	return annotation;
};

function positionFromParameters(params) {
	return CLLocationCoordinate2DMake(params.latitude, params.longitude);
};

module.exports = Annotation;
