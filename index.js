var rect = {
	perimeter: (x,y) => (2*(x+y)),
	area: (x,y) => (x*y)
};

function solveRect(l,b) {
	console.log('solving rectangle');
	console.log(rect.perimeter(l,b));
	console.log('area is '+rect.area(l,b));
}

solveRect(2,3);