define(["jquery", "underscore", "backbone", "marionette", "menu/views/MenuItemView", "menu/models/MenuItemModel", "tpl!menu/templates/menuComponentCompositeViewTpl.html", "views/EmptyView"], function($, _, Backbone, Marionette, MenuItemView, MenuItemModel, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "menuComponent",
		template: template,
		childView: MenuItemView,
		childViewContainer: "#menuItemList",
		emptyView: EmptyView,
		categories: ["Entradas", "Bebidas", "Arroces", "Carnes"],
		childViewOptions: function(model, index) {
			return {
				showByDefault: model.get("category") ==  this.categories[0]
			};
		},
		templateHelpers: function() {
			return {
				categories: this.categories
			};
		}
	});
	
});