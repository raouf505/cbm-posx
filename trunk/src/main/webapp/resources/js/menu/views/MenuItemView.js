define(["marionette", "vent", "tpl!menu/templates/menuItemViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		tagName: "div",
		className: function() {
			var className = "tab-pane fade " + this.model.get("category").toLowerCase() + "MenuItem menuItem";
			if (this.options.showByDefault) {
				className += " in active";
			}
			return className;
		},
		template: template,
		attributes: function() {
			return {
				"data-toggle": "modal",
				"data-target": "#MenuItemUpdateModal"
			};
		},
		events: {
			"click": function() {
				vent.trigger("menuItemView:click", this.model);
			}
		}
	});
	
});