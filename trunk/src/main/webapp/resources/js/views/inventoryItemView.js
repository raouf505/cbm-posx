define(["jquery", "underscore", "backbone", "marionette", "text!templates/inventoryItemTemplate.html"], function($, _, Backbone, Marionette, template) {
	
	return Marionette.ItemView.extend({
		template: template
	});
	
});