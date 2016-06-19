
// ---------------------------------Rᒾ---------------------------------
function ːᕮRᒾ		(x,y) 		{ return	{	x:x,	y:y 	}; }
aꜛꓽaꜛᕮRᒾ = xᐧiꜛᐩyᐧjꜛ	= ːᕮRᒾ;
aꜛᕮRᒾ = ᕮRᒾ = function(aꜛ) {
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z === void 0;
}

// 	(R,Rᒾ)->Rᒾ OPERATIONS
function RᐧRᒾ		(a,b) 	{ return ːᕮRᒾ(	a * b.x,	a * b.y			); }

// 	(Rᒾ,R)->Rᒾ OPERATIONS
function ᐨRᒾ			(a) 	{ return ːᕮRᒾ(	-a.x,		-a.y			); }
function RᒾᐩR		(a,b) 	{ return ːᕮRᒾ(	a.x + b,	a.y + b			); }
function RᒾᐨR		(a,b) 	{ return ːᕮRᒾ(	a.x - b,	a.y - b			); }
function RᒾᐧR		(a,b) 	{ return ːᕮRᒾ(	a.x * b,	a.y * b			); }
function Rᒾ〳R		(a,b) 	{ return ːᕮRᒾ(	a.x / b,	a.y / b			); }
function ᐨꘌRᒾ		(a,b) 	{ return 		a.x *=-1;	a.y *=-1;}
function RᒾᐩꘌR		(a,b) 	{ return 		a.x += b;	a.y += b;		}
function RᒾᐨꘌR		(a,b) 	{ return 		a.x -= b;	a.y -= b;		}
function RᒾᐧꘌR		(a,b) 	{ return 		a.x *= b;	a.y *= b;		}
function Rᒾ〳ꘌR		(a,b) 	{ return 		a.x /= b;	a.y /= b;		}

// 	(Rᒾ,Rᒾ)->Rᒾ OPERATIONS
function RᒾᐩRᒾ		(a,b) 	{ return ːᕮRᒾ(	a.x +  b.x,	a.y +  b.y		); }
function RᒾᐨRᒾ		(a,b) 	{ return ːᕮRᒾ(	a.x -  b.x,	a.y -  b.y		); }
function RᒾᐤRᒾ		(a,b) 	{ return ːᕮRᒾ(	a.x *  b.x,	a.y *  b.y		); }
function RᒾᐩꘌRᒾ		(a,b) 	{ return 		a.x += b.x;	a.y += b.y;		}
function RᒾᐨꘌRᒾ		(a,b) 	{ return 		a.x -= b.x;	a.y -= b.y;		}
function RᒾᐤꘌRᒾ		(a,b) 	{ return 		a.x *= b.x;	a.y *= b.y;		}
function RᒾꘌRᒾ		(a,b) 	{ return 		a.x  = b.x;	a.y  = b.y;		}
function ꘌRᒾ			(a,b) 	{ return ːᕮRᒾ(	a.x,		a.y 			); }

// 	MISCELLANEOUS Rᒾ OPERATIONS
function RᒾꘌꘌRᒾ		(a,b) 	{ return 		a.x == b.x&&a.y == b.y; 	}
function RᒾǃꘌRᒾ		(a,b) 	{ return 		a.x != b.x||a.y != b.y; 	}
function RᒾᐧRᒾ		(a,b) 	{ return 		a.x * b.x +	a.y * b.y;		}
function ǀRᒾǀ		(a)		{ return ᛇ(		a.x * a.x +	a.y * a.y		); }
function Rᒾˆ			(a)		{ return 		Rᒾ〳R 	(a, ǀRᒾǀ(a));		}	
function Rᒾˆꘌ		(a)		{ return 		Rᒾ〳ꘌR 	(a, ǀRᒾǀ(a));		}	

// 	FUNCTIONAL Rᒾ OPERATIONS
function FᒾᐧRᒾ	(f,a) 	{ return 		f.x(a.x) +	f.y(a.y) 		}
function FᐧRᒾ		(f,a) 	{ return ːᕮRᒾ(	f(a.x),	 	f(a.y)  		); }
function FᒾᐤRᒾ	(f,a) 	{ return ːᕮRᒾ(	f.x(a.x),	f.y(a.y)		); }
function RᒾᐧꘌF	(f,a) 	{ 				a.x=f(a.x);	a.y=f(a.y); 	}
function RᒾᐤꘌFᒾ	(f,a)	{ 				a.x=f.y(a.x);	a.y=f.y(a.y); }

// cross product
function RᒾᕁRᒾ(a,b) { 
		return a.x*b.y - b.x*a.y;
	};

// MATRIX OPERATIONS
ːᕮRᒾᕽᒾ = AːAᕮRᒾᕽᒾ = ᒾᕽᒾ = RᒾㅡᐳRᒾ 	= function(	xx, xy, 
										yx, yy ) {
	return [
		xx, xy, 
		yx, yy, 
	];
}

var Iᒾ = ᒾᕽᒾ(	1, 0, 
			0, 1 );
// matrix-vector product
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᒾᕽᒾᐧRᒾ (A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1];
	var yx = A[ 2], yy = A[ 3];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy)
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy)

	return ꜛ(resultX, resultY);
}
function RᒾᕽᒾᐧRⁿ (A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1];
	var yx = A[ 2], yy = A[ 3];

	//Now set some simple names for the point
	var x = bꜛ[0];
	var y = bꜛ[1];

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy)
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy)

	return [resultX, resultY];
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᒾᐧꘌRᒾᕽᒾ (bꜛ, A) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1];
	var yx = A[ 2], yy = A[ 3];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;

	//Multiply the point against each part of the 1st column, then add together
	bꜛ.x = (x * xx) + (y * xy);
	//Multiply the point against each part of the 2nd column, then add together
	bꜛ.y = (x * yx) + (y * yy);
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᒾᕽᒾᐧRᒾᕽᒾ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[2]];
  var column1 = [B[1], B[3]];
  
  // Multiply each column by the matrix
  var result0 = RᒾᕽᒾᐧRⁿ( A, column0 );
  var result1 = RᒾᕽᒾᐧRⁿ( A, column1 );
  
  // Turn the result columns back into a single matrix
  return [
    result0[0], result1[0],
    result0[1], result1[1]
  ]
}
function RᒾᕽᒾᐧꘌRᒾᕽᒾ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[2]];
  var column1 = [B[1], B[3]];
  
  // Multiply each column by the matrix
  var result0 = RᒾᕽᒾᐧRⁿ( A, column0 );
  var result1 = RᒾᕽᒾᐧRⁿ( A, column1 );
  
  // Turn the result columns back into a single matrix
    A[0]= result0[0]; A[1]= result1[0],
    A[2]= result0[1]; A[3]= result1[1]
}
function Rᒾᕽᒾᐪ (A) {
	return [A[0], A[2], 
			A[1], A[3]];
}
function Rᒾᕽᒾᐪꘌ(A) {
	var a=A[0], b=A[2],
		c=A[1], d=A[3];
	A[0]=a; A[1]=c;
	A[2]=b; A[3]=d;
}
function ǀRᒾᕽᒾǀ(A) {
	var a = A[ 0], b = A[ 1], c = A[ 2]; 
	var d = A[ 3], e = A[ 4], f = A[ 5]; 
	var g = A[ 6], h = A[ 7], i = A[ 8]; 

	return ᐨ(
	 		ᐧ( a, b ),
			ᐧ( b, b )
	);

}


// ---------------------------------Rᵌ---------------------------------
function ːᕮRᵌ		(x,y,z)	{ return	{	x:x,	y:y, 	z:z 	}; }
aꜛᕮRᵌ = ᕮRᵌ = function(aꜛ)	{
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z !== void 0 && aꜛ.w === void 0;
}
aꜛꓽaꜛᕮRᵌ = xᐧiꜛᐩyᐧjꜛᐩzᐧkꜛ		= ːᕮRᵌ;

// 	(R,Rᵌ)->Rᵌ OPERATIONS
function RᐧRᵌ		(a,b) 	{ return ːᕮRᵌ(	a * b.x,	a * b.y,	a * b.z 		); }

// 	(Rᵌ,R)->Rᵌ OPERATIONS
function ᐨRᵌ			(a) 	{ return ːᕮRᵌ(	-a.x,		-a.y,		-a.z			); }
function RᵌᐩR		(a,b) 	{ return ːᕮRᵌ(	a.x + b,	a.y + b,	a.z + b			); }
function RᵌᐨR		(a,b) 	{ return ːᕮRᵌ(	a.x - b,	a.y - b,	a.z - b			); }
function RᵌᐧR		(a,b) 	{ return ːᕮRᵌ(	a.x * b,	a.y * b,	a.z * b			); }
function Rᵌ〳R		(a,b) 	{ return ːᕮRᵌ(	a.x / b,	a.y / b,	a.z / b			); }
function ᐨꘌRᵌ		(a,b) 	{ return 		a.x *=-1;	a.y *=-1;	a.z *=-1;		}
function RᵌᐩꘌR		(a,b) 	{ return 		a.x += b;	a.y += b;	a.z += b;		}
function RᵌᐨꘌR		(a,b) 	{ return 		a.x -= b;	a.y -= b;	a.z -= b;		}
function RᵌᐧꘌR		(a,b) 	{ return 		a.x *= b;	a.y *= b;	a.z *= b;		}
function Rᵌ〳ꘌR		(a,b) 	{ return 		a.x /= b;	a.y /= b;	a.z /= b;		}

// 	(Rᵌ,Rᵌ)->Rᵌ OPERATIONS
function RᵌᐩRᵌ		(a,b) 	{ return ːᕮRᵌ(	a.x +  b.x,	a.y +  b.y,	a.z +  b.z 		); }
function RᵌᐨRᵌ		(a,b) 	{ return ːᕮRᵌ(	a.x -  b.x,	a.y -  b.y,	a.z -  b.z 		); }
function RᵌᐤRᵌ		(a,b) 	{ return ːᕮRᵌ(	a.x *  b.x,	a.y *  b.y,	a.z *  b.z 		); }
function RᵌᐩꘌRᵌ		(a,b) 	{ return 		a.x += b.x;	a.y += b.y;	a.z += b.z;		}
function RᵌᐨꘌRᵌ		(a,b) 	{ return 		a.x -= b.x;	a.y -= b.y;	a.z -= b.z;		}
function RᵌᐤꘌRᵌ		(a,b) 	{ return 		a.x *= b.x;	a.y *= b.y;	a.z *= b.z;		}
function RᵌꘌRᵌ		(a,b) 	{ return 		a.x  = b.x;	a.y  = b.y;	a.z  = b.z;		}
function ꘌRᵌ		(a,b) 	{ return ːᕮRᵌ(	a.x,		a.y,		a.z 			); }

// 	MISCELLANEOUS Rᵌ OPERATIONS
function RᵌꘌꘌRᵌ		(a,b) 	{ return 		a.x == b.x&&a.y == b.y&&a.z == b.z; 	}
function RᵌǃꘌRᵌ		(a,b) 	{ return 		a.x != b.x||a.y != b.y||a.z != b.z; 	}
function RᵌᐧRᵌ		(a,b) 	{ return 		a.x * b.x +	a.y * b.y +	a.z * b.z;		}
function ǀRᵌǀ		(a)		{ return ᛇ(		a.x * a.x +	a.y * a.y +	a.z * a.z		); }
function Rᵌˆ		(a)		{ return 		Rᵌ〳R 	(a, ǀRᵌǀ(a));		}	
function Rᵌˆꘌ		(a)		{ return 		Rᵌ〳ꘌR 	(a, ǀRᵌǀ(a));		}	

// 	FUNCTIONAL Rᵌ OPERATIONS
function FᵌᐧRᵌ	(f,a) 	{ return 		f.x(a.x) +	f.y(a.y) +	f.z(a.z); 		}
function FᐧRᵌ	(f,a) 	{ return ːᕮRᵌ(	f(a.x),	 	f(a.y),  	f(a.z)  		); }
function FᵌᐤRᵌ	(f,a) 	{ return ːᕮRᵌ(	f.x(a.x),	f.y(a.y),  	f.z(a.z)		); }
function RᵌᐧꘌF	(f,a) 	{ 				a.x=f(a.x);	a.y=f(a.y); a.z=f(a.z); 	}
function RᵌᐤꘌFᵌ	(f,a) 	{ 				a.x=f.x(a.x); a.y=f.y(a.y); a.z=f.z(a.z); }

// cross product
function RᵌᕁRᵌ(a,b) { 
		var ax = a.x;
		var ay = a.y;
		var az = a.z;
		var bx = b.x;
		var by = b.y;
		var bz = b.z;
		return uːᕮRᵌ(
			ay*bz - by*az,
			bx*az - ax*bz,
			ax*by - bx*ay
		);
	};
// in-place cross product
function RᵌᕁꘌRᵌ(u,v) { 
	var u1 = u.x;
	var u2 = u.y;
	var u3 = u.z;
	var v1 = v.x;
	var v2 = v.y;
	var v3 = v.z;
	u.x = u2*v3 - v2*u3,
	u.y = v1*u3 - u1*v3,
	u.z = u1*v2 - v1*u2
};
// functional cross product
function FᵌᕁRᵌ(f,a) { 
	var ax = a.x;
	var ay = a.y;
	var az = a.z;
	var fx = f.x;
	var fy = f.y;
	var fz = f.z;
	return uːᕮRᵌ(
		fz(ay) - fy(az),
		fx(az) - fz(ax),
		fy(ax) - fx(ay)
	);
};

