define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "boards/views/BoardsCompositeView", "boards/views/BoardsActionBarComponent", "boards/views/BoardDetailsModalView", "boards/views/BoardsAddBoardModalView", "boards/collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCompositeView, BoardsActionBarComponent, BoardDetailsModalView, BoardsAddBoardModalView, BoardsCollection) {
	
	var BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentRegion : "#boardsComponentRegion",
		boardsActionBarComponentRegion: "#boardsActionBarComponentRegion",
		boardDetailsModalViewRegion: "#boardDetailsModalViewRegion",
		boardsAddBoardModalViewRegion: "#boardsAddBoardModalViewRegion",
	});

	BoardsApp.on("initialize:after", function() {
		this.boardsCollection = new BoardsCollection();
		this.boardsCompositeView = new BoardsCompositeView({
			collection: this.boardsCollection
		});
		
		this.boardsComponentRegion.show(this.boardsCompositeView);
		this.boardsCollection.fetch();
		
		this.boardDetailsModalViewRegion.show(new BoardDetailsModalView());
		this.boardsActionBarComponentRegion.show(new BoardsActionBarComponent());
		this.boardsAddBoardModalViewRegion.show(new BoardsAddBoardModalView({collection: this.boardsCollection}));

	});
		
	return BoardsApp;
});