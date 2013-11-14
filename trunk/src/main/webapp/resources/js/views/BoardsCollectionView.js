define(["jquery", "underscore", "backbone", "marionette", "views/BoardView"], function($, _, Backbone, Marionette, BoardView) {
	
	return Marionette.CollectionView.extend({
		tagName : "table",
		itemView : BoardView
	});
	
});