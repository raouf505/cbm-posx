define(["jquery", "underscore", "backbone", "marionette", "boards/models/BoardModel", "boards/views/BoardLayoutView", "tpl!boards/templates/boardsCompositeViewTpl.html", "views/EmptyView"], function($, _, Backbone, Marionette, BoardModel, BoardLayout, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "boardsComponent",
		template: template,
		itemView: BoardLayout,
		itemViewContainer: "#boardsContainer",
		itemViewOptions: function() {
			return {
				collection: this.collection
			};
		},
		emptyView: EmptyView,
		ui: {
			errorMsg: "#addBoardModalErrorMsg"
		},
		events: {
			"dragover": function(event) {
				event.preventDefault();
				return false;
			},
			"drop": function(event) {
				event.preventDefault();
				var board = event.originalEvent.dataTransfer.mozSourceNode;
				var mouseCurrentPosX = event.originalEvent.clientX;
				var mouseCurrentPosY = event.originalEvent.clientY;
				var newPosX = mouseCurrentPosX - this.$el.offset().left - parseInt(board.offsetWidth / 2);
				var newPosY = mouseCurrentPosY - this.$el.offset().top - parseInt(board.offsetHeight / 2);
				
				board.style.left = (newPosX) + "px";
				board.style.top = (newPosY) + "px";
			},
			"click #addBoardBtn": function() {
				var boardModel = new BoardModel();
				var boardName = this.$("#addBoardModal").find("#boardName").val();
				
				if (!boardModel.set({name: boardName}, {validate: true})) {
					this.ui.errorMsg.html(boardModel.validationError);
				} else if(this.collection.findWhere({name: boardName})) {
					this.ui.errorMsg.html("La mesa ya existe.");
				} else {
					this.collection.create(boardModel);
					this.ui.errorMsg.html("");
					this.$("#addBoardModal").modal("hide");
				}
			}
		}
	});
	
});