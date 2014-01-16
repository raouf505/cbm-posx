define(["marionette", "tpl!menu/templates/menuItemViewTpl.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		tagName: "tr",
		template: template,
		attributes: {
			"data-toggle": "modal",
			"data-target": "#MenuItemUpdateModal"
		}
	});
	
});