ːᕮRᵌᕽᵌ = AːAᕮRᵌᕽᵌ = ᵌᕽᵌ = RᵌㅡᐳRᵌ = function(	xx, xy, xz,
									yx, yy, yz,
									zx, zy, zz	) {
	return [
		xx, xy, xz,
		yx, yy, yz,
		zx, zy, zz
	];
};
var Iᵌ= ᵌᕽᵌ(	1, 0, 0,
			0, 1, 0,
			0, 0, 1 );
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᵌᕽᵌᐧRᵌ (A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2];
	var yx = A[ 3], yy = A[ 4], yz = A[ 5];
	var zx = A[ 6], zy = A[ 7], zz = A[ 8];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy) + (z * xz);
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy) + (z * yz);
	//Multiply the point against each part of the 3rd column, then add together
	var resultZ = (x * zx) + (y * zy) + (z * zz);

	return ꜛ(resultX, resultY, resultZ);
}
function RᵌᕽᵌᐧRⁿ (A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2];
	var yx = A[ 3], yy = A[ 4], yz = A[ 5];
	var zx = A[ 6], zy = A[ 7], zz = A[ 8];

	//Now set some simple names for the point
	var x = bꜛ[0];
	var y = bꜛ[1];
	var z = bꜛ[2];

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy) + (z * xz);
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy) + (z * yz);
	//Multiply the point against each part of the 3rd column, then add together
	var resultZ = (x * zx) + (y * zy) + (z * zz);

	return [resultX, resultY, resultZ];
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᵌᐧꘌRᵌᕽᵌ (bꜛ, A) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2];
	var yx = A[ 3], yy = A[ 4], yz = A[ 5];
	var zx = A[ 6], zy = A[ 7], zz = A[ 8];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;

	//Multiply the point against each part of the 1st column, then add together
	bꜛ.x = (x * xx) + (y * xy) + (z * xz);
	//Multiply the point against each part of the 2nd column, then add together
	bꜛ.y = (x * yx) + (y * yy) + (z * yz);
	//Multiply the point against each part of the 3rd column, then add together
	bꜛ.z = (x * zx) + (y * zy) + (z * zz);
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᵌᕽᵌᐧRᵌᕽᵌ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[3], B[6]];
  var column1 = [B[1], B[4], B[7]];
  var column2 = [B[2], B[5], B[8]];
  
  // Multiply each column by the matrix
  var result0 = RᵌᕽᵌᐧRⁿ( A, column0 );
  var result1 = RᵌᕽᵌᐧRⁿ( A, column1 );
  var result2 = RᵌᕽᵌᐧRⁿ( A, column2 );
  
  // Turn the result columns back into a single matrix
  return [
    result0[0], result1[0], result2[0],
    result0[1], result1[1], result2[1],
    result0[2], result1[2], result2[2]
  ]
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᵌᕽᵌᐧꘌRᵌᕽᵌ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[3], B[6]];
  var column1 = [B[1], B[4], B[7]];
  var column2 = [B[2], B[5], B[8]];
  
  // Multiply each column by the matrix
  var result0 = RᵌᕽᵌᐧRⁿ( A, column0 );
  var result1 = RᵌᕽᵌᐧRⁿ( A, column1 );
  var result2 = RᵌᕽᵌᐧRⁿ( A, column2 );
  
  // Turn the result columns back into a single matrix
    A[0]= result0[0]; A[1]= result1[0]; A[2]= result2[0];
    A[3]= result0[1]; A[4]= result1[1]; A[5]= result2[1];
    A[6]= result0[2]; A[7]= result1[2]; A[8]= result2[2];
}
function Rᵌᕽᵌᐪ (A) {
	return [A[0], A[3], A[6], 
			A[1], A[4], A[7], 
			A[2], A[5], A[8]];
}
function Rᵌᕽᵌᐪꘌ(A) {
	var a = A[ 0], b = A[ 1], c = A[ 2]; 
	var d = A[ 3], e = A[ 4], f = A[ 5]; 
	var g = A[ 6], h = A[ 7], i = A[ 8]; 
    A[0]=a; A[1]=d; A[2]=g;
    A[3]=b; A[4]=e; A[5]=h;
    A[6]=c; A[7]=f; A[8]=i;
}
function ǀRᵌᕽᵌǀ(A) {
	var a = A[ 0], b = A[ 1], c = A[ 2]; 
	var d = A[ 3], e = A[ 4], f = A[ 5]; 
	var g = A[ 6], h = A[ 7], i = A[ 8]; 

	return ᐩ(
	 		ᐧ( a,	ǀRᒾᕽᒾǀ([	e,f,
							h,i	])),
		ᐨ(	ᐧ( b,	ǀRᒾᕽᒾǀ([	d,f,
							g,i	]))),
			ᐧ( c,	ǀRᒾᕽᒾǀ([	d,e,
							g,h	]))
	);

}
	
// ---------------------------------Rᶣ---------------------------------
function ːᕮRᶣ		(x,y,z,w) 	{ return	{	x:x,	y:y, 	z:z, 	w:w 	}; }
aꜛꓽaꜛᕮR4 = xᐧiꜛᐩyᐧjꜛᐩzᐧkꜛᐩwᐧlꜛ	= ːᕮRᶣ;
aꜛᕮRᶣ = ᕮRᶣ = function(aꜛ) {
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z !== void 0 && aꜛ.w === void 0;
}
	
// 	(R,Rᶣ)->Rᶣ OPERATIONS
function RᐧRᶣ		(a,b) 	{ return ːᕮRᶣ(	a * b.x,	a * b.y,	a * b.z, 	a * b.w 	); }
	
// 	(Rᶣ,R)->Rᶣ OPERATIONS
function ᐨRᶣ			(a) 	{ return ːᕮRᶣ(	-a.x,		-a.y,		-a.z, 		-a.w 		); }
function RᶣᐩR		(a,b) 	{ return ːᕮRᶣ(	a.x + b,	a.y + b,	a.z + b, 	a.w + b 	); }
function RᶣᐨR		(a,b) 	{ return ːᕮRᶣ(	a.x - b,	a.y - b,	a.z - b, 	a.w - b 	); }
function RᶣᐧR		(a,b) 	{ return ːᕮRᶣ(	a.x * b,	a.y * b,	a.z * b, 	a.w * b 	); }
function Rᶣ〳R		(a,b) 	{ return ːᕮRᶣ(	a.x / b,	a.y / b,	a.z / b, 	a.w / b 	); }
function ᐨꘌRᶣ		(a,b) 	{ return 		a.x *=-1;	a.y *=-1;	a.z *=-1;	a.w *=-1;	}
function RᶣᐩꘌR		(a,b) 	{ return 		a.x += b;	a.y += b;	a.z += b;	a.w += b;	}
function RᶣᐨꘌR		(a,b) 	{ return 		a.x -= b;	a.y -= b;	a.z -= b;	a.w -= b;	}
function RᶣᐧꘌR		(a,b) 	{ return 		a.x *= b;	a.y *= b;	a.z *= b;	a.w *= b;	}
function Rᶣ〳ꘌR		(a,b) 	{ return 		a.x /= b;	a.y /= b;	a.z /= b;	a.w /= b;	}
	
// 	(Rᶣ,Rᶣ)->Rᶣ OPERATIONS
function RᶣᐩRᶣ		(a,b) 	{ return ːᕮRᶣ(	a.x +  b.x,	a.y +  b.y,	a.z +  b.z,	a.w +  b.w 	); }
function RᶣᐨRᶣ		(a,b) 	{ return ːᕮRᶣ(	a.x -  b.x,	a.y -  b.y,	a.z -  b.z,	a.w -  b.w 	); }
function RᶣᐤRᶣ		(a,b) 	{ return ːᕮRᶣ(	a.x *  b.x,	a.y *  b.y,	a.z *  b.z,	a.w *  b.w 	); }
function RᶣᐩꘌRᶣ		(a,b) 	{ return 		a.x += b.x;	a.y += b.y;	a.z += b.z;	a.w += b.w;	}
function RᶣᐨꘌRᶣ		(a,b) 	{ return 		a.x -= b.x;	a.y -= b.y;	a.z -= b.z;	a.w -= b.w;	}
function RᶣᐤꘌRᶣ		(a,b) 	{ return 		a.x *= b.x;	a.y *= b.y;	a.z *= b.z;	a.w *= b.w;	}
function RᶣꘌRᶣ		(a,b) 	{ return 		a.x  = b.x;	a.y  = b.y;	a.z  = b.z;	a.w  = b.w;	}
function ꘌRᶣ		(a,b) 	{ return ːᕮRᶣ(	a.x,		a.y,		a.z,		a.w 		); }
	
// 	MISCELLANEOUS Rᶣ OPERATIONS
function RᶣꘌꘌRᶣ		(a,b) 	{ return 		a.x == b.x&&a.y == b.y&&a.z == b.z&&a.w == b.w 	 ; }
function RᶣǃꘌRᶣ		(a,b) 	{ return 		a.x != b.x||a.y != b.y||a.z != b.z||a.w != b.w 	 ; }
function RᶣᐧRᶣ		(a,b) 	{ return 		a.x * b.x +	a.y * b.y +	a.z * b.z + a.w * b.w; 	}
function ǀRᶣǀ		(a)		{ return  ᛇ(	a.x * a.x +	a.y * a.y +	a.z * a.z + a.w * a.w	); }
function Rᶣˆ		(a)		{ return 		Rᶣ〳R 	(a, ǀRᶣǀ(a));		}	
function Rᶣˆꘌ		(a)		{ return 		Rᶣ〳ꘌR 	(a, ǀRᶣǀ(a));		}	

// 	FUNCTIONAL Rᶣ OPERATIONS
function FᶣᐧRᶣ	(f,a) 	{ return 		f.x(a.x) +	f.y(a.y) +	f.z(a.z) + 	f.w(a.w); 	}
function FᐧRᶣ	(f,a) 	{ return ːᕮRᶣ(	f(a.x),	 	f(a.y),  	f(a.z),  	f(a.w)		); }
function FᶣᐤRᶣ	(f,a) 	{ return ːᕮRᶣ(	f.x(a.x),	f.y(a.y),  	f.z(a.z),  	f.w(a.w)	); }
function RᶣᐧꘌF	(f,a) 	{ 				a.x=f(a.x);	a.y=f(a.y);	a.z=f(a.z);	a.w=f(a.w);	}
function RᶣᐤꘌFᶣ	(f,a)	{				a.x=f.x(a.x); a.y=f.y(a.y); a.z=f.z(a.z); a.w=f.w(a.w); }


