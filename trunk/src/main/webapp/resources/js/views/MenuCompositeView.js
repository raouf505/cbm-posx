define(["jquery", "underscore", "backbone", "marionette", "views/MenuItemView", "tpl!templates/menuCompositeTemplate.html", "views/EmptyView"], function($, _, Backbone, Marionette, MenuItemView, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "menuComponent",
		template: template,
		itemView: MenuItemView,
		itemViewContainer: "#menuItemsList",
		emptyView: EmptyView
	});
	
});