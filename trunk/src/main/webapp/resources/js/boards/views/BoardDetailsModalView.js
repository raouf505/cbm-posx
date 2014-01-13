define(["marionette", "tpl!boards/templates/boardDetailsModalViewTpl.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		attributes: function() {
			return {
				"id": "boardModal" + this.model.get("name")
			};
		}
	});
	
});