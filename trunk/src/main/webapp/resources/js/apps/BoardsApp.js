define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "boards/views/BoardsCompositeView", "boards/collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCompositeView, BoardsCollection) {
	
	BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentRegion : "#boardsComponentRegion"
	});

	BoardsApp.on("initialize:after", function() {
		this.boardsCollection = new BoardsCollection();
		this.boardsCompositeView = new BoardsCompositeView({
			collection: this.boardsCollection
		});
		
		this.boardsComponentRegion.show(this.boardsCompositeView);
		this.boardsCollection.fetch();

	});

		

	return BoardsApp;
});