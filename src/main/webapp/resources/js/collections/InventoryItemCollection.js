define(["jquery", "underscore", "backbone", "marionette", "models/InventoryItemModel"], function($, _, Backbone, Marionette, InventoryItemModel) {
	
	return Backbone.Collection.extend({
		model: InventoryItemModel,
		url: '/inventory/crudService'
	});
	
});