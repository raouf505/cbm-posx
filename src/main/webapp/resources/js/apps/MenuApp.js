define(['jquery', 'underscore', 'backbone', 'bootstrap', 'marionette', 'menu/views/MenuComponentCompositeView', 'menu/views/MenuItemUpdateModalView', 'menu/views/MenuActionBarView', 'menu/collections/MenuCollection'], function($, _, Backbone, Bootstrap, Marionette, MenuComponentCompositeView, MenuItemUpdateModalView, MenuActionBarView, MenuCollection) {
	
	MenuApp = new Marionette.Application();

	MenuApp.addRegions({
		menuComponentRegion : '#menuComponentRegion',
		menuItemUpdateModalRegion : '#menuItemUpdateModalRegion',
		menuActionBarRegion: '#menuActionBarRegion'
	});

	MenuApp.on('initialize:after', function() {
		this.menuCollection = new MenuCollection();
		this.menuComponentCompositeView = new MenuComponentCompositeView({
			collection: this.menuCollection
		});
		
		this.menuComponentRegion.show(this.menuComponentCompositeView);
		this.menuCollection.fetch({reset: true});
		
		this.menuItemUpdateModalRegion.show(new MenuItemUpdateModalView());
		this.menuActionBarRegion.show(new MenuActionBarView());

	});

		

	return MenuApp;
});