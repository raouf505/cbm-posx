define(["jquery", "underscore", "backbone", "marionette", "views/BoardsCollectionView", "collections/BoardsCollection"], function($, _, Backbone, Marionette, BoardsCollectionView, BoardsCollection) {
	
	var BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsContainer : "#boardsContainer"
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