//Conventions:
//vectors are denoted aꜛ,bꜛ,cꜛ,...
//shorthand functions are included where applicable
//combining characters will not be used - support for them is way too spotty
//latin-based characters are used by default, barring that priority goes to valid math-based characters, Canadian aboriginal syllabics, and Asian characters
// What needs to be fast:
// 	operations over R and Rⁿ for any n
// What does *not* need to be fast:
// 	calculus operations
// 	anything with ∇
// 	anything to do with functions
//  exponentiation of matrices

var ᛇ2	= Math.SQRT2;
var ᛇ5	= Math.sqrt(5);
var π	= Math.PI;
var φ	= 1.6180339987;
var ｅ	= 2.18281828;
var ꝏ	= Infinity;

function RᐩR (a,b) { return a + b }	//ᐩϯ十
function RᐨR (a,b) { return a - b }	//ᐨー
function RᐧR (a,b) { return a * b }	//ᕽㄨᐧॱ
function R〳R (a,b) { return a / b }	//ᐟ〳
function RꘌꘌR (a,b) { return a == b }
function RǃꘌR (a,b) { return a != b }
function ᐨR (a) { return -a }	//ᐨー
var ǀRǀ	= Math.abs;
function Rᐨᑊ (a) { return 1 / a }
function Rǃ (a) {
	var result = 1;
	for (var i = a; i > 1; i--) {
		result *= i;
	}
	return result;
}

// lambda calculus
function RㅡᐳRᐤRㅡᐳR(f,g) {
	return function (x) {
		f(g(x));
	}
}
function RㅡᐳRᐧR(f,g) {
	return f(g);
}

// Generalized arithmetic - inefficient, but works for any object with an overload for " ᐧ "
xᒾ	= function(a) { return ᐧ(a, a) }
xᵌ	= function(a) { return ᐧ(a, a, a) };
xᶣ	= function(a) { return ᐧ(a, a, a, a) };
// Generalized exponent
function xʸ (a,b) {
	if (!isNaN(parseFloat(a)) && isFinite(a)) { return Math.pow(a,b) }
	if (b == 0) { return; }
	result = a;
	for (var i = 1; i < b; i++) {
		result = ᐧ(result, a);
	}
	return result;
}
var ᛇ	= Math.sqrt;
var ᵌᛇ 	= Math.cbrt;
function ᶣᛇ(a) { return Math.pow(a,0.25); }
function ˣᛇ(a,b) { return Math.pow(a,1/b); }
function logₓ(a,x) {
	x = x || Math.exp(1);
	return Math.log(a) / Math.log(x);
}
function logₗₒ(a) {
	return Math.log(a) / Math.LN10;
}
var ln = Math.log;
function Σ (x) { 
	var result = x[0];
	for (var i = 1, li = x.length; i<li; i++) {
		result = ᐩ(result, x[i]);
	}
	return result;
}
function Π (x) { 
	var result = x[0];
	for (var i = 1, li = x.length; i<li; i++) {
		result = ᐧ(result, x[i]);
	}
	return result;
}

// SHORTHAND FUNCTIONS
function ᐩ	() 	{	return UnicodeMath.get_binary('ᐩ', 	[].slice.call(arguments) )	}
function ᐩꘌ	()	{	return UnicodeMath.get_binary('ᐩꘌ', 	[].slice.call(arguments) )	}
function ᐨ	() 	{	return UnicodeMath.get_binary('ᐨ', 	[].slice.call(arguments) )	}
function ᐨꘌ	()	{	return UnicodeMath.get_binary('ᐨꘌ', 	[].slice.call(arguments) )	}
function ᐧ	() 	{	return UnicodeMath.get_binary('ᐧ', 	[].slice.call(arguments) )	}
function ᐧꘌ	()	{	return UnicodeMath.get_binary('ᐧꘌ', 	[].slice.call(arguments) )	}
function ᕁ	() 	{	return UnicodeMath.get_binary('ᕁ', 	[].slice.call(arguments) )	}
function ᕁꘌ	()	{	return UnicodeMath.get_binary('ᕁꘌ', [].slice.call(arguments) )	}
function ᐤ	() 	{	return UnicodeMath.get_binary('ᐤ', 	[].slice.call(arguments) )	}
function ᐤꘌ	() 	{	return UnicodeMath.get_binary('ᐤꘌ', 	[].slice.call(arguments) )	}
function 〳	() 	{	return UnicodeMath.get_binary('〳', 	[].slice.call(arguments) )	}
function 〳ꘌ	() 	{	return UnicodeMath.get_binary('〳ꘌ',	[].slice.call(arguments) )	}
function ॱ	() 	{	return UnicodeMath.get_binary('ॱ', 	[].slice.call(arguments) )	}	// geometric product
function ॱꘌ	()	{	return UnicodeMath.get_binary('ॱꘌ', 	[].slice.call(arguments) )	}	// geometric product
function ᐲ	()	{ 	return UnicodeMath.get_binary('ᐲ', 	[].slice.call(arguments) )	}	// geometric product (alternate symbol)
function ᐱ	()	{ 	return UnicodeMath.get_binary('ᐱ', 	[].slice.call(arguments) )	}
function ᐯ	()	{ 	return UnicodeMath.get_binary('ᐯ', 	[].slice.call(arguments) )	}
function ꘌ	()	{	return UnicodeMath.get_binary('ꘌ', 	[].slice.call(arguments) )	}
function ꘌꘌ	()	{	
	try{
		return UnicodeMath.get_binary('ꘌꘌ', [].slice.call(arguments) )	
	} catch(ex){
		return false
	}
}
function ǃꘌ	()	{	
	try{
		return UnicodeMath.get_binary('ǃꘌ', [].slice.call(arguments) )	
	} catch(ex){
		return true
	}
}

