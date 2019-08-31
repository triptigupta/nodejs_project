var rect = require("./rectangle.js");

function solveRect(l,b) {
	console.log('solving rectangle');
	console.log(rect.perimeter(l,b));
	console.log('area is '+rect.area(l,b));
}

solveRect(2,3);