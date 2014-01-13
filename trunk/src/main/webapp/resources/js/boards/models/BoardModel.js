define(["jquery", "underscore", "backbone", "marionette"], function($, _, Backbone, Marionette) {

	return Backbone.Model.extend({
		defaults: {
			posX: 0,
			posY: 0
		},
		validate: function(attrs, options) {
			if(!attrs.name || attrs.name == "") {
				return "Por favor inserte un nombre.";
			}
		}
	});
	
});