ːᕮRᶣᕽᶣ = AːAᕮRᶣᕽᶣ = ᶣᕽᶣ = RᶣㅡᐳRᶣ = function(	xx, xy, xz, xw,
												yx, yy, yz, yw,
												zx, zy, zz,	zw,
												wx, wy, wz, ww ) {
	return [
		xx, xy, xz, xw,
		yx, yy, yz, yw,
		zx, zy, zz,	zw,
		wx, wy, wz, ww
	];
}
var Iᶣ= ːᕮRᶣᕽᶣ(	1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1 );
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᶣᕽᶣᐧRᶣ(A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2], xw = A[ 3];
	var yx = A[ 4], yy = A[ 5], yz = A[ 6], yw = A[ 7];
	var zx = A[ 8], zy = A[ 9], zz = A[10], zw = A[11];
	var wx = A[12], wy = A[13], wz = A[14], ww = A[15];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;
	var w = bꜛ.w;

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy) + (z * xz) + (w * xw);
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy) + (z * yz) + (w * yw);
	//Multiply the point against each part of the 3rd column, then add together
	var resultZ = (x * zx) + (y * zy) + (z * zz) + (w * zw);
	//Multiply the point against each part of the 4th column, then add together
	var resultW = (x * wx) + (y * wy) + (z * wz) + (w * ww);

	return ꜛ(resultX, resultY, resultZ, resultW);
}
function RᶣᕽᶣᐧRⁿ(A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2], xw = A[ 3];
	var yx = A[ 4], yy = A[ 5], yz = A[ 6], yw = A[ 7];
	var zx = A[ 8], zy = A[ 9], zz = A[10], zw = A[11];
	var wx = A[12], wy = A[13], wz = A[14], ww = A[15];

	//Now set some simple names for the point
	var x = bꜛ[0];
	var y = bꜛ[1];
	var z = bꜛ[2];
	var w = bꜛ[3];

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy) + (z * xz) + (w * xw);
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy) + (z * yz) + (w * yw);
	//Multiply the point against each part of the 3rd column, then add together
	var resultZ = (x * zx) + (y * zy) + (z * zz) + (w * zw);
	//Multiply the point against each part of the 4th column, then add together
	var resultW = (x * wx) + (y * wy) + (z * wz) + (w * ww);

	return [resultX, resultY, resultZ, resultW];
}
// Special case for 3d graphics processing
function RᶣᕽᶣᐧRᵌ(A, bꜛ) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2], xw = A[ 3];
	var yx = A[ 4], yy = A[ 5], yz = A[ 6], yw = A[ 7];
	var zx = A[ 8], zy = A[ 9], zz = A[10], zw = A[11];
	var wx = A[12], wy = A[13], wz = A[14], ww = A[15];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;
	var w = 1;

	//Multiply the point against each part of the 1st column, then add together
	var resultX = (x * xx) + (y * xy) + (z * xz) + (w * xw);
	//Multiply the point against each part of the 2nd column, then add together
	var resultY = (x * yx) + (y * yy) + (z * yz) + (w * yw);
	//Multiply the point against each part of the 3rd column, then add together
	var resultZ = (x * zx) + (y * zy) + (z * zz) + (w * zw);
	//Multiply the point against each part of the 4th column, then add together
	//var resultW = (x * xw) + (y * yw) + (z * zw) + (w * yy);

	return [resultX, resultY, resultZ];
}
// in-place matrix product
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᶣᐧꘌRᶣᕽᶣ (bꜛ, A) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2], xw = A[ 3];
	var yx = A[ 4], yy = A[ 5], yz = A[ 6], yw = A[ 7];
	var zx = A[ 8], zy = A[ 9], zz = A[10], zw = A[11];
	var wx = A[12], wy = A[13], wz = A[14], ww = A[15];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;
	var w = bꜛ.w;

	//Multiply the point against each part of the 1st column, then add together
	bꜛ.x = (x * xx) + (y * xy) + (z * xz) + (w * xw);
	//Multiply the point against each part of the 2nd column, then add together
	bꜛ.y = (x * yx) + (y * yy) + (z * yz) + (w * yw);
	//Multiply the point against each part of the 3rd column, then add together
	bꜛ.z = (x * zx) + (y * zy) + (z * zz) + (w * zw);
	//Multiply the point against each part of the 4th column, then add together
	bꜛ.w = (x * wx) + (y * wy) + (z * wz) + (w * ww);
}
// Special case for 3d graphics processing
function RᵌᐧꘌRᶣᕽᶣ (bꜛ, A) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var xx = A[ 0], xy = A[ 1], xz = A[ 2], xw = A[ 3];
	var yx = A[ 4], yy = A[ 5], yz = A[ 6], yw = A[ 7];
	var zx = A[ 8], zy = A[ 9], zz = A[10], zw = A[11];
	var wx = A[12], wy = A[13], wz = A[14], ww = A[15];

	//Now set some simple names for the point
	var x = bꜛ.x;
	var y = bꜛ.y;
	var z = bꜛ.z;
	var w = 1;

	//Multiply the point against each part of the 1st column, then add together
	bꜛ.x = (x * xx) + (y * xy) + (z * xz) + (w * xw);
	//Multiply the point against each part of the 2nd column, then add together
	bꜛ.y = (x * yx) + (y * yy) + (z * yz) + (w * yw);
	//Multiply the point against each part of the 3rd column, then add together
	bꜛ.z = (x * zx) + (y * zy) + (z * zz) + (w * zw);
	//Multiply the point against each part of the 4th column, then add together
	//bꜛ.w = (x * xw) + (y * yw) + (z * zw) + (w * yy);
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᶣᕽᶣᐧRᶣᕽᶣ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[4], B[8], B[12]];
  var column1 = [B[1], B[5], B[9], B[13]];
  var column2 = [B[2], B[6], B[10], B[14]];
  var column3 = [B[3], B[7], B[11], B[15]];
  
  // Multiply each column by the matrix
  var result0 = RᶣᕽᶣᐧRⁿ( A, column0 );
  var result1 = RᶣᕽᶣᐧRⁿ( A, column1 );
  var result2 = RᶣᕽᶣᐧRⁿ( A, column2 );
  var result3 = RᶣᕽᶣᐧRⁿ( A, column3 );
  
  // Turn the result columns back into a single matrix
  return [
    result0[0], result1[0], result2[0], result3[0],
    result0[1], result1[1], result2[1], result3[1],
    result0[2], result1[2], result2[2], result3[2],
    result0[3], result1[3], result2[3], result3[3]
  ]
}
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function RᶣᕽᶣᐧꘌRᶣᕽᶣ(A, B) {
  // Slice the second matrix up into columns
  var column0 = [B[0], B[4], B[8], B[12]];
  var column1 = [B[1], B[5], B[9], B[13]];
  var column2 = [B[2], B[6], B[10], B[14]];
  var column3 = [B[3], B[7], B[11], B[15]];
  
  // Multiply each column by the matrix
  var result0 = RᶣᕽᶣᐧRⁿ( A, column0 );
  var result1 = RᶣᕽᶣᐧRⁿ( A, column1 );
  var result2 = RᶣᕽᶣᐧRⁿ( A, column2 );
  var result3 = RᶣᕽᶣᐧRⁿ( A, column3 );
  
  // Turn the result columns back into a single matrix
    A[0]= result0[0]; 	A[1]= result1[0]; 	A[2]= result2[0]; 	A[3]= result3[0];
    A[4]= result0[1]; 	A[5]= result1[1]; 	A[6]= result2[1]; 	A[7]= result3[1];
    A[8]= result0[2]; 	A[9]= result1[2]; 	A[10]= result2[2]; 	A[11]= result3[2];
    A[12]= result0[3]; 	A[13]= result1[3];	A[14]= result2[3]; 	A[15]= result3[3];
}
function Rᶣᕽᶣᐪ (A) {
	return [A[0], A[4], A[8],  A[12],
			A[1], A[5], A[9],  A[13],
			A[2], A[6], A[10], A[14],
			A[3], A[7], A[11], A[15]];
}
function Rᶣᕽᶣᐪꘌ(A) {
	var a = A[ 0], b = A[ 1], c = A[ 2], d = A[ 3];
	var e = A[ 4], f = A[ 5], g = A[ 6], h = A[ 7];
	var i = A[ 8], j = A[ 9], k = A[10], l = A[11];
	var m = A[12], n = A[13], o = A[14], p = A[15];
    A[0]= result0[0]; 	A[1]= result1[0]; 	A[2]= result2[0]; 	A[3]= result3[0];
    A[4]= result0[1]; 	A[5]= result1[1]; 	A[6]= result2[1]; 	A[7]= result3[1];
    A[8]= result0[2]; 	A[9]= result1[2]; 	A[10]= result2[2]; 	A[11]= result3[2];
    A[12]= result0[3]; 	A[13]= result1[3];	A[14]= result2[3]; 	A[15]= result3[3];
}
function ǀRᶣᕽᶣǀ(A) {
	var a = A[ 0], b = A[ 1], c = A[ 2], d = A[ 3];
	var e = A[ 4], f = A[ 5], g = A[ 6], h = A[ 7];
	var i = A[ 8], j = A[ 9], k = A[10], l = A[11];
	var m = A[12], n = A[13], o = A[14], p = A[15];

	return ᐩ(

	 		ᐧ( a,	ǀRᵌᕽᵌǀ([	f,g,h,
							j,k,l,
							n,o,p	])),
		ᐨ(	ᐧ( b,	ǀRᵌᕽᵌǀ([	e,g,h,
							i,k,l,
							m,o,p	]))),
			ᐧ( c,	ǀRᵌᕽᵌǀ([	e,f,h,
							i,j,l,
							m,n,p	])),
		ᐨ(	ᐧ( d,	ǀRᵌᕽᵌǀ([	e,f,g,
							i,j,k,
							m,n,o	])))
	);

}

// -------------------------------- Rⁿ --------------------------------
function ːᕮRⁿ	(a) 	{ 
	if (a.length == 2) {
		return ːᕮRᒾ(a[0], a[1]);
	} else if (a.length == 3) {
		return ːᕮRᵌ(a[0], a[1], a[2]);
	} else if (a.length == 4) {
		return ːᕮRᶣ(a[0], a[1], a[2], a[3]);
	} else if (a.length > 4) {
		return a;
	}
}
aꜛːaꜛᕮRⁿ = ːᕮRⁿ;

// VECTORS OF SIZE N ------------------------------------------
// 	(R,Rⁿ)->Rⁿ OPERATIONS
function RᐧRⁿ	(a,b) 	{ var result=[];	for(var i=0, li=b.length; i<li; i++) { result.push(	a * b[i]) }		return result;	}

// 	(Rⁿ,R)->Rⁿ OPERATIONS
function ᐨRⁿ		(a) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push( -a[i] ) }		return result;	}
function RⁿᐩR	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push( a[i] + b) }		return result;	}
function RⁿᐨR	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push( a[i] - b) }		return result;	}
function RⁿᐧR	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push( a[i] * b) }		return result;	}
function Rⁿ〳R	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push( a[i] / b) }		return result;	}
function ᐨꘌRⁿ	(a) 	{ 					for(var i=0, li=a.length; i<li; i++) { a[i] *=-1;}	}
function RⁿᐩꘌR	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) { a[i] += b }	}
function RⁿᐨꘌR	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) { a[i] -= b }	}
function RⁿᐧꘌR	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) { a[i] *= b }	}
function Rⁿ〳ꘌR	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) { a[i] /= b }	}

// 	(Rⁿ,Rⁿ)->Rⁿ OPERATIONS
function RⁿᐩRⁿ	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push(	a[i] + b[i]) }	return result;	}
function RⁿᐨRⁿ	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push(	a[i] - b[i]) }	return result;	}
function RⁿᐤRⁿ	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push(	a[i] * b[i]) }	return result;	}
function RⁿᐩꘌRⁿ	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) {				a[i] += b[i]; }	}
function RⁿᐨꘌRⁿ	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) {				a[i] -= b[i]; }	}
function RⁿᐤꘌRⁿ	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) {				a[i] *= b[i]; }	}
function RⁿꘌRⁿ	(a,b) 	{ 					for(var i=0, li=a.length; i<li; i++) {				a[i]  = b[i]; }	}
function ꘌRⁿ	(a,b) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) { result.push(	a[i] ) }		return result;	}

// 	MISCELLANEOUS Rⁿ OPERATIONS
function RⁿꘌꘌRⁿ	(a,b) 	{ 					for(var i=0,la=a.length,lb=b.length; i<la||i<lb; i++) {if(a[i]!=b[i]) return false;} return true; }
function RⁿǃꘌRⁿ	(a,b) 	{ 					for(var i=0,la=a.length,lb=b.length; i<la||i<lb; i++) {if(a[i]!=b[i]) return true;} return false; }
function RⁿᐧRⁿ	(a,b) 	{ var result=0; 	for(var i=0, li=a.length; i<li; i++) {  result += a[i] * b[i] }		return   result;	}
function ǀRⁿǀ	(a)		{ var result=0; 	for(var i=0, li=a.length; i<li; i++) {	result += a[i] * a[i] }		return ᛇ(result);	}
function Rⁿˆ	(a)		{ return Rⁿ〳R (a, ǀRⁿǀ(a));		}	
function Rⁿˆꘌ	(a)		{ return Rⁿ〳ꘌR (a, ǀRⁿǀ(a));	}	

// 	FUNCTIONAL Rⁿ OPERATIONS
function FⁿᐧRⁿ(f,a) 	{ var result=0;		for(var i=0, li=a.length; i<li; i++) {	result += 	 f[i](a[i])	}	return result;	}
function FᐧRⁿ(f,a) 	{ var result=[];	for(var i=0, li=a.length; i<li; i++) {	result.push( f(a[i]) )	}	return result;	}
function FⁿᐤRⁿ(f,a) 	{ return a.map(f);	}
function RⁿᐧꘌF(a,f) 	{ 					for(var i=0, li=a.length; i<li; i++) {	a[i] = f(a[i]);		} 						}
function RⁿᐤꘌFⁿ(a,f)	{ 					for(var i=0, li=a.length; i<li; i++) {	a[i] = f[i](a[i]);	}						}

// 	(Rⁿ,Rⁿ)->R OPERATIONS
function RᒾᐧRⁿ	(a,b) 	{ return 			a.x * b[0]	+	a.y * b[1]									 	}
function RᵌᐧRⁿ	(a,b) 	{ return 			a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]					 	}
function RᶣᐧRⁿ	(a,b) 	{ return 			a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]	+ 	a.w * b[3]; 	}
function RⁿᐧRᒾ	(b,a) 	{ return 			a.x * b[0]	+	a.y * b[1]									 	}
function RⁿᐧRᵌ	(b,a) 	{ return 			a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]					 	}
function RⁿᐧRᶣ	(b,a) 	{ return 			a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]	+ 	a.w * b[3]; 	}


// MATRICES OF SIZE NxN ------------------------------------------
ːᕮRⁿᕽⁿ = AːAᕮRⁿᕽⁿ = ⁿᕽⁿ = RⁿㅡᐳRⁿ = function(n,m) {	
	var weights = [];
	for (var i = 0; i < n; i++) {
		weights.push([]);
		for (var j = 0; j < m; j++) {
			weights[i].push(0);
		}
	}
	return weights;
}
function Iⁿ (n){
	var result = [];
	for (var i = 0; i < n; i++) {
		var row = new Array(len).fill(0);
		row[i] = 1;
		result.push(row);
	}
	return result;
}
// 	(R,Rⁿᕽⁿ)->Rⁿᕽⁿ OPERATIONS
function RᐧRⁿᕽⁿ	(a,B)	{ var result=[];	for(var i=0, li=B.length; i<li; i++) { result.push(	RᐧRⁿ		(a, B[i]) ); }		return result;	}

// 	(Rⁿᕽⁿ,R)->Rⁿᕽⁿ OPERATIONS
function ᐨRⁿᕽⁿ	(A)		{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	ᐨRⁿ		(A[i]) ); }		return result;	}
function RⁿᕽⁿᐩR	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐩR		(A[i], b) ); }	return result;	}
function RⁿᕽⁿᐨR	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐨR		(A[i], b) ); }	return result;	}
function RⁿᕽⁿᐧR	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐧR		(A[i], b) ); }	return result;	}
function Rⁿᕽⁿ〳R	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	Rⁿ〳R	(A[i],b) ); }	return result;	}
function ᐨꘌRⁿᕽⁿ	(A)		{ 					for(var i=0, li=A.length; i<li; i++) { 				ᐨꘌRⁿ		(A[i]);		}					}
function RⁿᕽⁿᐩꘌR	(A,b)	{ 					for(var i=0, li=A.length; i<li; i++) { 				RⁿᐩꘌR	(A[i], b);	}					}
function RⁿᕽⁿᐨꘌR	(A,b)	{ 					for(var i=0, li=A.length; i<li; i++) { 				RⁿᐨꘌR	(A[i], b);	}					}
function RⁿᕽⁿᐧꘌR	(A,b)	{ 					for(var i=0, li=A.length; i<li; i++) { 				RⁿᐧꘌR	(A[i], b);	}					}
function Rⁿᕽⁿ〳ꘌR(A,b)	{ 					for(var i=0, li=A.length; i<li; i++) { 				Rⁿ〳ꘌR	(A[i], b);}					}

