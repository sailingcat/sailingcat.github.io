/**
 * 
 * jQuery table sorter additionnal parsers
 * 
 * @copyright sailingcat.github.io
 */
;(function(w) {

	"use strict";
	
	$.tablesorter.addParser({ 
        id: "input-checkbox", 
        is: function(s) { 
            return false; 
        }, 
        format: function(s, t, node) {
            return $(node).children("input[type=checkbox]").is(':checked') ? 1 : 0;
        }, 
        type: "numeric" 
    });
	

	$.tablesorter.addParser({ 
        id: "input-text", 
        is: function(s) { 
            return false; 
        }, 
        format: function(s, t, node) {
            return $(node).children("input[type=text]").val();
        }, 
        type: "text" 
    });


	$.tablesorter.addParser({ 
        id: "input-text-numeric", 
        is: function(s) { 
            return false; 
        }, 
        format: function(s, t, node) {
            return parseInt($(node).children("input[type=text]").val());
        }, 
        type: "numeric" 
    });
    
})(window);
