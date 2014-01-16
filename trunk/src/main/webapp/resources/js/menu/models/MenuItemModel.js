define(["jquery", "underscore", "backbone", "marionette"], function($, _, Backbone, Marionette) {

	return Backbone.Model.extend({
		validate: function(attrs, options) {
			
			if(!attrs.name || attrs.name == "") {
				return "Por favor inserte un nombre.";
			}
			
		}
	});
	
});