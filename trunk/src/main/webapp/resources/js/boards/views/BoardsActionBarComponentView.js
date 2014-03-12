define(["marionette", "vent", "tpl!boards/templates/boardsActionBarComponentViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		template: template,
		id: "boardsActionBarComponent",
	});
	
});