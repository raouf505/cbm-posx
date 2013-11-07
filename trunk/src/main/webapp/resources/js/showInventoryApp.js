define(["jquery", "underscore", "backbone", "marionette", "views/inventoryItemView", "tpl!templates/inventoryItemTemplate.html"], function($, _, Backbone, Marionette, inventoryItemView, inventoryItemTemplate) {
	
	var initialize = function(){
		var ContactManager = new Marionette.Application();

		ContactManager.addRegions({
			mainRegion : "#main-region"
		});

		ContactManager.Contact = Backbone.Model.extend({});

		ContactManager.ContactCollection = Backbone.Collection.extend({
			model : ContactManager.Contact
		});

		ContactManager.ContactItemView = Marionette.ItemView.extend({
			template : inventoryItemTemplate
		});

		ContactManager.ContactsView = Marionette.CollectionView.extend({
			tagName : "ul",
			itemView : ContactManager.ContactItemView
		});

		ContactManager.on("initialize:after", function() {
			var contacts = new ContactManager.ContactCollection([ {
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

			var contactsListView = new ContactManager.ContactsView({
				collection : contacts
			});

			ContactManager.mainRegion.show(contactsListView);
			
//			var TodosCollection = Backbone.Collection.extend({
//				model: ContactManager.Contact,
//				url: '/inventory/crudService'
//			});
//			
//			var todos = new TodosCollection();
//			todos.fetch({success: function(){
//				var contactsListView = new ContactManager.ContactsView({
//					collection : todos
//				});
//	
//				ContactManager.mainRegion.show(contactsListView);
//			}});
		});

		ContactManager.start();
		
	};

	return {
		initialize: initialize
	};
});