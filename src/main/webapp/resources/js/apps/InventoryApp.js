define(["jquery", "underscore", "backbone", "marionette", "views/inventoryItemView", "tpl!templates/inventoryItemTemplate.html"], function($, _, Backbone, Marionette, inventoryItemView, inventoryItemTemplate) {
	
	var InventoryApp = new Marionette.Application();

	InventoryApp.addRegions({
		mainRegion : "#main-region"
	});

	InventoryApp.Contact = Backbone.Model.extend({});

	InventoryApp.ContactCollection = Backbone.Collection.extend({
		model : InventoryApp.Contact
	});

	InventoryApp.ContactItemView = Marionette.ItemView.extend({
		template : inventoryItemTemplate
	});

	InventoryApp.ContactsView = Marionette.CollectionView.extend({
		tagName : "ul",
		itemView : InventoryApp.ContactItemView
	});

	InventoryApp.on("initialize:after", function() {
		var contacts = new InventoryApp.ContactCollection([ {
			firstName : "Bob",
			lastName : "Brigham",
			phoneNumber : "555-0163"
		}, {
			firstName : "Alice",
			lastName : "Arten",
			phoneNumber : "555-0184"
		}, {
			firstName : "Charlie",
			lastName : "Campbell",
			phoneNumber : "555-0129"
		} ]);

		var contactsListView = new InventoryApp.ContactsView({
			collection : contacts
		});

		InventoryApp.mainRegion.show(contactsListView);
		
//			var TodosCollection = Backbone.Collection.extend({
//				model: InventoryApp.Contact,
//				url: '/inventory/crudService'
//			});
//			
//			var todos = new TodosCollection();
//			todos.fetch({success: function(){
//				var contactsListView = new InventoryApp.ContactsView({
//					collection : todos
//				});
//	
//				InventoryApp.mainRegion.show(contactsListView);
//			}});
	});

		

	return InventoryApp;
});