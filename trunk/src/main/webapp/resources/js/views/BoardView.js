define(["marionette", "tpl!templates/boardTemplate.html"], function(Marionette, template) {
	
	return Marionette.ItemView.extend({
		className: "btn green boardBtn",
		template: template,
		events: {
			"dragstart": function(e) {
//				e.dataTransfer.setData("Text",ev.target.id);
			}
		},
		onRender: function() {
			this.$el.attr("draggable", true);
			this.$el.css("left", this.model.get("posX"));
			this.$el.css("top", this.model.get("posY"));
		}
	});
	
});