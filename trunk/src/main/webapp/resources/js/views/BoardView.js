define(["marionette", "tpl!templates/boardTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		tagName : "tr",
		template: template
	});
	
});