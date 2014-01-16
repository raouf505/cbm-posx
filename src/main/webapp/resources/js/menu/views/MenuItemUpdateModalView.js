define(["marionette", "tpl!menu/templates/menuItemUpdateModalViewTpl.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		id: "MenuItemUpdateModal",
		className: "modal fade",
		template: template
	});
	
});