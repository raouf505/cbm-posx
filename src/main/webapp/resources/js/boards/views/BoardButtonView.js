define(["marionette", "vent", "tpl!boards/templates/boardButtonViewTpl.html"], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		className: "button green boardButton",
		template: template,
		attributes: function() {
			return {
				"id": "board" + this.model.get("name"),
				"draggable": true,
				"data-toggle": "modal",
				"data-target": "#boardDetailsModal"
			};
		},
		events: {
			"dragstart": function(event) {
				event.originalEvent.dataTransfer.setData('text', event.target.id);
			},
			"dragend": function(event) {
				var posX = parseInt(this.$el.css("left").replace("px", ""));
				var posY = parseInt(this.$el.css("top").replace("px", ""));
				
				this.model.save({posX: posX, posY: posY});
			},
			"click": function() {
				vent.trigger("boardButtonView:click", this.model);
			}
		},
		modelEvents: {
			"change": function() {
				this.render();
			}
		},
		onRender: function() {
			this.$el.css("left", this.model.get("posX"));
			this.$el.css("top", this.model.get("posY"));
		}
	});
	
});