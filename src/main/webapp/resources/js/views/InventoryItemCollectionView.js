define(["jquery", "underscore", "backbone", "marionette", "views/InventoryItemView"], function($, _, Backbone, Marionette, InventoryItemView) {
	
	return Marionette.CollectionView.extend({
		tagName : "table",
		itemView : InventoryItemView
	});
	
});