define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "views/BoardsCollectionView", "collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCollectionView, BoardsCollection) {
	
	var BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsContainer : "#boardsRegion"
	});

	BoardsApp.on("initialize:after", function() {
		var boardsCollectionView;
		var boardsCollection = new BoardsCollection();
		boardsCollection.fetch({
			success: function() {
				boardsCollectionView = new BoardsCollectionView({
					collection: boardsCollection
				});
				
				BoardsApp.boardsContainer.show(boardsCollectionView);
			}
		});

	});

		

	return BoardsApp;
});