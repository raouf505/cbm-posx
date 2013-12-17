define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "views/MenuCompositeView", "collections/MenuCollection"], function($, _, Backbone, Bootstrap, Marionette, MenuCompositeView, MenuCollection) {
	
	MenuApp = new Marionette.Application();

	MenuApp.addRegions({
		menuComponentRegion : "#menuComponentRegion"
	});

	MenuApp.on("initialize:after", function() {
		this.menuCollection = new MenuCollection();
		this.menuCompositeView = new MenuCompositeView({
			collection: this.menuCollection
		});
		
		this.menuComponentRegion.show(this.menuCompositeView);
		this.menuCollection.fetch();

	});

		

	return MenuApp;
});