define(["marionette", "vent", "tpl!boards/templates/boardDetailsModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		id: "boardDetailsModal",
		ui: {
			updateBoardModalErrorMsg: "#updateBoardModalErrorMsg"
		},
		events: {
			"click #deleteBoardBtn": function() {
				this.model.destroy();
			},
			"click #updateBoardBtn": function() {
				var boardModel = this.model;
				var boardName = this.$("#name").val();
				
				if(boardModel.collection.findWhere({name: boardName})) {
					this.ui.updateBoardModalErrorMsg.html("La mesa ya existe.");
				}
				else if (!boardModel.save({name: boardName})) {
					this.ui.updateBoardModalErrorMsg.html(boardModel.validationError);
				} else {
					this.$el.modal("hide");
				}
			}
		},
		onRender: function() {
			var view = this;
			vent.on("boardButtonView:click", function(model) {
				view.model = model;
				view.$("[name='name']").val(model.get("name"));
			});
			
			this.$el.on("hidden.bs.modal", function(e) {
				view.ui.updateBoardModalErrorMsg.html("");
			});
		}
	});
	
});