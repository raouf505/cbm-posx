define(["marionette", "vent", "tpl!menu/templates/menuItemUpdateModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		id: "MenuItemUpdateModal",
		className: "modal fade",
		template: template,
		events: {
			"click #updateMenuItemBtn": function() {
				var view = this;
				var updatedMenuItemData = {
						number: this.$("[name='number']").val(),
						name: this.$("[name='name']").val(),
						price: this.$("[name='price']").val(),
						category: this.$("[name='category']").val()
				};
				if (!this.model.save(updatedMenuItemData, {success: function() {
						MenuApp.menuCollection.reset();
						MenuApp.menuCollection.fetch();
						console.log(view);
						view.$el.modal("hide");
					}})) {
					this.$("#updateMenuItemModalErrorMsg").html(this.model.validationError);
				}
			}
		},
		onRender: function() {
			var view = this;
			vent.on("menuItemView:click", function(model) {
				view.model = model;
				view.$("[name='number']").val(model.get("number"));
				view.$("[name='name']").val(model.get("name"));
				view.$("[name='price']").val(model.get("price"));
				view.$("[name='category']").val(model.get("category"));
			});
		}
	});
	
});