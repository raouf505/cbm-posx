define(["marionette", "tpl!templates/inventoryItemTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		tagName : "tr",
		template: template
	});
	
});