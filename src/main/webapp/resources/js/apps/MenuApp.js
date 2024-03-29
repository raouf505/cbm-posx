define(['jquery', 'underscore', 'backbone', 'bootstrap', 'marionette', 'menu/views/MenuComponentCompositeView', 'menu/views/MenuItemUpdateModalView', 'menu/views/MenuActionBarView', 'menu/views/MenuItemAddModalView', 'menu/collections/MenuCollection'], function($, _, Backbone, Bootstrap, Marionette, MenuComponentCompositeView, MenuItemUpdateModalView, MenuActionBarView, MenuItemAddModalView, MenuCollection) {
	
	MenuApp = new Marionette.Application();

	MenuApp.addRegions({
		menuComponentRegion : '#menuComponentRegion',
		menuItemUpdateModalRegion : '#menuItemUpdateModalRegion',
		menuActionBarRegion: '#menuActionBarRegion',
		menuItemAddModaRegion: '#menuItemAddModaRegion'
	});

	MenuApp.on('start', function() {
		this.menuCollection = new MenuCollection(window.jsonObjects.menuItems);
		this.menuComponentCompositeView = new MenuComponentCompositeView({
			collection: this.menuCollection
		});
		
		this.menuComponentRegion.show(this.menuComponentCompositeView);
		
		this.menuItemUpdateModalRegion.show(new MenuItemUpdateModalView());
		this.menuActionBarRegion.show(new MenuActionBarView());
		this.menuItemAddModaRegion.show(new MenuItemAddModalView({collection: this.menuCollection}));

	});

		

	return MenuApp;
});