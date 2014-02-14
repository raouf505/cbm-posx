define(["marionette", "vent", "tpl!menu/templates/menuItemViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		tagName: "tr",
		template: template,
		attributes: {
			"data-toggle": "modal",
			"data-target": "#MenuItemUpdateModal"
		},
		events: {
			"click": function() {
				vent.trigger("menuItemView:click", this.model);
			}
		}
	});
	
});