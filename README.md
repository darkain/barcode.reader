# barcode.reader

## About
JavaScript library for detecting input from USB/serial barcode readers

## License
This software library is licensed under the BSD 2-clause license, and may be
freely used in any project which is compatible with this license.


## Example
Usage:
```js
new barcode_reader(function(barcode) {
	document.location = '/?search=' + encodeURIComponent(barcode);
});
```

When a barcode is detected, web page will redirect to:
www.example.com/?search=[BARCODE]
