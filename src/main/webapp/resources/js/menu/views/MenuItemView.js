define(["marionette", "vent", "tpl!menu/templates/menuItemViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		tagName: "div",
		className: function() {
			var tabId = this.model.get("category").toLowerCase() + "MenuItem";
			var className = "col-xs-4 col-md-3 tab-pane fade " + tabId;
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