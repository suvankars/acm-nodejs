#!/usr/bin/node

var fs = require('fs');
var buf = require('buffer');

var compare = function (a, b) {
	if (a <= b){
		console.log (b-a);
	}
	else{
		console.log (b-a);
	}
};

var process = function(data) {
	var lines = data.split('\n')

	for(var i = 0; i < lines.length; i += 1) {
		var	soldiers = (lines[i].split(' '));
		if (soldiers.length === 2){
			compare(soldiers[0], soldiers[1]);
		}
	}
};

fs.readFile("sample.in", function(err, data) {
	process(data.toString());
});


