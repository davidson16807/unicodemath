# unicodemath
A javascript math library made to exploit math symbol homoglyphs in unicode 

This is a library born out of a terrible, terrible idea. 

You see, Javascript is somewhat lax when it comes to variable names. Everyone on the web needs to use javascript, and that includes people who don't use the Latin Alphabet. Variable names have to support Unicode. This is a requirement of the language, and even shitty browsers like IE9 respect it.

[To be more precise](http://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names), variable names can start with anything you want as long as it's a "letter" in Unicode. The greek letter "π", for instance, is a valid variable name:

    var π	= Math.PI;

The same can be said for any subscript or superscript letter:

	var eˣ = Math.exp;
	function logₓ(a,x) {
		return Math.log(a) / Math.log(x);
	}

But we can do way more than this. What counts as a "letter" in one language might look like something else in another. The [Canadian Aboriginal Alphabet](), for instance, has a particular aesthetic: most of its letters are composed of simple geometric objects like triangles, circles, and crosses. 

ᐁᐃᐨᐱᐳᐸᐩᑌᑎᕽᐪ

It just so happens that a lot of math symbols share this same aesthetic. Say, wait a minute:

	function ᐩ (a,b) { return a + b }	
	function ᐨ (a,b) { return a - b }	
	function ᐧ (a,b) { return a * b }	
	function ᕽ (a,b) { return a * b }

Go ahead and check. All these are valid javascript functions. 

The Canadian Aboriginal Alphabet is not the only syllabary we can choose from. We can complete the basic arithmetic field by borrowing a "division symbol" from the Hirigana "repetition" symbol:

	function 〳(a,b) { return a / b }	

And the Vai Syllabary happens to have a "syllable lengthener" symbol that looks suspiciously like an equals sign:

	function ꘌꘌ (a,b) { return a == b }

A number of dental click symbols in the International Phonetic Alphabet also resemble common punctuation. We'll add them to:

	function ǃꘌ (a,b) { return a != b }
	var ǀxǀ	= Math.abs;

By their powers combined, we can represent mathematical expressions of arbitrary complexity, all within a single variable name:

	//quadratic equation solver
	function axᐩbxᐩcꘌ0 (a,b,c){
		return [
			(-b + Math.sqrt(b*b - 4*a*c)) / (2*a), 
			(-b - Math.sqrt(b*b - 4*a*c)) / (2*a)
		];
	}

Now, you might not be impressed by what amounts to basic arithmetic, but you can do so much more. Vectors and matrices are a staple of virtually any math library, but most math libraries expose them using plain english method names. Now you can manipulate these objects with the symbols you are already familiar with, and it's all done in native javascript. 

There are many other algebras to play with, too. Set theory, Boolean algebra, Geometric algebra, and Tensor calculus all use symbols with the appearance of unicode letter characters. Many times, the symbols of basic arithmetic are repurposed for use in the new algebras. We need some sort of engine for overloading these methods. That way, we can reuse the symbols based upon the type of object they are operating on. The operators then only need to wrap that underlying engine. 

	function ᐩ	() 	{	
		return UnicodeMath.get_binary('ᐩ', 	[].slice.call(arguments) );	
	}

We then define the object we want to operate on. Let's see if we can get this operator to work with vectors from the THREE.js library:

	UnicodeMath.add_datatype("THREE.Vector3", 		function(x) { x instanceof THREE.Vector3 });

And then we define the overload:

	UnicodeMath.add_binary('THREE.Vector3',	'ᐩ', 	'THREE.Vector3', 
		function(a,b) { return (new THREE.Vector3()).addVectors(a, b) } 
	);

We call the operator just as we would with any function:

	ᐩ( new THREE.Vector3(1,2,3); new THREE.Vector3(6,5,4) )

You can write your own overloads to support objects from virtually any library. Existing overloads exist for many mathematical objects. 

Overloads for the real number field are exposed in unicodemath.js, along with core functionality. 

Overloads for matrices and vectors are exposed through unicodemath-linear-js. You will need to load unicodemath.js before you load unicodemath-linear-js. As with most math libraries, you can represent matrices using 2d arrays. N-dimensional vectors can be represented as an array of numbers. 2D, 3D, and 4D vectors can also be represented by an object with x/y/z/w attributes. 

Overloads for complex numbers, quaternions, and other objects in Geometric Algebra are exposed through unicodemath-clifford.js. Objects are represented by their component blades. For instance, the bivector `a` can be represented by:

	a = { '1': 0, x: 1, y: 2, xy:3, yz: 4, zx: 5, xyz:6 }

A complex number is represented by:

	a = { '1': 0, xy:3 }

And a quaternion by:

	a = { '1': 0, xy:3, yz: 4, zx: 5 }

Objects beyond the third dimension are not currently supported.

#FAQ

##Why?
This is something I wonder myself. 

##I can't view a character in a particular font
Sounds like a problem with your font. 
