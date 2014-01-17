define(["marionette", "vent", "tpl!menu/templates/menuItemUpdateModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		id: "MenuItemUpdateModal",
		className: "modal fade",
		template: template,
		onRender: function() {
			var view = this;
			vent.on("menuItemView:click", function(model) {
				view.$("[name='number']").val(model.get("number"));
				view.$("[name='name']").val(model.get("name"));
				view.$("[name='price']").val(model.get("price"));
				view.$("[name='category']").val(model.get("category"));
			});
		}
	});
	
});