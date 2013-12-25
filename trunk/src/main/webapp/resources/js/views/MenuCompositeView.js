define(["jquery", "underscore", "backbone", "marionette", "views/MenuItemView", "tpl!templates/menuCompositeTemplate.html", "views/EmptyView"], function($, _, Backbone, Marionette, MenuItemView, template, EmptyView) {
	
	return Marionette.CompositeView.extend({
		id: "menuComponent",
		template: template,
		itemView: MenuItemView,
		itemViewContainer: "#menuItemsList",
		emptyView: EmptyView,
		ui: {
			menuCategoryTabs: "#menuCategoryTabs"
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