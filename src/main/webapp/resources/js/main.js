require.config({
	baseUrl: "/resources/js",
	paths: {
		backbone: "lib/backbone-min",
		bootstrap: "lib/bootstrap.min",
		jquery: "lib/jquery-2.0.3.min",
		marionette: "lib/backbone.marionette.min",
		text: "lib/text",
		tpl: "lib/tpl",
		underscore: "lib/underscore-min",
		vent: "utils/vent"
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
	    bootstrap : {
		      deps : ["jquery"],
		      exports : "Bootstrap"
		    },
	    marionette : {
	      deps : ["jquery", "underscore", "backbone"],
	      exports : "Marionette"
	    }
	  }
});

// this includes an specific "app" defined on mainTemplate.jsp defined as "backboneApp".
// "backboneApp" value is defined on tiles definition
require(["apps/" + backboneApp], function(App){
	App.start();
});