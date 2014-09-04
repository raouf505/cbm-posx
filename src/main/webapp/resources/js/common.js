define(["jquery"], function($) {
	
	$.fn.extend({
		validateForm: function() {
			var validForm = true;
			
			$(this).find("input[type='text'], input[type='file'], textarea").each(function(i, input) {
				if ($.trim($(input).val()) == "") {
					$(input).parents(".form-group").addClass("has-error");
					validForm = false;
				} else {
					$(input).parents(".form-group").removeClass("has-error").addClass("has-success");
				}
			});
			
			return validForm;
		}
	});

	// i.e. String.format("Hi this is a {0}!", "test")
	String.format = function (text) {
	    if (arguments.length <= 1) {
	        return text;
	    }
	    var tokenCount = arguments.length - 2;
	    for (var token = 0; token <= tokenCount; token++) {
	        text = text.replace(new RegExp("\\{" + token + "\\}", "gi"), arguments[token + 1]);
	    }
	    return text;
	};
});