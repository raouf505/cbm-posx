define(["marionette", "tpl!templates/boardDetailsModalTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		attributes: function() {
			return {
				"id": "boardModal" + this.model.get("id")
			};
		}
	});
	
});