var rect = require("./rectangle.js");

function solveRect(l,b) {
	rect(2,3,(error, rectangle) => {
		if (error) {
			console.log(error.message);
		} else {
			console.log(rectangle.perimeter());
			console.log(rectangle.area());
		}
	});
	console.log('first this will be printed');
}

solveRect(2,3);