

// logic
BǃB		= function(x){return !x};
ꜚB	= function(x){return !x};
BᐱB	= function(x,y){return x && y};
BᐯB = ǀǀ = function(x,y){return x || y};

//set theory
function ᑌ (a, b) {
	var result = a.slice(0);
	for (var i = 0; i < b.length; i++) {
		result.push(b[i]);
	}
	return result;
}
function ᑎ (a,b){
	var b_set = {};
	var result = [];
	// load list b into hash
	for (var i = 0; i < b.length; i++) {
		b_set[b[i]] = b[i];
	}
	// look up values in list a that are also in the b hash
	for (var i = 0; i < a.length; i++) {
		if (b_set[a[i]] !== void 0){
			result.push(a[i]);
		}
	}
	return result;
}
function ᑌꘌ (a, b) {
	for (var i = 0; i < b.length; i++) {
		a.push(b[i]);
	}
}
function ᑎꘌ (a,b){
	var b_set = {};
	// load list b into hash
	for (var i = 0; i < b.length; i++) {
		b_set[b[i]] = b[i];
	}
	for (var i = a.length; i >0; i--) {
		if (b_set[a[i]] === void 0){
			array.splice(i, 1);
		}
	}
}
function ᑕ (a,b) {
	for (var i = 0; i < b.length; i++) {
		b_set[b[i]] = b[i];
	}
	for (var i = 0; i < a.length; i++) {
		if (b_set[a[i]] === void 0){
			return false;
		}
	}
	return true;
}
function ǃᑕ (a,b) {
	return !aᑕb(a,b);
}
function ᕮ (a,b) {
	for (var i = 0; i < b.length; i++) {
		if(b[i] === a){
			return true;
		}
	}
	return false
}
function ǃᕮ (a,b) {
	return !aᕮb(a,b)
}
function ᗄ (a) {
	for (var i = 0; i < a.length; i++) {
		if (!a[i]){
			return false;
		}
	}
	return true;
}
function ǃᗄ (a) {
	return !ᗄ(a);
}
function Ǝ (a) {
	for (var i = 0; i < a.length; i++) {
		if (a[i]){
			return true;
		}
	}
	return false;
}
function ǃƎ (a) {
	return !Ǝ(a);
}

// SOLUTIONS TO POLYNOMIALS
var axᵌᐩbxᒾᐩcxᐩdꘌ0 = function(a,b,c,d) {
	var p = -b/(3*a);
	var q = p*p*p + (b*c-(3*a*d))/(6*a*a);
	var r = c/(3*a);
	return Math.pow( q + Math.pow( q*q + Math.pow(r-p*p, 3), 0.5 ) , 1/3);
}
var axᒾᐩbxᐩcꘌ0 = function(a,b,c) {
	var ᛇbᒾー4ac = ᛇ(b*b - 4*a*c)
	return [(ᛇbᒾー4ac - b)/(2*a), (-ᛇbᒾー4ac - b)/(2*a)];
}
var axᐩbꘌ0 = function(a,b) {
	return -b/a;
}

// BINARY OPERATORS-----------------------
		'Boolean	ǃ	Boolean': BǃB,
		'Number	ǃ	Undefined': Rǃ,