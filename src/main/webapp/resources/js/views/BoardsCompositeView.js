define(["jquery", "underscore", "backbone", "marionette", "layouts/BoardLayout", "tpl!templates/boardsCompositeTemplate.html", "views/EmptyView"], function($, _, Backbone, Marionette, BoardLayout, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "boardsComponent",
		template: template,
		itemView: BoardLayout,
		itemViewContainer: "#boardsContainer",
		emptyView: EmptyView,
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