// 	(Rⁿᕽⁿ,Rⁿ)->Rⁿ OPERATIONS
function RⁿᕽⁿᐧRᒾ	(A,b)	{ return  ːᕮRᒾ(		RᒾᐧRⁿ(b,A[0]), 	RᒾᐧRⁿ(b,A[1]) 									); }
function RⁿᕽⁿᐧRᵌ	(A,b)	{ return  ːᕮRᵌ(		RᵌᐧRⁿ(b,A[0]), 	RᵌᐧRⁿ(b,A[1]), 	RᵌᐧRⁿ(b,A[2])					); }
function RⁿᕽⁿᐧRᶣ	(A,b)	{ return  ːᕮRᶣ(		RᶣᐧRⁿ(b,A[0]), 	RᶣᐧRⁿ(b,A[1]), 	RᶣᐧRⁿ(b,A[2]), 	RᶣᐧRⁿ(b,A[3])	); }
function RⁿᕽⁿᐧRⁿ	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push( RⁿᐧRⁿ(b,A[i]) ) }	return result;	}
function RⁿᐧꘌRⁿᕽⁿ(a,B)	{ var result=[];	for(var i=0, li=B.length; i<li; i++) { result.push( RⁿᐧRⁿ(a,B[i]) ) }	ꘌ(a,result);	}

// 	(Rⁿᕽⁿ,Rⁿᕽⁿ)->Rⁿᕽⁿ OPERATIONS
function RⁿᕽⁿᐩRⁿᕽⁿ(A,B)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐩRⁿ	(A[i],B[i]) ); }	return result;	}
function RⁿᕽⁿᐨRⁿᕽⁿ(A,B)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐨRⁿ	(A[i],B[i]) ); }	return result;	}
function RⁿᕽⁿᐤRⁿᕽⁿ(A,B)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	RⁿᐤRⁿ	(A[i],B[i]) ); }	return result;	}
function RⁿᕽⁿᐩꘌRⁿᕽⁿ(A,B)	{					for(var i=0, li=A.length; i<li; i++) {				RⁿᐩꘌRⁿ	(A[i],B[i]); }						}
function RⁿᕽⁿᐨꘌRⁿᕽⁿ(A,B)	{					for(var i=0, li=A.length; i<li; i++) {				RⁿᐨꘌRⁿ	(A[i],B[i]); }						}
function RⁿᕽⁿᐤꘌRⁿᕽⁿ(A,B)	{					for(var i=0, li=A.length; i<li; i++) {				RⁿᐤꘌRⁿ	(A[i],B[i]); }						}
function RⁿᕽⁿꘌRⁿᕽⁿ(A,B)	{					for(var i=0, li=A.length; i<li; i++) {				RⁿꘌRⁿ	(A[i],B[i]); }						}
function ꘌRⁿᕽⁿ(A,B)		{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push(	ꘌRⁿ		(A[i]) ); }			return result;	}
function RⁿᕽⁿꘌꘌRⁿᕽⁿ(A,B){ 					for(var i=0,la=A.length,lb=B.length; i<la||i<lb; i++) { if(!RⁿꘌꘌRⁿ(A[i],B[i])) return false; }	return true;	}
function RⁿᕽⁿǃꘌRⁿᕽⁿ(A,B){ 					for(var i=0,la=A.length,lb=B.length; i<la||i<lb; i++) { if(!RⁿǃꘌRⁿ(A[i],B[i])) return true; }	return false;	}
function RⁿᕽⁿᐧRⁿᕽⁿ (A,B)  {
			var Bᐪ = Rⁿᕽⁿᐪ(B), result=[];	for(var i=0, li=Bᐪ.length; i<li; i++) { result.push( RⁿᕽⁿᐧRⁿ	(A, Bᐪ[i]) ); }		return Rⁿᕽⁿᐪ(result);	}

// 	FUNCTIONAL Rⁿᕽⁿ OPERATIONS
function FᐧRⁿᕽⁿ	(f,B)	{ var result=[];	for(var i=0, li=B.length; i<li; i++) { result.push(	FᐧRⁿ (F, B[i]) ); }			return result;	}
// function FⁿᕽⁿᐤRⁿᕽⁿ(f,a) 	{  } // WIP
function RⁿᕽⁿᐧꘌF(A,f) 	{ 					for(var i=0, li=A.length; i<li; i++) {	RⁿᐧꘌF (A[i], f);		} 						}
// function RⁿᕽⁿᐤꘌFⁿ(a,f)	{  } // WIP


function Rⁿᕽⁿᐪ (A) {
	var result=[];
	for (var i = 0; i < A[0].length; i++) {
		result.push([]);
	}
	for (var i=0, li=A.length; i<li; i++) {	
		for (var j = 0; j < A[i].length; j++) {
			result[j][i] = A[i][j];
		}
	}
	return result;
}
function Rⁿᕽⁿᐨᑊ (A) {
	return;
}








function Rᵢꘌ (f_i) {
	return {ᵢꘌ: f_i};
}
Iⁿ = Rᵢꘌ(function(i) {
	return Rᵢꘌ(function(j) {
		return j==i? 1:0;
	});
});
iꜛ = Iⁿ.ᵢꘌ(0);
jꜛ = Iⁿ.ᵢꘌ(1);
kꜛ = Iⁿ.ᵢꘌ(2);
lꜛ = Iⁿ.ᵢꘌ(3);


// VECTORS OF ARBITRARY SIZE (NOTE: slow but elegant)
// 	(Rᵢ,Rⁿ)->Rᵢ OPERATIONS
function RᐩRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a + b.ᵢꘌ(i); })	}
function RᐨRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a - b.ᵢꘌ(i); })	}
function RᐧRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a * b.ᵢꘌ(i); })	}
function R〳Rᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a / b.ᵢꘌ(i); })	}

// 	(Rᵢ,R)->Rᵢ OPERATIONS
function ᐨRᵢ		(b) 	{ return Rᵢꘌ(function(i){ return -b.ᵢꘌ(i); })		}
function RᵢᐩR	(b,a) 	{ return Rᵢꘌ(function(i){ return b.ᵢꘌ(i) + a; })	}
function RᵢᐨR	(b,a) 	{ return Rᵢꘌ(function(i){ return b.ᵢꘌ(i) - a; })	}
function RᵢᐧR	(b,a) 	{ return Rᵢꘌ(function(i){ return b.ᵢꘌ(i) * a; })	}
function Rᵢ〳R	(b,a) 	{ return Rᵢꘌ(function(i){ return b.ᵢꘌ(i) / a; })	}

function RᵢᐩRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a.ᵢꘌ(i) + b.ᵢꘌ(i); })	}
function RᵢᐨRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a.ᵢꘌ(i) - b.ᵢꘌ(i); })	}
function RᵢᐤRᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a.ᵢꘌ(i) * b.ᵢꘌ(i); })	}
function Rᵢ〳Rᵢ	(a,b) 	{ return Rᵢꘌ(function(i){ return a.ᵢꘌ(i) / b.ᵢꘌ(i); })	}

// 	(Rᵢ,Rⁿ)->Rⁿ OPERATIONS
function RᵢᐩRⁿ	(a,b) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RᵢᐨRⁿ	(a,b) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RᵢᐤRⁿ	(a,b) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RᵢᐧRⁿ	(a,b) 	{result = 0;	for (var i=0, li=b.length; i<li; i++) {	result += 	a.ᵢꘌ(i)+b[i] }	return result;	}

function RⁿᐩRᵢ	(b,a) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RⁿᐨRᵢ	(b,a) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RⁿᐤRᵢ	(b,a) 	{result = [];	for (var i=0, li=b.length; i<li; i++) {	result.push(a.ᵢꘌ(i)+b[i]) }	return result;	}
function RⁿꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	b[i] = a.ᵢꘌ(i) }							}
function RⁿᐩꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	b[i] = (a.ᵢꘌ(i)+b[i]) }						}
function RⁿᐨꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	b[i] = (a.ᵢꘌ(i)+b[i]) }						}
function RⁿᐤꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	b[i] = (a.ᵢꘌ(i)+b[i]) }						}
function RⁿᐧRᵢ	(b,a) 	{result = 0;	for (var i=0, li=b.length; i<li; i++) {	result += 	a.ᵢꘌ(i)+b[i] }	return result;	}
function RⁿꘌꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	if(a.ᵢꘌ(i) !== b[i]) return false; } return true; }
function RⁿǃꘌRᵢ	(b,a) 	{				for (var i=0, li=b.length; i<li; i++) {	if(a.ᵢꘌ(i) !== b[i]) return true; } return false; }

// 	(Rᵢ,Rᶣ)->Rᶣ OPERATIONS
function RᵢᐩRᶣ	(a,b) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y,	a.ᵢꘌ(2) + b.z,	a.ᵢꘌ(3) + b.w 	); }
function RᵢᐨRᶣ	(a,b) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y,	a.ᵢꘌ(2) - b.z,	a.ᵢꘌ(3) - b.w 	); }
function RᵢᐤRᶣ	(a,b) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y,	a.ᵢꘌ(2) * b.z,	a.ᵢꘌ(3) * b.w 	); }
function RᵢᐧRᶣ	(a,b) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y+	a.ᵢꘌ(2) * b.z+	a.ᵢꘌ(3) * b.w 	 ; }

function RᶣᐩRᵢ	(b,a) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y,	a.ᵢꘌ(2) + b.z,	a.ᵢꘌ(3) + b.w 	); }
function RᶣᐨRᵢ	(b,a) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y,	a.ᵢꘌ(2) - b.z,	a.ᵢꘌ(3) - b.w 	); }
function RᶣᐤRᵢ	(b,a) 	{ return ːᕮRᶣ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y,	a.ᵢꘌ(2) * b.z,	a.ᵢꘌ(3) * b.w 	); }
function RᶣꘌRᵢ	(b,a) 	{ 		 		b.x  = a.ᵢꘌ(0);	b.y  = a.ᵢꘌ(1);	b.z  = a.ᵢꘌ(2);	b.w  = a.ᵢꘌ(3);    }
function RᶣᐩꘌRᵢ	(b,a) 	{ 		 		b.x += a.ᵢꘌ(0);	b.y += a.ᵢꘌ(1);	b.z += a.ᵢꘌ(2);	b.w += a.ᵢꘌ(3);    }
function RᶣᐨꘌRᵢ	(b,a) 	{ 		 		b.x -= a.ᵢꘌ(0);	b.y -= a.ᵢꘌ(1);	b.z -= a.ᵢꘌ(2);	b.w -= a.ᵢꘌ(3);    }
function RᶣᐤꘌRᵢ	(b,a) 	{ 		 		b.x *= a.ᵢꘌ(0);	b.y *= a.ᵢꘌ(1);	b.z *= a.ᵢꘌ(2);	b.w *= a.ᵢꘌ(3);    }
function RᶣᐧRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y+	a.ᵢꘌ(2) * b.z+	a.ᵢꘌ(3) * b.w 	 ; }
function RᶣꘌꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)===b.x&& a.ᵢꘌ(1)===b.y&& a.ᵢꘌ(2)===b.z&& a.ᵢꘌ(3)===b.w 	 ; }
function RᶣǃꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)!==b.x|| a.ᵢꘌ(1)!==b.y|| a.ᵢꘌ(2)!==b.z|| a.ᵢꘌ(3)!==b.w 	 ; }

// 	(Rᵢ,Rᵌ)->Rᵌ OPERATIONS
function RᵢᐩRᵌ	(a,b) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y,	a.ᵢꘌ(2) + b.z	); }
function RᵢᐨRᵌ	(a,b) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y,	a.ᵢꘌ(2) - b.z	); }
function RᵢᐤRᵌ	(a,b) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y,	a.ᵢꘌ(2) * b.z	); }
function RᵢᐧRᵌ	(a,b) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y+	a.ᵢꘌ(2) * b.z	 ; }

function RᵌᐩRᵢ	(b,a) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y,	a.ᵢꘌ(2) + b.z	); }
function RᵌᐨRᵢ	(b,a) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y,	a.ᵢꘌ(2) - b.z	); }
function RᵌᐤRᵢ	(b,a) 	{ return ːᕮRᵌ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y,	a.ᵢꘌ(2) * b.z	); }
function RᵌꘌRᵢ	(b,a) 	{ 		 		b.x  = a.ᵢꘌ(0);	b.y  = a.ᵢꘌ(1);	b.z  = a.ᵢꘌ(2);	   }
function RᵌᐩꘌRᵢ	(b,a) 	{ 		 		b.x += a.ᵢꘌ(0);	b.y += a.ᵢꘌ(1);	b.z += a.ᵢꘌ(2);	   }
function RᵌᐨꘌRᵢ	(b,a) 	{ 		 		b.x -= a.ᵢꘌ(0);	b.y -= a.ᵢꘌ(1);	b.z -= a.ᵢꘌ(2);	   }
function RᵌᐤꘌRᵢ	(b,a) 	{ 		 		b.x *= a.ᵢꘌ(0);	b.y *= a.ᵢꘌ(1);	b.z *= a.ᵢꘌ(2);	   }
function RᵌᐧRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y+	a.ᵢꘌ(2) * b.z	 ; }
function RᵌꘌꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)===b.x&&	a.ᵢꘌ(1)===b.y&&	a.ᵢꘌ(2)===b.z	 ; }
function RᵌǃꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)!==b.x||	a.ᵢꘌ(1)!==b.y||	a.ᵢꘌ(2)!==b.z	 ; }

// 	(Rᵢ,Rᒾ)->Rᒾ OPERATIONS
function RᵢᐩRᒾ	(a,b) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y	); }
function RᵢᐨRᒾ	(a,b) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y	); }
function RᵢᐤRᒾ	(a,b) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y	); }
function RᵢᐧRᒾ	(a,b) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y	 ; }

