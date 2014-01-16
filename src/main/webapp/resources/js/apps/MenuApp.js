define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "menu/views/MenuLayoutView", "menu/collections/MenuCollection"], function($, _, Backbone, Bootstrap, Marionette, MenuLayoutView, MenuCollection) {
	
	MenuApp = new Marionette.Application();

	MenuApp.addRegions({
		menuComponentRegion : "#menuComponentRegion"
	});

	MenuApp.on("initialize:after", function() {
		this.menuCollection = new MenuCollection();
		this.menuLayoutView = new MenuLayoutView({
			collection: this.menuCollection
		});
		
		this.menuComponentRegion.show(this.menuLayoutView);
		this.menuCollection.fetch({reset: true});

	});

		

	return MenuApp;
});