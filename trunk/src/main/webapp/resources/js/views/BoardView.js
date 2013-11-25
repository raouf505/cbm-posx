define(["marionette", "tpl!templates/boardTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		className: "btn green boardBtn",
		template: template,
		attributes: function() {
			return {
				"id": "board" + this.model.get("id"),
				"draggable": true
			};
		},
		events: {
			"dragstart": function(event) {
				event.originalEvent.dataTransfer.setData('text', event.target.id);
			},
			"dragend": function(event) {
				var posX = this.$el.css("left").replace("px", "");
				var posY = this.$el.css("top").replace("px", "");
				
				this.model.save({posX: posX, posY: posY});
			}
		},
		onRender: function() {
			this.$el.css("left", this.model.get("posX"));
			this.$el.css("top", this.model.get("posY"));
		}
	});
	
});