define(["backbone", "boards/models/BoardModel"], function(Backbone, BoardModel) {
	
	return Backbone.Collection.extend({
		model: BoardModel,
		url: '/boards/crudService'
	});
	
});