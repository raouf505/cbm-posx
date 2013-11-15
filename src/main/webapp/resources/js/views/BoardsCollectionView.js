define(["jquery", "underscore", "backbone", "marionette", "views/BoardView"], function($, _, Backbone, Marionette, BoardView) {
	
	return Marionette.CollectionView.extend({
		className: "boardsContainer",
		itemView: BoardView,
		events: {
			"dragover": function(event) {
				event.preventDefault();
				return false;
			},
			"drop": function(event) {
				var board = event.originalEvent.dataTransfer.mozSourceNode;
				var boardoffsetLeft = board.offsetLeft;
				var boardoffsetTop = board.offsetTop;
				var mouseCurrentPosX = event.originalEvent.clientX;
				var mouseCurrentPosY = event.originalEvent.clientY;
				var newPosX = mouseCurrentPosX - this.$el.offset().left;
				var newPosY = mouseCurrentPosY - this.$el.offset().top;
				
				board.style.left = (newPosX) + "px";
				board.style.top = (newPosY) + "px";
				
			    event.preventDefault();
			    return false;
			}
		}
	});
	
});