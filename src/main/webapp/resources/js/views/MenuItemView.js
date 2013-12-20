define(["marionette", "tpl!templates/menuItemTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		tagName: "tr",
		template: template
	});
	
});