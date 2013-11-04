require.config({
	baseUrl: "/resources/js",
	paths: {
		jquery: "lib/jquery-2.0.3.min",
		underscore: "lib/underscore-min",
		backbone: "lib/backbone-min",
		bootstrap: "lib/bootstrap.min",
		marionette: "lib/backbone.marionette.min"
	},
	shim : {
	    jquery : {
	      exports : "jQuery"
	    },
	    underscore : {
	      exports : "_"
	    },
	    backbone : {
	      deps : ["jquery", "underscore"],
	      exports : "Backbone"
	    },
	    marionette : {
	      deps : ["jquery", "underscore", "backbone"],
	      exports : "Marionette"
	    }
	  }
});

require(["app"], function(App){
	App.initialize();
});