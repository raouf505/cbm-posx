define(["marionette", "tpl!templates/boardTemplate.html", "views/BoardDetailsModalView"], function(Marionette, template, BoardDetailsModalView) {
	
	return Marionette.ItemView.extend({
		className: "button green boardButton",
		template: template,
		attributes: function() {
			return {
				"id": "board" + this.model.get("id"),
				"draggable": true,
				"data-toggle": "modal",
				"data-target": "boardModal" + this.model.get("id")
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
				$("#" + "boardModal" + this.model.get("id")).modal();
			}
		},
		onRender: function() {
			this.$el.css("left", this.model.get("posX"));
			this.$el.css("top", this.model.get("posY"));
			
			boardDetailsModalView = new BoardDetailsModalView({model: this.model});
			this.$(".boardModalContainer").html(boardDetailsModalView.render().el);
		}
	});
	
});