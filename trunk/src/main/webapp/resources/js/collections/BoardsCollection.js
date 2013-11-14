define(["jquery", "underscore", "backbone", "marionette", "models/BoardModel"], function($, _, Backbone, Marionette, BoardModel) {
	
	return Backbone.Collection.extend({
		model: BoardModel,
		url: '/boards/crudService'
	});
	
});