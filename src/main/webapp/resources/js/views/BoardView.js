define(["marionette", "tpl!templates/boardTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		className: "btn green boardBtn",
		template: template,
		events: {
			"dragstart": function(event) {
				var style = window.getComputedStyle(event.target, null);
			    event.originalEvent.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"),10) - event.originalEvent.clientX) +
			    		',' + (parseInt(style.getPropertyValue("top"),10) - event.originalEvent.clientY));
			    
			    console.log("start dragging")

			}
		},
		onRender: function() {
			this.$el.attr("id", "board" + this.model.get("id"));
			this.$el.attr("draggable", true);
			this.$el.css("left", this.model.get("posX"));
			this.$el.css("top", this.model.get("posY"));
		}
	});
	
});