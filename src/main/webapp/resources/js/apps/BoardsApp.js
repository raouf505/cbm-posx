define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "boards/views/BoardsCompositeView", "boards/views/BoardDetailsModalView", "boards/collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCompositeView, BoardDetailsModalView, BoardsCollection) {
	
	BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentRegion : "#boardsComponentRegion",
		boardDetailsModalViewRegion: "#boardDetailsModalViewRegion"
	});

	BoardsApp.on("initialize:after", function() {
		this.boardsCollection = new BoardsCollection();
		this.boardsCompositeView = new BoardsCompositeView({
			collection: this.boardsCollection
		});
		
		this.boardsComponentRegion.show(this.boardsCompositeView);
		this.boardsCollection.fetch();
		
		this.boardDetailsModalViewRegion.show(new BoardDetailsModalView());

	});

		

	return BoardsApp;
});