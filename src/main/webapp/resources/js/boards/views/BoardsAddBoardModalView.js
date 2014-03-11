define(["marionette", "boards/models/BoardModel", "tpl!boards/templates/boardsAddBoardModalViewTpl.html"], function(Marionette, BoardModel, template) {
	
	return Marionette.ItemView.extend({
		className: "modal fade",
		template: template,
		id: "addBoardModal",
		ui: {
			errorMsg: "#addBoardModalErrorMsg",
			boardNameInput: "#boardName"
		},
		events: {
			"click #addBoardBtn": function() {
				var boardModel = new BoardModel();
				var boardName = this.ui.boardNameInput.val();
				
				if (!boardModel.set({name: boardName}, {validate: true})) {
					this.ui.errorMsg.html(boardModel.validationError);
				} else if(this.collection.findWhere({name: boardName})) {
					this.ui.errorMsg.html("La mesa ya existe.");
				} else {
					this.collection.create(boardModel);
					this.ui.errorMsg.html("");
					this.$el.modal("hide");
				}
			}
		},
		initialize: function() {
			var view = this;
			this.$el.on("hidden.bs.modal", function(e) {
				view.ui.boardNameInput.val("");
				view.ui.errorMsg.html("");
				
			});
		}
	});
	
});