define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "boards/views/BoardsComponentCollectionView", "boards/views/BoardsActionBarComponentView", "boards/views/BoardDetailsModalView", "boards/views/BoardsAddBoardModalView", "boards/collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsComponentCollectionView, BoardsActionBarComponentView, BoardDetailsModalView, BoardsAddBoardModalView, BoardsCollection) {
	
	var BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentCollectionViewRegion : "#boardsComponentCollectionViewRegion",
		boardsActionBarComponentViewRegion: "#boardsActionBarComponentViewRegion",
		boardDetailsModalViewRegion: "#boardDetailsModalViewRegion",
		boardsAddBoardModalViewRegion: "#boardsAddBoardModalViewRegion",
	});

	BoardsApp.on("initialize:after", function() {
		this.boardsCollection = new BoardsCollection();
		this.boardsComponentCollectionView = new BoardsComponentCollectionView({
			collection: this.boardsCollection
		});
		
		this.boardsComponentCollectionViewRegion.show(this.boardsComponentCollectionView);
		this.boardsCollection.fetch();
		
		this.boardDetailsModalViewRegion.show(new BoardDetailsModalView());
		this.boardsActionBarComponentViewRegion.show(new BoardsActionBarComponentView());
		this.boardsAddBoardModalViewRegion.show(new BoardsAddBoardModalView({collection: this.boardsCollection}));

	});
		
	return BoardsApp;
});