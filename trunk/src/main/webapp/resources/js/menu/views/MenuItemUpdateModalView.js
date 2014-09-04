define(["marionette", "vent", "tpl!menu/templates/menuItemUpdateModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		id: "MenuItemUpdateModal",
		className: "modal fade",
		template: template,
		events: {
			"click .updateMenuItemBtn": function() {
				if (this.$("form").validateForm()) {
					this.$el.modal("hide");
					
					var action = this.$("form").attr("action");
					var data = new FormData(this.$("form")[0]);
					
					$.ajax({
						url: action,
						type: 'POST',
						data:  data,
						mimeType: "multipart/form-data",
						contentType: false,
					    processData: false,
					})
					.done(function( data ) {
						if ( console && console.log ) {
							console.log( "Sample of data:", data.slice( 0, 100 ) );
						}
					});
				}
				
//				var view = this;
//				var updatedMenuItemData = {
//						name: this.$("[name='name']").val(),
//						price: this.$("[name='price']").val(),
//						category: this.$("[name='category']").val()
//				};
//				if (!this.model.save(updatedMenuItemData, {success: function() {
//						MenuApp.menuCollection.reset();
//						MenuApp.menuCollection.fetch();
//						console.log(view);
//						view.$el.modal("hide");
//					}})) {
//					this.$("#updateMenuItemModalErrorMsg").html(this.model.validationError);
//				}
			},
			"click .deleteMenuItemBtn": function() {
				this.model.destroy();
			}
		},
		onRender: function() {
			var view = this;
			vent.on("menuItemView:click", function(model) {
				view.model = model;
				view.$("[name='name']").val(model.get("name"));
				view.$("[name='price']").val(model.get("price"));
				view.$("[name='category']").val(model.get("category"));
			});
		}
	});
	
});