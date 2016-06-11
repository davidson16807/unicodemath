
//calculus
ʹ = df〳dx = function(f, dx) {
	dx = dx || 1e-6;
	return function (x) {
		return (f(x+dx/2) - f(x-dx/2))  /  dx;
	}
}
ʃ = function (f, dx) {
	dx = dx || 1e-6;
	return function (a,b) {
		for (var x = a, sum = 0; x < b; x+=dx) {
		    sum += f(x) * dx;
		}
		return sum;
	}
}
ǀ = function(a,b,f) {
	return f(b) - f(a);
}
