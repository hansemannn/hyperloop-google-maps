var GMSServices = require('GoogleMaps/GMSServices'),
	kGMSTypeNormal = require('GoogleMaps').kGMSTypeNormal,
	kGMSTypeSatellite = require('GoogleMaps').kGMSTypeSatellite,
	kGMSTypeTerrain = require('GoogleMaps').kGMSTypeTerrain,
	kGMSTypeHybrid = require('GoogleMaps').kGMSTypeHybrid,
	kGMSTypeNone = require('GoogleMaps').kGMSTypeNone,
	View = require('./view');
	Annotation = require('./annotation');

exports.setAPIKey = function(apiKey) {
	GMSServices.provideAPIKey(apiKey);
};

exports.createView = function(params) {
	return new View(params);
};

exports.createAnnotation = function(params) {
	return new Annotation(params);
};

exports.MAP_TYPE_NORMAL = kGMSTypeNormal;

exports.MAP_TYPE_SATELLITE = kGMSTypeSatellite;

exports.MAP_TYPE_TERRAIN = kGMSTypeTerrain;

exports.MAP_TYPE_HYBRID = kGMSTypeHybrid;

exports.MAP_TYPE_NONE = kGMSTypeNone;
