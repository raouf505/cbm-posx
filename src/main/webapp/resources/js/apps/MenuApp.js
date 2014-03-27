define(["jquery", "underscore", "backbone", "bootstrap", "marionette", "menu/views/MenuComponentCompositeView", "menu/collections/MenuCollection"], function($, _, Backbone, Bootstrap, Marionette, MenuComponentCompositeView, MenuCollection) {
	
	MenuApp = new Marionette.Application();

	MenuApp.addRegions({
		menuComponentRegion : "#menuComponentRegion"
	});

	MenuApp.on("initialize:after", function() {
		this.menuCollection = new MenuCollection();
		this.menuComponentCompositeView = new MenuComponentCompositeView({
			collection: this.menuCollection
		});
		
		this.menuComponentRegion.show(this.menuComponentCompositeView);
		this.menuCollection.fetch({reset: true});

	});

		

	return MenuApp;
});