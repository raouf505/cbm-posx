define(["marionette", "tpl!templates/menuItemView.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		tagName: "tr",
		template: template
	});
	
});