define(["backbone", "menu/models/MenuItemModel"], function(Backbone, MenuItemModel) {
	
	return Backbone.Collection.extend({
		model: MenuItemModel,
		url: '/menu/crudService',
		comparator: "category"
	});
	
});