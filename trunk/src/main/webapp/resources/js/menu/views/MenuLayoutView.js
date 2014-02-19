define(["jquery", "underscore", "backbone", "marionette", "menu/views/MenuCompositeView", "menu/views/MenuItemUpdateModalView", "checkIn/views/AddDeleteMenuItemModalView", "tpl!menu/templates/menuLayoutViewTpl.html"], function($, _, Backbone, Marionette, MenuCompositeView, MenuItemUpdateModalView, AddDeleteMenuItemModalView, template) {
	
	return Marionette.Layout.extend({
		id: "menu",
		template: template,
		regions: {
			menuCompositeViewRegion: "#menuCompositeViewRegion",
			menuItemUpdateModalViewRegion: "#menuItemUpdateModalViewRegion"
		},
		onRender: function() {
			this.menuCompositeViewRegion.show(new MenuCompositeView({collection: this.collection}));
			if (pageName == "menu") {
				this.menuItemUpdateModalViewRegion.show(new MenuItemUpdateModalView());
			} if (pageName == "checkIn") {
				this.menuItemUpdateModalViewRegion.show(new AddDeleteMenuItemModalView());
			}
		}
	});
	
});