define(["jquery", "underscore", "backbone", "marionette", "views/InventoryItemCollectionView", "collections/InventoryItemCollection"], function($, _, Backbone, Marionette, InventoryItemCollectionView, InventoryItemCollection) {
	
	var InventoryApp = new Marionette.Application();

	InventoryApp.addRegions({
		inventoryItems : "#inventoryItems"
	});

	InventoryApp.on("initialize:after", function() {
		var inventoryItemCollectionView;
		var inventoryItemCollection = new InventoryItemCollection();
		inventoryItemCollection.fetch({
			success: function() {
				inventoryItemCollectionView = new InventoryItemCollectionView({
					collection: inventoryItemCollection
				});
				
				InventoryApp.inventoryItems.show(inventoryItemCollectionView);
			}
		});

	});

		

	return InventoryApp;
});