function ᐨᑊ	(a) 	{	return UnicodeMath.get_unary('ᐨᑊ', [a,b] )	}
function ᐨᑊꘌ	(a) 	{	return UnicodeMath.get_unary('ᐨᑊꘌ', [a,b] )	}

function ᐪ	(a) 	{	return UnicodeMath.get_unary('ᐪ', a)			}
function ᐪꘌ	(a) 	{	return UnicodeMath.get_unary('ᐪꘌ', a)		}

function ˆ	(a) 	{	return UnicodeMath.get_unary('ˆ', a)		}
function ˆꘌ	(a,b) 	{	return UnicodeMath.get_binary('ˆꘌ', a,b)	}

function ǀxǀ(a) 	{	return UnicodeMath.get_unary('ǀxǀ', a)		}
function ǃ	(a)		{	return UnicodeMath.get_binary('ǃ', a)		}



UnicodeMath = function(){

	var overloads = {

// UNARY OPERATORS-----------------------
		'Number	ᐨ	Undefined': ᐨR, // NOTE: This needs to be binary to allow overloads for subtraction
		'ᐨᑊ	Number': 			Rᐨᑊ,
		'ᛇ	Number': 			ᛇ,
		'ǀxǀ	Number': 		ǀRǀ,
		
// FUNCTION OPERATIONS -----------------------------
		'Function	ᐤ	Function': 	RㅡᐳRᐤRㅡᐳR,
		'Function	ᐧ	Number': 	RㅡᐳRᐧR,
		'Function	ᐧ	Function': 	function(f,g) { return f(g); },
		
// NUMBER, NUMBER -----------------------------
		'Number	ᐩ	Number': 	RᐩR,
		'Number	ᐨ	Number': 	RᐨR,
		'Number	ᐧ	Number': 	RᐧR,
		'Number	ॱ	Number': 	RᐧR,
		'Number	ᕁ	Number': 	RᐧR,
		'Number	〳	Number': 	R〳R,
		'Number	ꘌꘌ	Number': 	RꘌꘌR,
		'Number	ǃꘌ	Number': 	RǃꘌR
	};
	var datatypes = [];
	function get_type(x) {
		if (x === void 0) {
			return 'Undefined';
		} 
		
		if (x === null) {
			return 'Null';
		} 
		
		var type = x.constructor.name;
		if (type === 'Object') {
			var element_type = 'Vector'; // x.x.constructor.name === 'Function'? 'Function' : 'Vector';
			if (x.yz || x.zx ){
				if (x.x || x.xyz){
					return "Multivector";
				} 
				return "Quaternion";
			} 
			if (x.xy){
				return "Complex";
			} 
			if(x.w !== void 0){
				return element_type + '4';
			} 
			if (x.z !== void 0) {
				return element_type + '3';
			} 
			if (x.y !== void 0){
				return element_type + '2';
			} 

			for (var i = 0, li = datatypes.length; i < li; i++) {
				datatype = datatypes[i];
				if (datatype.test(x)) {
					return datatype.name;
				}
			}
		}
		
		if (type === 'Array'){
			if(Array.isArray(x[0])) {
				return 'Matrix';
			}
			if(x.length == 4) {
				return 'Matrix2';
			}
			if(x.length == 9) {
				return 'Matrix3';
			}
			if(x.length == 16) {
				return 'Matrix4';
			}
			return type;
		}
		
		if (type === '' || type === 'Object') {
			for (var i = 0, li = datatypes.length; i < li; i++) {
				datatype = datatypes[i];
				if (datatype.test(x)) {
					return datatype.name;
				}
			}
		}

		return type;
	}
	function get_unary_hash(a_type, op) {
		return op + '\t' + a_type;
	}
	function get_binary_hash(a_type, op, b_type) {
		return a_type + "\t" + op + "\t" + b_type;
	}
	function get_nary_hash(op, arg_types) {
		return op + '\t' + arg_types.join('\t');
	}
	return {
		add_datatype: function(name, test) {
			datatypes.push({ name: name, test: test });
		},
		add_overloads: function(added) {
			for(key in added) {
				overloads[key] = added[key];
			}
		},
		add_unary: function(op, a, fn){
			overloads[get_binary_hash(a,op)] = fn;
		},
		get_unary: function(op, a) {
			var signature = get_unary_hash(get_type(a), op);
			var overload = overloads[signature];
			if (overload === void 0) {
				throw "The '"+op+"' operator has no suitable overload for the input: '"+ a +"'. The signature detected for the input is: '"+signature+"'";;
			}
			return overload(a);
		},
		add_binary: function(a, op, b, fn){
			overloads[get_binary_hash(a,op,b)] = fn;
		},
		get_binary: function(op, args) {
			var result = args[0];
			for (var i = 1; i < args.length; i++) {
				var arg = args[i];
				var signature = get_binary_hash(get_type(result), op, get_type(arg));
				var overload = overloads[signature];
				if (overload === void 0) {
					throw "The '"+op+"' operator has no suitable overload for the input: '"+signature+"'";
				}
				result = overload(result, arg);
			}
			return result;
		},
		add_nary: function(op, args, fn){
			overloads[get_nary_hash(op, args)] = fn;
		},
		get_nary: function(op, args) {
			var defined = args.filter(function(x){ return x !== void 0; });
			var signature = get_nary_hash(op, defined.map(get_type));
			var overload = overloads[signature];
			if (overload === void 0) {
				throw "The '"+op+"' operator has no suitable overload for the input: '"+signature+"'";
			}
			return overload.apply(null, args);
		}
	}
}();