function RᒾᐩRᵢ	(b,a) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) + b.x,	a.ᵢꘌ(1) + b.y	); }
function RᒾᐨRᵢ	(b,a) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) - b.x,	a.ᵢꘌ(1) - b.y	); }
function RᒾᐤRᵢ	(b,a) 	{ return ːᕮRᒾ(	a.ᵢꘌ(0) * b.x,	a.ᵢꘌ(1) * b.y	); }
function RᒾꘌRᵢ	(b,a) 	{ 		 		b.x  = a.ᵢꘌ(0);	b.y  = a.ᵢꘌ(1);	   }
function RᒾᐩꘌRᵢ	(b,a) 	{ 		 		b.x += a.ᵢꘌ(0);	b.y += a.ᵢꘌ(1);	   }
function RᒾᐨꘌRᵢ	(b,a) 	{ 		 		b.x -= a.ᵢꘌ(0);	b.y -= a.ᵢꘌ(1);	   }
function RᒾᐤꘌRᵢ	(b,a) 	{ 		 		b.x *= a.ᵢꘌ(0);	b.y *= a.ᵢꘌ(1);	   }
function RᒾᐧRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0) * b.x+	a.ᵢꘌ(1) * b.y	 ; }
function RᒾꘌꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)===b.x&&	a.ᵢꘌ(1)===b.y	 ; }
function RᒾǃꘌRᵢ	(b,a) 	{ return 		a.ᵢꘌ(0)!==b.x||	a.ᵢꘌ(1)!==b.y	 ; }







// SWIZZLING
xx	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.x, aꜛ.x); }
xy	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.x, aꜛ.y); }
xz	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.x, aꜛ.z); }
xw	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.x, aꜛ.w); }
yx	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.y, aꜛ.x); }
yy	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.y, aꜛ.y); }
yz	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.y, aꜛ.z); }
yw	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.y, aꜛ.w); }
zx	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.z, aꜛ.x); }
zy	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.z, aꜛ.y); }
zz	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.z, aꜛ.z); }
zw	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.z, aꜛ.w); }
wx	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.w, aꜛ.x); }
wy	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.w, aꜛ.y); }
wz	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.w, aꜛ.z); }
ww	= function(aꜛ) { return aꜛːaꜛᕮRᒾ(aꜛ.w, aꜛ.w); }
xxx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.x, aꜛ.x); }
xxy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.x, aꜛ.y); }
xxz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.x, aꜛ.z); }
xxw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.x, aꜛ.w); }
xyx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.y, aꜛ.x); }
xyy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.y, aꜛ.y); }
xyz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.y, aꜛ.z); }
xyw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.y, aꜛ.w); }
xzx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.z, aꜛ.x); }
xzy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.z, aꜛ.y); }
xzz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.z, aꜛ.z); }
xzw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.z, aꜛ.w); }
xwx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.w, aꜛ.x); }
xwy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.w, aꜛ.y); }
xwz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.w, aꜛ.z); }
xww	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.x, aꜛ.w, aꜛ.w); }
yxx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.x, aꜛ.x); }
yxy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.x, aꜛ.y); }
yxz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.x, aꜛ.z); }
yxw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.x, aꜛ.w); }
yyx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.y, aꜛ.x); }
yyy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.y, aꜛ.y); }
yyz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.y, aꜛ.z); }
yyw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.y, aꜛ.w); }
yzx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.z, aꜛ.x); }
yzy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.z, aꜛ.y); }
yzz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.z, aꜛ.z); }
yzw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.z, aꜛ.w); }
ywx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.w, aꜛ.x); }
ywy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.w, aꜛ.y); }
ywz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.w, aꜛ.z); }
yww	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.y, aꜛ.w, aꜛ.w); }
zxx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.x, aꜛ.x); }
zxy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.x, aꜛ.y); }
zxz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.x, aꜛ.z); }
zxw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.x, aꜛ.w); }
zyx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.y, aꜛ.x); }
zyy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.y, aꜛ.y); }
zyz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.y, aꜛ.z); }
zyw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.y, aꜛ.w); }
zzx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.z, aꜛ.x); }
zzy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.z, aꜛ.y); }
zzz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.z, aꜛ.z); }
zzw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.z, aꜛ.w); }
zwx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.w, aꜛ.x); }
zwy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.w, aꜛ.y); }
zwz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.w, aꜛ.z); }
zww	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.z, aꜛ.w, aꜛ.w); }
wxx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.x, aꜛ.x); }
wxy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.x, aꜛ.y); }
wxz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.x, aꜛ.z); }
wxw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.x, aꜛ.w); }
wyx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.y, aꜛ.x); }
wyy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.y, aꜛ.y); }
wyz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.y, aꜛ.z); }
wyw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.y, aꜛ.w); }
wzx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.z, aꜛ.x); }
wzy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.z, aꜛ.y); }
wzz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.z, aꜛ.z); }
wzw	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.z, aꜛ.w); }
wwx	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.w, aꜛ.x); }
wwy	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.w, aꜛ.y); }
wwz	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.w, aꜛ.z); }
www	= function(aꜛ) { return aꜛːaꜛᕮRᵌ(aꜛ.w, aꜛ.w, aꜛ.w); }











   
function ᐁ(f, dx) {
	dx = dx || 1e-5;
	return function(x){
		return UnicodeMath.get_nary('ᐁ', [f, x, dx]);
	}
}
function ᐁRᒾ(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᶣ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᶣ(xꜛ);	xꜛ.y += dx;
	return ꓽᕮRᒾ(
		(f(xꜛᐩdiꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdjꜛ) - fxꜛ) / dx
	);
}
function ᐁRᵌ(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᶣ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᶣ(xꜛ);	xꜛ.y += dx;
	var xꜛᐩdkꜛ = ꘌRᶣ(xꜛ);	xꜛ.z += dx;
	return ꓽᕮRᵌ(
		(f(xꜛᐩdiꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdjꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdkꜛ) - fxꜛ) / dx
	);
}
function ᐁRᶣ(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᶣ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᶣ(xꜛ);	xꜛ.y += dx;
	var xꜛᐩdkꜛ = ꘌRᶣ(xꜛ);	xꜛ.z += dx;
	var xꜛᐩdlꜛ = ꘌRᶣ(xꜛ);	xꜛ.w += dx;
	return ꓽᕮRᶣ(
		(f(xꜛᐩdiꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdjꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdkꜛ) - fxꜛ) / dx,
		(f(xꜛᐩdlꜛ) - fxꜛ) / dx
	);
}
function ᐁRⁿ(f, xꜛ, dx){
	var fxꜛ = f(xꜛ);
	var xꜛᐩdxꜛ = ꘌRⁿ(xꜛ);
	var result = [];
	for (var i = 0, li = xꜛ.length; i<li; i++) {
		RⁿꘌRⁿ(xꜛᐩdxꜛ, xꜛ);
		xꜛᐩdxꜛ[i] += dx;
		result.push( ( f(xꜛᐩdxꜛ) - fxꜛ ) / dx ); 
	}
	return result;
}
function ᐁRⁿᕽⁿ(f, X, dX) {
	var li=X.length;
	var lj=X[0].length;
	var XᐩdX = ⁿᕽⁿ(li, lj);
	var fX = f(X);
	var result = ⁿᕽⁿ(li, lj);
	var df〳dXᵢⱼ;
	for (var i = 0; i<li; i++) {
		for (var j = 0; j<lj; j++) {

			RⁿᕽⁿꘌRⁿᕽⁿ( XᐩdX, X ) 			;
			XᐩdX[i][j] += dX 				;

			df〳dXᵢⱼ = (f(XᐩdX) - fX) / dX ;

			result[i][j] = df〳dXᵢⱼ  		;

		}
	}
	return result;
}

function ᐁᕁ(f, dx) {
	dx = dx || 1e-6;
	return function(x){
		return UnicodeMath.get_nary('ᐁᕁ', [f, x, dx]);
	}
}
var ᐁᕁRᵌ = (function() {
	return function (f, x, dx){
		var fxꜛ = f(xꜛ);
		var xꜛᐩdiꜛ = ꘌRᵌ(xꜛ);	xꜛ.x += dx;
		var xꜛᐩdjꜛ = ꘌRᵌ(xꜛ);	xꜛ.y += dx;
		var xꜛᐩdkꜛ = ꘌRᵌ(xꜛ);	xꜛ.z += dx;
		var fxꜛᐩdiꜛ = f(xꜛᐩdiꜛ);
		var fxꜛᐩdjꜛ = f(xꜛᐩdjꜛ);
		var fxꜛᐩdkꜛ = f(xꜛᐩdkꜛ);
		return aꜛːaꜛᕮRᵌ(
			((fxꜛᐩdjꜛ.z - fxꜛ.z) 	- 	(fxꜛᐩdkꜛ.y - fxꜛ.y))	/	dx,
			// d/dj*z - d/dk*y,
			((fxꜛᐩdkꜛ.x - fxꜛ.x) 	- 	(fxꜛᐩdiꜛ.z - fxꜛ.z))	/	dx,
			// d/dk*x - d/di*z,
			((fxꜛᐩdiꜛ.y - fxꜛ.y) 	- 	(fxꜛᐩdjꜛ.d - fxꜛ.d))	/	dx
			// d/di*y - d/dj*x
		);
	}
})();

function ᐁᐧ(f, dx) {
	dx = dx || 1e-6;
	return function(x){
		return UnicodeMath.get_nary('ᐁᐧ', f, x, dx);
	}
}
var ᐁᐧRᒾ	= function(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᒾ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᒾ(xꜛ);	xꜛ.y += dx;
	return 	(f(xꜛᐩdiꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdjꜛ) - fxꜛ) / dx ;
}
var ᐁᐧRᵌ	= function(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᵌ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᵌ(xꜛ);	xꜛ.y += dx;
	var xꜛᐩdkꜛ = ꘌRᵌ(xꜛ);	xꜛ.z += dx;
	return 	(f(xꜛᐩdiꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdjꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdkꜛ) - fxꜛ) / dx;
}
var ᐁᐧRᶣ	= function(xꜛ) {
	var fxꜛ = f(xꜛ);
	var xꜛᐩdiꜛ = ꘌRᶣ(xꜛ);	xꜛ.x += dx;
	var xꜛᐩdjꜛ = ꘌRᶣ(xꜛ);	xꜛ.y += dx;
	var xꜛᐩdkꜛ = ꘌRᶣ(xꜛ);	xꜛ.z += dx;
	var xꜛᐩdlꜛ = ꘌRᶣ(xꜛ);	xꜛ.w += dx;
	return 	(f(xꜛᐩdiꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdjꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdkꜛ) - fxꜛ) / dx +
			(f(xꜛᐩdlꜛ) - fxꜛ) / dx ;
}
var ᐁᐧRⁿ	= function (f, xꜛ, dx){
	var fxꜛ = f(xꜛ);
	var xꜛᐩdx = ꘌRⁿ(xꜛ);
	var result = 0;
	for (var i = 0, li = xꜛ.length; i<li; i++) {
		RⁿꘌRⁿ(xꜛᐩdx, xꜛ);
		xꜛᐩdx[i] += dx;
		result += ( f(xꜛᐩdx) - fxꜛ ) / dx ; 
	}
	return result;
}



ᐁᐧᐁ = ᐃ = ᐁᒾ = function(f, dx) {
	dx = dx || 1e-6;
	return ᐁᐧ(ᐁ(f,dx),dx);
}



function ꜛ	()		{
	result = [];
	for (var i = 0, li = arguments.length; i<li; i++) {
		var args = arguments[i];
		var array = UnicodeMath.get_unary('ꜛ', args);
		result.push.apply(result, array);
	}
	return ːᕮRⁿ(result);
}

