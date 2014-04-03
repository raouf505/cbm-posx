define(["marionette", "vent", "tpl!menu/templates/menuItemViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		tagName: "tr",
		className: function() {
			var className = "tab-pane fade " + this.options.category.toLowerCase() + "MenuItem";
			if (this.options.showByDefault) {
				className += " in active";
			}
			return className;
		},
		template: template,
		attributes: function() {
			return {
				//className: "tab-pane fade " + this.options.category + "MenuItem",
//				"data-toggle": "modal",
//				"data-target": "#MenuItemUpdateModal"
			};
		},
		events: {
//			"click": function() {
//				vent.trigger("menuItemView:click", this.model);
//			}
		},
		templateHelpers: function() {
			return {
				showByDefault: this.options.showByDefault
			};
		}
	});
	
});