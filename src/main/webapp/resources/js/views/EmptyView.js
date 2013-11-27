define(["marionette", "tpl!templates/emptyTemplate.html"], function(Marionette, template) {
	return Marionette.ItemView.extend({
		id: "emptyImg",
		template: template
	});
});