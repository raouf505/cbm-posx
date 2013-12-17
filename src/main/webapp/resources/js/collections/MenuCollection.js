define(["backbone", "models/BoardModel"], function(Backbone, MenuModel) {
	
	return Backbone.Collection.extend({
		model: MenuModel,
		url: '/menu/crudService'
	});
	
});