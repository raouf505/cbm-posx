define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "boards/views/BoardsCompositeView", "boards/views/BoardsActionBarComponent", "boards/views/BoardDetailsModalView", "boards/collections/BoardsCollection"], function($, _, Backbone, Bootstrap, Marionette, BoardsCompositeView, BoardsActionBarComponent, BoardDetailsModalView, BoardsCollection) {
	
	BoardsApp = new Marionette.Application();

	BoardsApp.addRegions({
		boardsComponentRegion : "#boardsComponentRegion",
		boardDetailsModalViewRegion: "#boardDetailsModalViewRegion",
		boardsActionBarComponentRegion: "#boardsActionBarComponentRegion"
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

	});

		

	return BoardsApp;
});