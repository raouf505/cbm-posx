define(["marionette", "vent", "tpl!boards/templates/boardDetailsModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		id: "boardDetailsModal",
		onRender: function() {
			var view = this;
			vent.on("boardButtonView:click", function(model) {
				view.model = model;
				view.$("[name='name']").val(model.get("name"));
			});
		}
	});
	
});