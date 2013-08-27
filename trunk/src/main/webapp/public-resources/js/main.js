require.config({
	baseUrl: 'lib',
	paths: {
		jquery: 'jquery-2.0.3.min.js',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone'
	},
	shim: {
		'backbone': {
	        //These script dependencies should be loaded before loading
	        //backbone.js
			deps: ['underscore', 'jquery'],
	        //Once loaded, use the global 'Backbone' as the
	        //module value.
	        exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'foo': {
			deps: ['bar'],
			exports: 'Foo',
			init: function (bar) {
	            //Using a function allows you to call noConflict for
	            //libraries that support it, and do other cleanup.
	            //However, plugins for those libraries may still want
	            //a global. "this" for the function will be the global
	            //object. The dependencies will be passed in as
	            //function arguments. If this function returns a value,
	            //then that value is used as the module export value
	            //instead of the object found via the 'exports' string.
	            //Note: jQuery registers as an AMD module via define(),
	            //so this will not work for jQuery. See notes section
	            //below for an approach for jQuery.
	            return this.Foo.noConflict();
			}
		}
	}
});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});