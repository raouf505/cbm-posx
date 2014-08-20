define(['marionette', 'vent', 'tpl!menu/templates/menuItemAddModalViewTpl.html', "menu/models/MenuItemModel"], function(Marionette, vent, template, MenuItemModel) {
	
	return Marionette.ItemView.extend({
		id: 'menuItemAddModal',
		className: 'modal fade',
		template: template,
		ui: {
			addMenuItemForm: "#addMenuItemForm",
			errorMsg: "#addMenuItemModalErrorMsg"
		},
		events: {
			"submit form": function(event) {
				event.preventDefault();
				var menuItemModelData = {
						name: this.$(addMenuItemForm).find("[name='name']").val(),
						price: this.$(addMenuItemForm).find("[name='price']").val(),
						category: this.$(addMenuItemForm).find("[name='category']").val()
				};
				
				var menuItemModel = new MenuItemModel();
				
				if (!menuItemModel.set(menuItemModelData, {validate: true})) {
					this.ui.errorMsg.html(menuItemModel.validationError);
				} else if(this.collection.findWhere({name: menuItemModelData.name}) || this.collection.findWhere({name: menuItemModelData.name})) {
					this.ui.errorMsg.html("El item ya existe.");
				} else {
					this.collection.create(menuItemModel);
					this.ui.errorMsg.html("");
					this.$el.modal("hide");
				}
			},
			"click #addMenuItemBtn": function() {
				this.$(addMenuItemForm).trigger("submit");
			}
		},
	});
	
});