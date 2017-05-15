'use strict';

var barcode_reader = function(callback) {
	var scanner		= this;
	this.timeout	= null;
	this.keys		= [];
	this.callback	= callback;

	window.addEventListener('keydown', function(event){
		if (event.which === 13  &&  scanner.keys.length > 3) {
			event.preventDefault();
			scanner.callback( scanner.keys.join('') );
			return false;
		}

		if (event.which > 31) {
			scanner.keys.push(String.fromCharCode(event.which));

			if (scanner.timeout) clearTimeout(scanner.timeout);
			scanner.timeout = setTimeout(function(){
				clearTimeout(scanner.timeout);
				scanner.timeout = null;
				scanner.keys = [];
			}, 75);
		}

		return true;
	});
};
