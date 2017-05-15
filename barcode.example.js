new barcode_reader(function(barcode) {
	document.location = '/?search=' + encodeURIComponent(barcode);
});
