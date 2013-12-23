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
				}
				
				if (index == 0) {
					collectionView.$("#" + tableId).addClass("in active");
					collectionView.$("#" + tableId).addClass("in active");
				}
				
				collectionView.$("#" + tableId).append(itemView.el);
			}
		}
	});
	
});