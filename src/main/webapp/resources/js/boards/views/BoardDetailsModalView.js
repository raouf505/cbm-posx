define(["marionette", "vent", "tpl!boards/templates/boardDetailsModalViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		id: "boardDetailsModal",
		events: {
			"click #deleteBoardBtn": function() {
				this.model.destroy();
			},
			"click #updateBoardBtn": function() {
				var boardModel = this.model;
				var boardName = this.$("#name").val();
				
				if(boardModel.collection.findWhere({name: boardName})) {
					this.$("#updateBoardModalErrorMsg").html("La mesa ya existe.");
				}
				else if (!boardModel.save({name: boardName})) {
					this.$("#updateBoardModalErrorMsg").html(boardModel.validationError);
				} else {
					xyz = this;
					$(this).modal("hide");
				}
			}
		},
		onRender: function() {
			var view = this;
			vent.on("boardButtonView:click", function(model) {
				view.model = model;
				view.$("[name='name']").val(model.get("name"));
			});
		}
	});
	
});