(function(){

	function _associate(f) { 
		return  function(a,b) {
			return f(b,a);
		}
	}

	UnicodeMath.add_overloads({
			'ǀxǀ	Vector2': 		ǀRᒾǀ,
			'ǀxǀ	Vector3': 		ǀRᵌǀ,
			'ǀxǀ	Vector4': 		ǀRᶣǀ,
			'ǀxǀ	Array': 		ǀRⁿǀ,
			'ǀxǀ	Matrix2': 		ǀRᒾᕽᒾǀ,
			'ǀxǀ	Matrix3': 		ǀRᵌᕽᵌǀ,
			'ǀxǀ	Matrix4': 		ǀRᶣᕽᶣǀ,
		//	'ǀxǀ	Matrix': 		ǀRⁿᕽⁿǀ, // WIP
			'ˆ	Vector2': 			Rᒾˆ,
			'ˆ	Vector3': 			Rᵌˆ,
			'ˆ	Vector4': 			Rᶣˆ,
			'ˆ	Array': 			Rⁿˆ,
			'ˆꘌ	Vector2': 			Rᒾˆꘌ,
			'ˆꘌ	Vector3': 			Rᵌˆꘌ,
			'ˆꘌ	Vector4': 			Rᶣˆꘌ,
			'ˆꘌ	Array': 			Rⁿˆꘌ,
		//	'ᐨᑊ	Matrix2': 			Rᒾᕽᒾᐨᑊ, 	// WIP
		//	'ᐨᑊ	Matrix3': 			Rᵌᕽᵌᐨᑊ, 	// WIP
		//	'ᐨᑊ	Matrix4': 			Rᶣᕽᶣᐨᑊ, 	// WIP
		//	'ᐨᑊ	Matrix': 			Rⁿᕽⁿᐨᑊ, 	// WIP
			'ᐪ	Matrix2': 			Rᒾᕽᒾᐪ, 
			'ᐪ	Matrix3': 			Rᵌᕽᵌᐪ, 
			'ᐪ	Matrix4': 			Rᶣᕽᶣᐪ, 
			'ᐪ	Matrix': 			Rⁿᕽⁿᐪ, 
			'ᐪꘌ	Matrix2': 			Rᒾᕽᒾᐪꘌ,
			'ᐪꘌ	Matrix3': 			Rᵌᕽᵌᐪꘌ,
			'ᐪꘌ	Matrix4': 			Rᶣᕽᶣᐪꘌ,
			
			'ꜛ	Undefined': 	function(_) 	{ return []; },
			'ꜛ	Array': 		function(array)	{ return array; },
			'ꜛ	Matrix2':		function(array)	{ return array; }, // HACK: "32	" is actually an array representing a vector
			'ꜛ	Matrix3':		function(array)	{ return array; }, // HACK: "Matrix" is actually an array representing a vector
			'ꜛ	Matrix4':		function(array)	{ return array; }, // HACK: "Matrix" is actually an array representing a vector
			'ꜛ	Vector4':		function(xyzw)	{ return [xyzw.x, xyzw.y, xyzw.z, xyzw.w]; },
			'ꜛ	Vector3':		function(xyz)	{ return [xyz.x, xyz.y, xyz.z]; },
			'ꜛ	Vector2':		function(xy)	{ return [xy.x, xy.y]; },
			'ꜛ	Number': 		function(x) 	{ return [x]; },

			'ᐁ	Function	Vector2	Number': ᐁRᒾ,
			'ᐁ	Function	Vector3	Number': ᐁRᵌ,
			'ᐁ	Function	Vector4	Number': ᐁRᶣ,
			'ᐁ	Function	Array	Number': ᐁRⁿ,
			'ᐁ	Function	Matrix2	Number': ᐁRⁿ,
			'ᐁ	Function	Matrix3	Number': ᐁRⁿ,
			'ᐁ	Function	Matrix4	Number': ᐁRⁿ,
			'ᐁ	Function	Matrix	Number': ᐁRⁿᕽⁿ,

			'ᐁᕁ	Function	Vector3	Number': ᐁᕁRᵌ,

			'ᐁᐧ	Function	Vector2	Number': ᐁᐧRᒾ,
			'ᐁᐧ	Function	Vector3	Number': ᐁᐧRᵌ,
			'ᐁᐧ	Function	Vector4	Number': ᐁᐧRᶣ,
			'ᐁᐧ	Function	Array	Number': ᐁᐧRⁿ,

			'Function	ᐧ	Vector2': 	FᐧRᒾ,
			'Function	ᐧ	Vector3': 	FᐧRᵌ,
			'Function	ᐧ	Vector4': 	FᐧRᶣ,
			'Function	ᐧ	Array': 	FᐧRⁿ,
			'Vector2	ᐧ	Function': 	_associate(FᐧRᒾ),
			'Vector3	ᐧ	Function': 	_associate(FᐧRᵌ),
			'Vector4	ᐧ	Function': 	_associate(FᐧRᶣ),
			'Array	ᐧ	Function': 		_associate(FᐧRⁿ),
			'Function	ᐧ	Matrix2': 	FᐧRⁿ,
			'Function	ᐧ	Matrix3': 	FᐧRⁿ,
			'Function	ᐧ	Matrix4': 	FᐧRⁿ,
			'Function	ᐧ	Matrix': 	FᐧRⁿᕽⁿ,
			'Matrix	ᐧ	Function': 		_associate(FᐧRⁿ),
			'Matrix	ᐧ	Function': 		_associate(FᐧRⁿ),
			'Matrix	ᐧ	Function': 		_associate(FᐧRⁿ),
			'Matrix	ᐧ	Function': 		_associate(FᐧRⁿᕽⁿ),

		//	'Function2	ᐧ	Function': 	function(f,g) { 
		//			// assume g is a function that returns a Vector2 given an input Vector2
		//			return ᐧ(f, ꓽᕮRᒾ(function(x){ return g(x).x }, 
		//							function(x){ return g(x).y }));
		//		},
		//	'Function4	ᐧ	Function': 	function(f,g) { 
		//			// assume g is a function that returns a Vector3 given an input Vector3
		//			return ᐧ(f, ꓽᕮRᵌ(function(x){ return g(x).x }, 
		//							function(x){ return g(x).y }, 
		//							function(x){ return g(x).z }));
		//		},
		//	'Function4	ᐧ	Function': 	function(f,g) { 
		//			// assume g is a function that returns a Vector4 given an input Vector4
		//			return ᐧ(f, ꓽᕮRᶣ(function(x){ return g(x).x }, 
		//							function(x){ return g(x).y }, 
		//							function(x){ return g(x).z }, 
		//							function(x){ return g(x).w }));
		//		},
		//	'FunctionN	ᐧ	Function': 	function(f,g) { 
		//			gʹ = [];
		//			for (var i = 0, li=f.length; i<li; i++) {
		//				gʹ.push(function(x){ return g(x)[i]; });
		//			}
		//			// assume g is a function that returns a Vector4 given an input Vector4
		//			return ᐧ(f, gʹ);
		//		},

			'Vector2	ᐧꘌ	Function': 	RᒾᐧꘌF,
			'Vector3	ᐧꘌ	Function': 	RᵌᐧꘌF,
			'Vector4	ᐧꘌ	Function': 	RᶣᐧꘌF,
			'Array	ᐧꘌ	Function': 		RⁿᐧꘌF,
			'Matrix2	ᐧꘌ	Function': 	RⁿᐧꘌF,
			'Matrix3	ᐧꘌ	Function': 	RⁿᐧꘌF,
			'Matrix4	ᐧꘌ	Function': 	RⁿᐧꘌF,
			'Matrix	ᐧꘌ	Function': 		RⁿᕽⁿᐧꘌF,
			'Function2	ᐤ	Vector2': 	FᒾᐤRᒾ,
			'Function3	ᐤ	Vector3': 	FᵌᐤRᵌ,
			'Function4	ᐤ	Vector4': 	FᶣᐤRᶣ,
			'Function	ᐤ	Array': 	function(f,a) { return a.map(f); },	// NOTE: ambiguous with f.apply(a)
			'Function2	ᐤꘌ	Vector2': 	RᒾᐤꘌFᒾ,
			'Function3	ᐤꘌ	Vector3': 	RᵌᐤꘌFᵌ,
			'Function4	ᐤꘌ	Vector4': 	RᶣᐤꘌFᶣ,
			'Function	ᐤꘌ	Array': 	function(f,a) { return a.map(f); }, // NOTE: ambiguous with f.apply(a)


	// NUMBER, VECTOR ----------------------------- 
		// VECTOR2	
			'Number	ᐧ	Vector2': 	RᐧRᒾ,
			'Vector2	ᐩ	Number': 	RᒾᐩR,
			'Vector2	ᐨ	Number': 	RᒾᐨR,
			'Vector2	ᐧ	Number': 	RᒾᐧR,
			'Vector2	〳	Number': 	Rᒾ〳R,
			'Vector2	ᐩꘌ	Number': 	RᒾᐩꘌR,
			'Vector2	ᐨꘌ	Number': 	RᒾᐨꘌR,
			'Vector2	ᐧꘌ	Number': 	RᒾᐧꘌR,
			'Vector2	〳ꘌ	Number': 	Rᒾ〳ꘌR,
		
		// VECTOR3
			'Number	ᐧ	Vector3': 	RᐧRᵌ,
			
			'Vector3	ᐩ	Number': 	RᵌᐩR,
			'Vector3	ᐨ	Number': 	RᵌᐨR,
			'Vector3	ᐧ	Number': 	RᵌᐧR,
			'Vector3	〳	Number': 	Rᵌ〳R,
			'Vector3	ᐩꘌ	Number': 	RᵌᐩꘌR,
			'Vector3	ᐨꘌ	Number': 	RᵌᐨꘌR,
			'Vector3	ᐧꘌ	Number': 	RᵌᐧꘌR,
			'Vector3	〳ꘌ	Number': 	Rᵌ〳ꘌR,
			
		// VECTOR4
			'Number	ᐧ	Vector4': 	RᐧRᶣ,
			
			'Vector4	ᐩ	Number': 	RᶣᐩR,
			'Vector4	ᐨ	Number': 	RᶣᐨR,
			'Vector4	ᐧ	Number': 	RᶣᐧR,
			'Vector4	〳	Number': 	Rᶣ〳R,
			'Vector4	ᐩꘌ	Number': 	RᶣᐩꘌR,
			'Vector4	ᐨꘌ	Number': 	RᶣᐨꘌR,
			'Vector4	ᐧꘌ	Number': 	RᶣᐧꘌR,
			'Vector4	〳ꘌ	Number': 	Rᶣ〳ꘌR,
			
		// VECTOR OF SIZE N
			'Number	ᐧ	Array': 	RᐧRⁿ,
			
			'Array	ᐩ	Number': 	RⁿᐩR,
			'Array	ᐨ	Number': 	RⁿᐨR,
			'Array	ᐧ	Number': 	RⁿᐧR,
			'Array	〳	Number': 	Rⁿ〳R,
			'Array	ᐩꘌ	Number': 	RⁿᐩꘌR,
			'Array	ᐨꘌ	Number': 	RⁿᐨꘌR,
			'Array	ᐧꘌ	Number': 	RⁿᐧꘌR,
			'Array	〳ꘌ	Number': 	Rⁿ〳ꘌR,


		// VECTOR OF ARBITRARY SIZE
			'Number	ᐩ	Function(i)': 	RᐩRᵢ,
			'Number	ᐨ	Function(i)': 	RᐨRᵢ,
			'Number	ᐧ	Function(i)': 	RᐧRᵢ,
			'Number	〳	Function(i)': 	R〳Rᵢ,
			
			'Function(i)	ᐩ	Number': 	RᵢᐩR,
			'Function(i)	ᐨ	Number': 	RᵢᐨR,
			'Function(i)	ᐧ	Number': 	RᵢᐧR,
			'Function(i)	〳	Number': 	Rᵢ〳R,

	// VECTOR, VECTOR -----------------------------
		// VECTOR2, VECTOR2
			'Vector2	ᐩ	Vector2': 	RᒾᐩRᒾ,
			'Vector2	ᐨ	Vector2': 	RᒾᐨRᒾ,
			'Vector2	ᐧ	Vector2': 	RᒾᐧRᒾ,
			'Vector2	ᕁ	Vector2': 	RᒾᕁRᒾ,
			'Vector2	ᐤ	Vector2': 	RᒾᐤRᒾ,
			'Vector2	ᐩꘌ	Vector2': 	RᒾᐩꘌRᒾ,
			'Vector2	ᐨꘌ	Vector2': 	RᒾᐨꘌRᒾ,
		//	'Vector2	ᐧꘌ	Vector2': 	RᒾᐧꘌRᒾ,	// not a valid operation
		//	'Vector2	ᕁꘌ	Vector2': 	RᒾᕁꘌRᒾ, 	// not a valid operation
			'Vector2	ᐤꘌ	Vector2': 	RᒾᐤꘌRᒾ,
			'Vector2	ꘌ	Vector2': 	RᒾꘌRᒾ,
			'Vector2	ꘌ	Undefined': ꘌRᒾ,
			'Vector2	ꘌꘌ	Vector2': 	RᒾꘌꘌRᒾ,
			'Vector2	ǃꘌ	Vector2': 	RᒾǃꘌRᒾ,
		//	'Vector2	ꘌꘌ	Array': 	RᒾꘌꘌRⁿ,	// WIP

		// VECTOR3, VECTOR3
			'Vector3	ᐩ	Vector3': 	RᵌᐩRᵌ,
			'Vector3	ᐨ	Vector3': 	RᵌᐨRᵌ,
			'Vector3	ᐧ	Vector3': 	RᵌᐧRᵌ,
			'Vector3	ᕁ	Vector3': 	RᵌᕁRᵌ,		
			'Vector3	ᐤ	Vector3': 	RᵌᐤRᵌ,
			'Vector3	ᐩꘌ	Vector3': 	RᵌᐩꘌRᵌ,
			'Vector3	ᐨꘌ	Vector3': 	RᵌᐨꘌRᵌ,
		//	'Vector3	ᐧꘌ	Vector3': 	RᵌᐧꘌRᵌ,	// not a valid operation
			'Vector3	ᕁꘌ	Vector3': 	RᵌᕁꘌRᵌ, 
			'Vector3	ᐤꘌ	Vector3': 	RᵌᐤꘌRᵌ,
			'Vector3	ꘌ	Vector3': 	RᵌꘌRᵌ,
			'Vector3	ꘌ	Undefined': ꘌRᵌ,
			'Vector3	ꘌꘌ	Vector3': 	RᵌꘌꘌRᵌ,
			'Vector3	ǃꘌ	Vector3': 	RᵌǃꘌRᵌ,
		//	'Vector3	ꘌꘌ	Array': 	RᵌꘌꘌRⁿ,	// WIP

		// VECTOR4
			'Vector4	ᐩ	Vector4': 	RᶣᐩRᶣ,
			'Vector4	ᐨ	Vector4': 	RᶣᐨRᶣ,
			'Vector4	ᐧ	Vector4': 	RᶣᐧRᶣ,
		//	'Vector4	ᕁ	Vector4': 	RᶣᕁRᶣ,	// WIP
			'Vector4	ᐤ	Vector4': 	RᶣᐤRᶣ,
			'Vector4	ᐩꘌ	Vector4': 	RᶣᐩꘌRᶣ,
			'Vector4	ᐨꘌ	Vector4': 	RᶣᐨꘌRᶣ,
		//	'Vector4	ᐧꘌ	Vector4': 	RᶣᐧꘌRᶣ,	// not a valid operation
		//	'Vector4	ᕁꘌ	Vector4': 	RᶣᕁꘌRᶣ, // WIP
			'Vector4	ᐤꘌ	Vector4': 	RᶣᐤꘌRᶣ,
			'Vector4	ꘌ	Vector4': 	RᶣꘌRᶣ,
			'Vector4	ꘌ	Undefined': ꘌRᶣ,
			'Vector4	ꘌꘌ	Vector4': 	RᶣꘌꘌRᶣ,
			'Vector4	ǃꘌ	Vector4': 	RᶣǃꘌRᶣ,
		//	'Vector4	ꘌꘌ	Array': 	RᶣꘌꘌRⁿ,	// WIP

		// VECTOR OF SIZE N
			'Array	ᐩ	Array': 		RⁿᐩRⁿ,
			'Array	ᐨ	Array': 		RⁿᐨRⁿ,
			'Array	ᐧ	Array': 		RⁿᐧRⁿ,
		//	'Array	ᕁ	Array': 		RⁿᕁRⁿ,	// not a valid operation
			'Array	ᐤ	Array': 		RⁿᐤRⁿ,
			'Array	ᐩꘌ	Array': 		RⁿᐩꘌRⁿ,
			'Array	ᐨꘌ	Array': 		RⁿᐨꘌRⁿ,
		//	'Array	ᐧꘌ	Array': 		RⁿᐧꘌRⁿ,	// not a valid operation
		//	'Array	ᕁꘌ	Array': 		RⁿᕁꘌRⁿ, // not a valid operation
			'Array	ᐤꘌ	Array': 		RⁿᐤꘌRⁿ,
			'Array	ꘌ	Array': 		RⁿꘌRⁿ,
			'Array	ꘌ	Undefined': 	ꘌRⁿ,
			'Array	ꘌꘌ	Array': 		RⁿꘌꘌRⁿ,
			'Array	ǃꘌ	Array': 		RⁿǃꘌRⁿ,

		// HACK - Array gets confused with Matrix2
			'Matrix2	ᐩ	Matrix2': 		RⁿᐩRⁿ,
			'Matrix2	ᐨ	Matrix2': 		RⁿᐨRⁿ,
			'Matrix2	ᐧ	Matrix2': 		RⁿᐧRⁿ,
		//	'Matrix2	ᕁ	Matrix2': 		RⁿᕁRⁿ,	// not a valid operation
			'Matrix2	ᐤ	Matrix2': 		RⁿᐤRⁿ,
			'Matrix2	ᐩꘌ	Matrix2': 		RⁿᐩꘌRⁿ,
			'Matrix2	ᐨꘌ	Matrix2': 		RⁿᐨꘌRⁿ,
		//	'Matrix2	ᐧꘌ	Matrix2': 		RⁿᐧꘌRⁿ,	// not a valid operation
		//	'Matrix2	ᕁꘌ	Matrix2': 		RⁿᕁꘌRⁿ, // not a valid operation
			'Matrix2	ᐤꘌ	Matrix2': 		RⁿᐤꘌRⁿ,
			'Matrix2	ꘌ	Matrix2': 		RⁿꘌRⁿ,
			'Matrix2	ꘌ	Undefined': 	ꘌRⁿ,
			'Matrix2	ꘌꘌ	Matrix2': 		RⁿꘌꘌRⁿ,
			'Matrix2	ǃꘌ	Matrix2': 		RⁿǃꘌRⁿ,


		// VECTOR OF ARBITRARY SIZE
			'Function(i)	ᐩ	Function(i)': 		RᵢᐩRᵢ,
			'Function(i)	ᐨ	Function(i)': 		RᵢᐨRᵢ,
			'Function(i)	ᐧ	Function(i)': 		RᵢᐤRᵢ,
		//	'Function(i)	ᕁ	Function(i)': 		RᵢᕁRᵢ,	// not a valid operation
			'Function(i)	ᐤ	Function(i)': 		RᵢᐤRᵢ,
			
			'Function(i)	ᐩ	Array': 			RᵢᐩRⁿ,
			'Function(i)	ᐨ	Array': 			RᵢᐨRⁿ,
			'Function(i)	ᐧ	Array': 			RᵢᐧRⁿ,
		//	'Function(i)	ᕁ	Array': 			RᵢᕁRⁿ,	// not a valid operation
			'Function(i)	ᐤ	Array': 			RᵢᐤRⁿ,
			'Function(i)	ꘌꘌ	Array': 			_associate(RⁿꘌꘌRᵢ),
			'Function(i)	ǃꘌ	Array': 			_associate(RⁿǃꘌRᵢ),
			
			'Array	ᐩ	Function(i)': 				RⁿᐩRᵢ,
			'Array	ᐨ	Function(i)': 				RⁿᐨRᵢ,
			'Array	ᐧ	Function(i)': 				RⁿᐧRᵢ,
		//	'Array	ᕁ	Function(i)': 				RⁿᕁRᵢ,	// not a valid operation
			'Array	ᐤ	Function(i)': 				RⁿᐤRᵢ,
			'Array	ᐩ	Function(i)': 				RⁿᐩꘌRᵢ,
			'Array	ᐨ	Function(i)': 				RⁿᐨꘌRᵢ,
			'Array	ᐧ	Function(i)': 				RⁿᐤꘌRᵢ,
		//	'Array	ᕁ	Function(i)': 				RⁿᕁꘌRᵢ,	// not a valid operation
			'Array	ᐤ	Function(i)': 				RⁿᐤꘌRᵢ,
			'Array	ꘌ	Function(i)': 				RⁿꘌRᵢ,
			'Array	ꘌꘌ	Function(i)': 				RⁿꘌꘌRᵢ,
			'Array	ǃꘌ	Function(i)': 				RⁿǃꘌRᵢ,
			
			'Function(i)	ᐩ	Vector4': 			RᵢᐩRᶣ,
			'Function(i)	ᐨ	Vector4': 			RᵢᐨRᶣ,
			'Function(i)	ᐧ	Vector4': 			RᵢᐧRᶣ,
		//	'Function(i)	ᕁ	Vector4': 			RᵢᕁRᶣ,	// not a valid operation
			'Function(i)	ᐤ	Vector4': 			RᵢᐤRᶣ,
			'Function(i)	ꘌꘌ	Vector4': 			_associate(RᶣꘌꘌRᵢ),
			'Function(i)	ǃꘌ	Vector4': 			_associate(RᶣǃꘌRᵢ),
			
			'Vector4	ᐩ	Function(i)': 			RᶣᐩRᵢ,
			'Vector4	ᐨ	Function(i)': 			RᶣᐨRᵢ,
			'Vector4	ᐧ	Function(i)': 			RᶣᐧRᵢ,
		//	'Vector4	ᕁ	Function(i)': 			RᶣᕁRᵢ,	// not a valid operation
			'Vector4	ᐤ	Function(i)': 			RᶣᐤRᵢ,
			'Vector4	ᐩ	Function(i)': 			RᶣᐩꘌRᵢ,
			'Vector4	ᐨ	Function(i)': 			RᶣᐨꘌRᵢ,
			'Vector4	ᐧ	Function(i)': 			RᶣᐤꘌRᵢ,
		//	'Vector4	ᕁ	Function(i)': 			RᶣᕁꘌRᵢ,	// not a valid operation
			'Vector4	ᐤ	Function(i)': 			RᶣᐤꘌRᵢ,
			'Vector4	ꘌ	Function(i)': 			RᶣꘌRᵢ,
			'Vector4	ꘌꘌ	Function(i)': 			RᶣꘌꘌRᵢ,
			'Vector4	ǃꘌ	Function(i)': 			RᶣǃꘌRᵢ,
			
			'Function(i)	ᐩ	Vector3': 			RᵢᐩRᵌ,
			'Function(i)	ᐨ	Vector3': 			RᵢᐨRᵌ,
			'Function(i)	ᐧ	Vector3': 			RᵢᐧRᵌ,
		//	'Function(i)	ᕁ	Vector3': 			RᵢᕁRᵌ,	// not a valid operation
			'Function(i)	ᐤ	Vector3': 			RᵢᐤRᵌ,
			'Function(i)	ꘌꘌ	Vector3': 			_associate(RᵌꘌꘌRᵢ),
			'Function(i)	ǃꘌ	Vector3': 			_associate(RᵌǃꘌRᵢ),
			
			'Vector3	ᐩ	Function(i)': 			RᵌᐩRᵢ,
			'Vector3	ᐨ	Function(i)': 			RᵌᐨRᵢ,
			'Vector3	ᐧ	Function(i)': 			RᵌᐧRᵢ,
		//	'Vector3	ᕁ	Function(i)': 			RᵌᕁRᵢ,	// not a valid operation
			'Vector3	ᐤ	Function(i)': 			RᵌᐤRᵢ,
			'Vector3	ᐩ	Function(i)': 			RᵌᐩꘌRᵢ,
			'Vector3	ᐨ	Function(i)': 			RᵌᐨꘌRᵢ,
			'Vector3	ᐧ	Function(i)': 			RᵌᐤꘌRᵢ,
		//	'Vector3	ᕁ	Function(i)': 			RᵌᕁꘌRᵢ,	// not a valid operation
			'Vector3	ᐤ	Function(i)': 			RᵌᐤꘌRᵢ,
			'Vector3	ꘌ	Function(i)': 			RᵌꘌRᵢ,
			'Vector3	ꘌꘌ	Function(i)': 			RᵌꘌꘌRᵢ,
			'Vector3	ǃꘌ	Function(i)': 			RᵌǃꘌRᵢ,
			
			'Function(i)	ᐩ	Vector2': 			RᵢᐩRᒾ,
			'Function(i)	ᐨ	Vector2': 			RᵢᐨRᒾ,
			'Function(i)	ᐧ	Vector2': 			RᵢᐧRᒾ,
		//	'Function(i)	ᕁ	Vector2': 			RᵢᕁRᒾ,	// not a valid operation
			'Function(i)	ᐤ	Vector2': 			RᵢᐤRᒾ,
			'Function(i)	ꘌꘌ	Vector2': 			_associate(RᒾꘌꘌRᵢ),
			'Function(i)	ǃꘌ	Vector2': 			_associate(RᒾǃꘌRᵢ),
			
			'Vector2	ᐩ	Function(i)': 			RᒾᐩRᵢ,
			'Vector2	ᐨ	Function(i)': 			RᒾᐨRᵢ,
			'Vector2	ᐧ	Function(i)': 			RᒾᐧRᵢ,
		//	'Vector2	ᕁ	Function(i)': 			RᒾᕁRᵢ,	// not a valid operation
			'Vector2	ᐤ	Function(i)': 			RᒾᐤRᵢ,
			'Vector2	ᐩ	Function(i)': 			RᒾᐩꘌRᵢ,
			'Vector2	ᐨ	Function(i)': 			RᒾᐨꘌRᵢ,
			'Vector2	ᐧ	Function(i)': 			RᒾᐤꘌRᵢ,
		//	'Vector2	ᕁ	Function(i)': 			RᒾᕁꘌRᵢ,	// not a valid operation
			'Vector2	ᐤ	Function(i)': 			RᒾᐤꘌRᵢ,
			'Vector2	ꘌ	Function(i)': 			RᒾꘌRᵢ,
			'Vector2	ꘌꘌ	Function(i)': 			RᒾꘌꘌRᵢ,
			'Vector2	ǃꘌ	Function(i)': 			RᒾǃꘌRᵢ,


	// NUMBER, MATRIX -----------------------------
		// MATRIX2
			'Number	ᐧ	Matrix2': 		RᐧRⁿ,
			'Number	ᕁ	Matrix2': 		RᐧRⁿ,
			
			'Matrix2	ᐩ	Number': 	RⁿᐩR,
			'Matrix2	ᐨ	Number': 	RⁿᐨR,
			'Matrix2	ᐧ	Number': 	RⁿᐧR,
			'Matrix2	ᕁ	Number': 	RⁿᐧR,
			'Matrix2	〳	Number':  	Rⁿ〳R,
			'Matrix2	ᐩꘌ	Number': 	RⁿᐩꘌR,
			'Matrix2	ᐨꘌ	Number': 	RⁿᐨꘌR,
			'Matrix2	ᐧꘌ	Number': 	RⁿᐧꘌR,
			'Matrix2	ᕁꘌ	Number': 	RⁿᐧꘌR,
			'Matrix2	〳ꘌ	Number':  	Rⁿ〳ꘌR,

		// MATRIX3
			'Number	ᐧ	Matrix3': 		RᐧRⁿ,
			'Number	ᕁ	Matrix3': 		RᐧRⁿ,
			
			'Matrix3	ᐩ	Number': 	RⁿᐩR,
			'Matrix3	ᐨ	Number': 	RⁿᐨR,
			'Matrix3	ᐧ	Number': 	RⁿᐧR,
			'Matrix3	ᕁ	Number': 	RⁿᐧR,
			'Matrix3	〳	Number':  	Rⁿ〳R,
			'Matrix3	ᐩꘌ	Number': 	RⁿᐩꘌR,
			'Matrix3	ᐨꘌ	Number': 	RⁿᐨꘌR,
			'Matrix3	ᐧꘌ	Number': 	RⁿᐧꘌR,
			'Matrix3	ᕁꘌ	Number': 	RⁿᐧꘌR,
			'Matrix3	〳ꘌ	Number':  	Rⁿ〳ꘌR,

		// MATRIX4
			'Number	ᐧ	Matrix4': 		RᐧRⁿ,
			'Number	ᕁ	Matrix4': 		RᐧRⁿ,
			
			'Matrix4	ᐩ	Number': 	RⁿᐩR,
			'Matrix4	ᐨ	Number': 	RⁿᐨR,
			'Matrix4	ᐧ	Number': 	RⁿᐧR,
			'Matrix4	ᕁ	Number': 	RⁿᐧR,
			'Matrix4	〳	Number':  	Rⁿ〳R,
			'Matrix4	ᐩꘌ	Number': 	RⁿᐩꘌR,
			'Matrix4	ᐨꘌ	Number': 	RⁿᐨꘌR,
			'Matrix4	ᐧꘌ	Number': 	RⁿᐧꘌR,
			'Matrix4	ᕁꘌ	Number': 	RⁿᐧꘌR,
			'Matrix4	〳ꘌ	Number':  	Rⁿ〳ꘌR,

		// MATRIX4
			'Number	ᐧ	Matrix': 		RᐧRⁿᕽⁿ,
			'Number	ᕁ	Matrix': 		RᐧRⁿᕽⁿ,
			
			'Matrix	ᐩ	Number': 	RⁿᕽⁿᐩR,
			'Matrix	ᐨ	Number': 	RⁿᕽⁿᐨR,
			'Matrix	ᐧ	Number': 	RⁿᕽⁿᐧR,
			'Matrix	ᕁ	Number': 	RⁿᕽⁿᐧR,
			'Matrix	〳	Number':  	Rⁿᕽⁿ〳R,
			'Matrix	ᐩꘌ	Number': 	RⁿᕽⁿᐩꘌR,
			'Matrix	ᐨꘌ	Number': 	RⁿᕽⁿᐨꘌR,
			'Matrix	ᐧꘌ	Number': 	RⁿᕽⁿᐧꘌR,
			'Matrix	ᕁꘌ	Number': 	RⁿᕽⁿᐧꘌR,
			'Matrix	〳ꘌ	Number':  	Rⁿᕽⁿ〳ꘌR,

	// VECTOR, MATRIX -----------------------------
		// MATRIX2
			'Matrix2	ᐧ	Vector2': 	RᒾᕽᒾᐧRᒾ,
			'Matrix2	ᕁ	Vector2': 	RᒾᕽᒾᐧRᒾ,
			
			'Vector2	ᐧ	Matrix2': 	_associate(RᒾᕽᒾᐧRᒾ),
			'Vector2	ᕁ	Matrix2': 	_associate(RᒾᕽᒾᐧRᒾ),
			'Vector2	ᐧꘌ	Matrix2': 	RᒾᐧꘌRᒾᕽᒾ,
			'Vector2	ᕁꘌ	Matrix2': 	RᒾᐧꘌRᒾᕽᒾ,

		// MATRIX2, ARRAY
		//	'Matrix2	ᐧ	Array': 	RᒾᕽᒾᐧRⁿ,
		//	'Matrix2	ᕁ	Array': 	RᒾᕽᒾᐧRⁿ,
		//	
		//	'Array	ᐧ	Matrix2': 	_associate(RᒾᕽᒾᐧRⁿ),
		//	'Array	ᕁ	Matrix2': 	_associate(RᒾᕽᒾᐧRⁿ),
		//	'Array	ᐧꘌ	Matrix2': 	RⁿᐧꘌRᒾᕽᒾ,		// WIP
		//	'Array	ᕁꘌ	Matrix2': 	RⁿᐧꘌRᒾᕽᒾ,		// WIP
			
		// MATRIX3
			'Matrix3	ᐧ	Vector3': 	RᵌᕽᵌᐧRᵌ,
			'Matrix3	ᕁ	Vector3': 	RᵌᕽᵌᐧRᵌ,
			
			'Vector3	ᐧ	Matrix3': 	_associate(RᵌᕽᵌᐧRᵌ),
			'Vector3	ᕁ	Matrix3': 	_associate(RᵌᕽᵌᐧRᵌ),
			'Vector3	ᐧꘌ	Matrix3': 	RᵌᐧꘌRᵌᕽᵌ,
			'Vector3	ᕁꘌ	Matrix3': 	RᵌᐧꘌRᵌᕽᵌ,
			
		// MATRIX3, ARRAY
		//	'Matrix3	ᐧ	Array': 	RᵌᕽᵌᐧRⁿ,
		//	'Matrix3	ᕁ	Array': 	RᵌᕽᵌᐧRⁿ,
		//	
		//	'Array	ᐧ	Matrix3': 		_associate(RᵌᕽᵌᐧRⁿ),
		//	'Array	ᕁ	Matrix3': 		_associate(RᵌᕽᵌᐧRⁿ),
		// 'Array	ᐧꘌ	Matrix3': 		RⁿᐧꘌRᵌᕽᵌ,	//	WIP
		// 'Array	ᕁꘌ	Matrix3': 		RⁿᐧꘌRᵌᕽᵌ,	//	WIP
			
		// MATRIX4
			'Matrix4	ᐧ	Vector4': 	RᶣᕽᶣᐧRᶣ,
			'Matrix4	ᕁ	Vector4': 	RᶣᕽᶣᐧRᶣ,
			
			'Vector4	ᐧ	Matrix4': 	_associate(RᶣᕽᶣᐧRᶣ),
			'Vector4	ᕁ	Matrix4': 	_associate(RᶣᕽᶣᐧRᶣ),
			'Vector4	ᐧꘌ	Matrix4': 	RᶣᐧꘌRᶣᕽᶣ,
			'Vector4	ᕁꘌ	Matrix4': 	RᶣᐧꘌRᶣᕽᶣ,
				
		// MATRIX4, VECTOR3 - special case for 3d graphics processing
			'Matrix4	ᐧ	Vector3': 	RᶣᕽᶣᐧRᵌ,
			'Matrix4	ᕁ	Vector3': 	RᶣᕽᶣᐧRᵌ,
			
			'Vector3	ᐧ	Matrix4': 	_associate(RᶣᕽᶣᐧRᵌ),
			'Vector3	ᕁ	Matrix4': 	_associate(RᶣᕽᶣᐧRᵌ),
			'Vector3	ᐧꘌ	Matrix4': 	RᵌᐧꘌRᶣᕽᶣ,
			'Vector3	ᕁꘌ	Matrix4': 	RᵌᐧꘌRᶣᕽᶣ,

		// MATRIX4, ARRAY HACK - vector 4 array is confused for matrix2
		//	'Matrix4	ᐧ	Matrix2': 	RᶣᕽᶣᐧRⁿ,
		//	'Matrix4	ᕁ	Matrix2': 	RᶣᕽᶣᐧRⁿ,
		//	
		//	'Matrix2	ᐧ	Matrix4': 	_associate(RᶣᕽᶣᐧRⁿ),
		//	'Matrix2	ᕁ	Matrix4': 	_associate(RᶣᕽᶣᐧRⁿ),
		//	'Matrix2	ᐧꘌ	Matrix4': 	RⁿᐧꘌRᶣᕽᶣ,	// WIP
		//	'Matrix2	ᕁꘌ	Matrix4': 	RⁿᐧꘌRᶣᕽᶣ,	// WIP

		// MATRIX, ARRAY
			'Matrix	ᐧ	Array': 	RⁿᕽⁿᐧRⁿ,
			'Matrix	ᕁ	Array': 	RⁿᕽⁿᐧRⁿ,
			
			'Array	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Array	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Array	ᐧꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,
			'Array	ᕁꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,

		// MATRIX, ARRAY HACK - vector 4 array is confused for matrix2
			'Matrix	ᐧ	Matrix2': 	RⁿᕽⁿᐧRⁿ,
			'Matrix	ᕁ	Matrix2': 	RⁿᕽⁿᐧRⁿ,
			
			'Matrix2	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Matrix2	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Matrix2	ᐧꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,
			'Matrix2	ᕁꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,

		// MATRIX, VECTOR2
			'Matrix	ᐧ	Vector2': 	RⁿᕽⁿᐧRᒾ,
			'Matrix	ᕁ	Vector2': 	RⁿᕽⁿᐧRᒾ,
			
			'Vector2	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᒾ),
			'Vector2	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᒾ),

		// MATRIX, VECTOR3
			'Matrix	ᐧ	Vector3': 	RⁿᕽⁿᐧRᵌ,
			'Matrix	ᕁ	Vector3': 	RⁿᕽⁿᐧRᵌ,
			
			'Vector3	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᵌ),
			'Vector3	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᵌ),

		// MATRIX, VECTOR4
			'Matrix	ᐧ	Vector4': 	RⁿᕽⁿᐧRᶣ,
			'Matrix	ᕁ	Vector4': 	RⁿᕽⁿᐧRᶣ,
			
			'Vector4	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᶣ),
			'Vector4	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᶣ),

	// MATRIX, MATRIX -----------------------------
		// MATRIX2
		//	'Matrix2	ᐩ	Matrix2': 	RⁿᐩRⁿ,
		//	'Matrix2	ᐨ	Matrix2': 	RⁿᐨRⁿ,
		//	'Matrix2	ᐧ	Matrix2': 	RᒾᕽᒾᐧRᒾᕽᒾ,
		//	'Matrix2	ᕁ	Matrix2': 	RᒾᕽᒾᐧRᒾᕽᒾ,
		//	'Matrix2	ᐤ	Matrix2': 	RⁿᐤRⁿ,
		//	'Matrix2	ᐩꘌ	Matrix2': 	RⁿᐩꘌRⁿ,
		//	'Matrix2	ᐨꘌ	Matrix2': 	RⁿᐨꘌRⁿ,
		//	'Matrix2	ᐧꘌ	Matrix2': 	RᒾᕽᒾᐧꘌRᒾᕽᒾ,
		//	'Matrix2	ᕁꘌ	Matrix2': 	RᒾᕽᒾᐧꘌRᒾᕽᒾ,
		//	'Matrix2	ᐤꘌ	Matrix2': 	RⁿᐤꘌRⁿ,
		//	'Matrix2	ꘌ	Matrix2': 	RⁿꘌRⁿ,
		//	'Matrix2	ꘌ	Undefined': ꘌRⁿ,
		//	'Matrix2	ꘌꘌ	Matrix2': 	RⁿꘌꘌRⁿ,
		// MATRIX3
			'Matrix3	ᐩ	Matrix3': 	RⁿᐩRⁿ,
			'Matrix3	ᐨ	Matrix3': 	RⁿᐨRⁿ,
			'Matrix3	ᐧ	Matrix3': 	RᵌᕽᵌᐧRᵌᕽᵌ,
			'Matrix3	ᕁ	Matrix3': 	RᵌᕽᵌᐧRᵌᕽᵌ,
			'Matrix3	ᐤ	Matrix3': 	RⁿᐤRⁿ,
			'Matrix3	ᐩꘌ	Matrix3': 	RⁿᐩꘌRⁿ,
			'Matrix3	ᐨꘌ	Matrix3': 	RⁿᐨꘌRⁿ,
			'Matrix3	ᐧꘌ	Matrix3': 	RᵌᕽᵌᐧꘌRᵌᕽᵌ,
			'Matrix3	ᕁꘌ	Matrix3': 	RᵌᕽᵌᐧꘌRᵌᕽᵌ,
			'Matrix3	ᐤꘌ	Matrix3': 	RⁿᐤꘌRⁿ,
			'Matrix3	ꘌ	Matrix3': 	RⁿꘌRⁿ,
			'Matrix3	ꘌ	Undefined': ꘌRⁿ,
			'Matrix3	ꘌꘌ	Matrix3': 	RⁿꘌꘌRⁿ,

		// MATRIX4
			'Matrix4	ᐩ	Matrix4': 	RⁿᐩRⁿ,
			'Matrix4	ᐨ	Matrix4': 	RⁿᐨRⁿ,
			'Matrix4	ᐧ	Matrix4': 	RᶣᕽᶣᐧRᶣᕽᶣ,
			'Matrix4	ᕁ	Matrix4': 	RᶣᕽᶣᐧRᶣᕽᶣ,
			'Matrix4	ᐤ	Matrix4': 	RⁿᐤRⁿ,
			'Matrix4	ᐩꘌ	Matrix4': 	RⁿᐩꘌRⁿ,
			'Matrix4	ᐨꘌ	Matrix4': 	RⁿᐨꘌRⁿ,
			'Matrix4	ᐧꘌ	Matrix4': 	RᶣᕽᶣᐧꘌRᶣᕽᶣ,
			'Matrix4	ᕁꘌ	Matrix4': 	RᶣᕽᶣᐧꘌRᶣᕽᶣ,
			'Matrix4	ᐤꘌ	Matrix4': 	RⁿᐤꘌRⁿ,
			'Matrix4	ꘌ	Matrix4': 	RⁿꘌRⁿ,
			'Matrix4	ꘌ	Undefined': ꘌRⁿ,
			'Matrix4	ꘌꘌ	Matrix4': 	RⁿꘌꘌRⁿ,

		// MATRIX OF SIZE NxN
			'Matrix	ᐩ	Matrix': 		RⁿᕽⁿᐩRⁿᕽⁿ,
			'Matrix	ᐨ	Matrix': 		RⁿᕽⁿᐨRⁿᕽⁿ,
			'Matrix	ᐧ	Matrix': 		RⁿᕽⁿᐧRⁿᕽⁿ,
			'Matrix	ᕁ	Matrix': 		RⁿᕽⁿᐧRⁿᕽⁿ,
			'Matrix	ᐤ	Matrix': 		RⁿᕽⁿᐤRⁿᕽⁿ,
			'Matrix	ᐩꘌ	Matrix': 		RⁿᕽⁿᐩꘌRⁿᕽⁿ,
			'Matrix	ᐨꘌ	Matrix': 		RⁿᕽⁿᐨꘌRⁿᕽⁿ,
		//	'Matrix	ᐧꘌ	Matrix': 		RⁿᕽⁿᐧꘌRⁿᕽⁿ, 	// WIP
		//	'Matrix	ᕁꘌ	Matrix': 		RⁿᕽⁿᐧꘌRⁿᕽⁿ,	// WIP
			'Matrix	ᐤꘌ	Matrix': 		RⁿᕽⁿᐤꘌRⁿᕽⁿ,
			'Matrix	ꘌ	Matrix': 		RⁿᕽⁿꘌRⁿᕽⁿ,
			'Matrix	ꘌ	Undefined': 	ꘌRⁿᕽⁿ,
			'Matrix	ꘌꘌ	Matrix': 		RⁿᕽⁿꘌꘌRⁿᕽⁿ,

			// TODO: MatrixN * Matrix

	});
})();
