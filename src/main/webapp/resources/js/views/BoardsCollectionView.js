define(["jquery", "underscore", "backbone", "marionette", "views/BoardView"], function($, _, Backbone, Marionette, BoardView) {
	
	return Marionette.CollectionView.extend({
		className: "boardsContainer",
		itemView: BoardView,
		events: {
			"dragover": function(e) {
				e.preventDefault();
				return false;
			}
		}
	});
	
});