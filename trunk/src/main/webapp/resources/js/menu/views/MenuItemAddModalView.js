define(['marionette', 'vent', 'tpl!menu/templates/menuItemAddModalViewTpl.html'], function(Marionette, vent, template) {
	
	return Marionette.ItemView.extend({
		id: 'menuItemAddModal',
		className: 'modal fade',
		template: template
	});
	
});