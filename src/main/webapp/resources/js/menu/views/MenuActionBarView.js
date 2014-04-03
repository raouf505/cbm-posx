define(['marionette', 'vent', 'tpl!menu/templates/menuActionBarViewTpl.html'], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		id: 'menuActionBar',
		template: template
	});
	
});