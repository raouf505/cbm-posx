define(["jquery", "underscore", "backbone", "marionette", "boards/models/BoardModel", "boards/views/BoardButtonView", "views/EmptyView"], function($, _, Backbone, Marionette, BoardModel, BoardButtonView, EmptyView) {
	
	return Marionette.CollectionView.extend({
		id: "boardsComponent",
		itemView: BoardButtonView,
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
			}
		}
	});
	
});