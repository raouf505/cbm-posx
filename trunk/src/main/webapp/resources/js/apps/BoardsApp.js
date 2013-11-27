define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "views/BoardsCompositeView", "collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCompositeView, BoardsCollection) {
	
	var BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentRegion : "#boardsComponentRegion"
	});

	BoardsApp.on("initialize:after", function() {
		var boardsCompositeView;
		var boardsCollection = new BoardsCollection();
		boardsCollection.fetch({
			success: function() {
				boardsCompositeView = new BoardsCompositeView({
					collection: boardsCollection
				});
				
				BoardsApp.boardsComponentRegion.show(boardsCompositeView);
			}
		});

	});

		

	return BoardsApp;
});