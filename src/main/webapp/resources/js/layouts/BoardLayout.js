define(["marionette", "tpl!templates/boardLayoutTemplate.html", "views/BoardButtonView", "views/BoardDetailsModalView"], function(Marionette, template, BoardButtonView, BoardDetailsModalView) {
	
	return Marionette.Layout.extend({
		className: "boardLayout",
		template: template,
		regions: {
			boardButtonRegion: ".boardButtonRegion",
			boardModalRegion: ".boardModalRegion"
		},
		onRender: function() {
			this.boardButtonRegion.show(new BoardButtonView({model: this.model}));
			this.boardModalRegion.show(new BoardDetailsModalView({model: this.model}));
		}
	});
	
});