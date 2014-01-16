define(["jquery", "underscore", "backbone", "marionette", "menu/views/MenuItemView", "menu/models/MenuItemModel", "tpl!menu/templates/menuCompositeViewTpl.html", "views/EmptyView"], function($, _, Backbone, Marionette, MenuItemView, MenuItemModel, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "menuComponent",
		template: template,
		itemView: MenuItemView,
		itemViewContainer: "#menuItemsList",
		emptyView: EmptyView,
		ui: {
			menuCategoryTabs: "#menuCategoryTabs",
			addMenuItemForm: "#addMenuItemForm",
			errorMsg: "#addMenuItemModalErrorMsg"
		},
		events: {
			"submit form": function(event) {
				event.preventDefault();
				var menuItemModelData = {
						number: this.$(addMenuItemForm).find("[name='number']").val(),
						name: this.$(addMenuItemForm).find("[name='name']").val(),
						price: this.$(addMenuItemForm).find("[name='price']").val(),
						category: this.$(addMenuItemForm).find("[name='category']").val()
				};
				
				var menuItemModel = new MenuItemModel();
				
				if (!menuItemModel.set(menuItemModelData, {validate: true})) {
					this.ui.errorMsg.html(menuItemModel.validationError);
				} else if(this.collection.findWhere({name: menuItemModelData.name}) || this.collection.findWhere({number: menuItemModelData.number})) {
					this.ui.errorMsg.html("El item ya existe.");
				} else {
					this.collection.create(menuItemModel);
					this.ui.errorMsg.html("");
					this.$("#addMenuItemModal").modal("hide");
				}
			},
			"click #addMenuItemBtn": function() {
				this.$(addMenuItemForm).trigger("submit");
			}
		},
		appendHtml: function(collectionView, itemView, index) {
			var category = itemView.model.get("category");
			
			if (category != undefined) {
				var tableId = category.toLowerCase() + "Table";
				
				if (collectionView.$("#" + tableId).length == 0) {
					var tabActiveClass = "";
					var tableActiveClass = "";
					
					if (index == 0) {
						tabActiveClass = "active";
						tableActiveClass = "in active";
					}
					
					this.ui.menuCategoryTabs.append("<li class='" + tabActiveClass + "'><a href=#" + tableId + " data-toggle='tab'>" + category + "</a></li>");
					collectionView.$(collectionView.itemViewContainer).append("<table id='" + tableId + "' class='tab-pane fade " + tableActiveClass + "'></table>");
					
					var tableHeaders = "<tr>";
					for (var prop in itemView.model.attributes) {
						if (prop != "id" && prop != "category") {
							var tableHeaderName = "";
							switch(prop) {
								case "number":
									tableHeaderName = "numero";
									break;
								case "name":
									tableHeaderName = "nombre";
									break;
								case "price":
									tableHeaderName = "precio";
									break;
								default:
									tableHeaderName = prop;
							}
							
							tableHeaders += "<th>" + tableHeaderName + "</th>";
						}
					}
					tableHeaders += "</tr>";
					collectionView.$("#" + tableId).append(tableHeaders);
				}
				
				collectionView.$("#" + tableId).append(itemView.el);
			}
		}
	});
	
});