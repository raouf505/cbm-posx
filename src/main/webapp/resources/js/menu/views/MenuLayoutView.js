define(["jquery", "underscore", "backbone", "marionette", "menu/views/MenuCompositeView", "menu/views/MenuItemUpdateModalView", "tpl!menu/templates/menuLayoutViewTpl.html"], function($, _, Backbone, Marionette, MenuCompositeView, MenuItemUpdateModalView, template) {
	
	return Marionette.Layout.extend({
		id: "menu",
		template: template,
		regions: {
			menuCompositeViewRegion: "#menuCompositeViewRegion",
			menuItemUpdateModalViewRegion: "#menuItemUpdateModalViewRegion"
		},
		onRender: function() {
			this.menuCompositeViewRegion.show(new MenuCompositeView({collection: this.collection}));
			this.menuItemUpdateModalViewRegion.show(new MenuItemUpdateModalView());
		}
	});
	
});