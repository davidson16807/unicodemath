
#define R2_MATCH_MACRO(c,a) 	var c = { x:a.x, y:a.y };
#define R3_MATCH_MACRO(c,a) 	var c = { x:a.x, y:a.y, z:a.z };
#define R4_MATCH_MACRO(c,a) 	var c = { x:a.x, y:a.y, z:a.z, w:a.w };
#define Rn_MATCH_MACRO(c,a) 	var c = Array(a.length);
#define Rnxn_MATCH_MACRO(c,a) __CR__ var c=Array(a.length); var colnum=a[0].length; for(i=a.length; i>0; i--) c[i] = Array(colnum);

#define R2_EQ_R2_OP_R2_MACRO(c,a,op,b) c.x=a.x op b.x; c.y=a.y op b.y;
#define R3_EQ_R3_OP_R3_MACRO(c,a,op,b) c.x=a.x op b.x; c.y=a.y op b.y; c.z=a.z op b.z;
#define R4_EQ_R4_OP_R4_MACRO(c,a,op,b) c.x=a.x op b.x; c.y=a.y op b.y; c.z=a.z op b.z; c.w=a.w op b.w;
#define Rn_EQ_Rn_OP_Rn_MACRO(c,a,op,b)	\
	if(a.length !== b.length)	\
		throw 'Cannot call operator between vectors of size '+a.length+' and '+b.length; \
	for(var i=a.length; i>0; i--) {	c[i] = a[i] op b[i]; } 
#define Rnxn_EQ_Rnxn_OP_Rnxn_MACRO(c, a, op, b) __CR__\
	var i, j, li=a.length, lj=a[0].length, ai, bi, ci; __CR__\
	if(li !== b.length || lj !== b[0].length) __CR__\
		throw 'Cannot call operator between matrices of size '+a.length+'x'+a[0].length' and '+b.length+'x'+b[0].length; __CR__\
	for(i=li; i>0; i--) { ai=a[i]; bi=b[i]; ci=c[i]; for(j=lj; j>0; j--) { ci[j] = ai[j] op bi[j]; } } __CR__


#define R2_EQ_R2_OP_R_MACRO(c,a,op,b) c.x=a.x op b; c.y=a.y op b; 
#define R3_EQ_R3_OP_R_MACRO(c,a,op,b) c.x=a.x op b; c.y=a.y op b; c.z=a.z op b;
#define R4_EQ_R4_OP_R_MACRO(c,a,op,b) c.x=a.x op b; c.y=a.y op b; c.z=a.z op b; c.w=a.w op b;
#define Rn_EQ_Rn_OP_R_MACRO(c,a,op,b) for(var i=a.length; i>0; i--) { c[i] = a[i] op b; }
#define Rnxn_EQ_Rnxn_OP_R_MACRO(c, a, op, b) __CR__\
	var i, j, li=a.length, lj=a[0].length, ai, ci; __CR__\
	for(i=li; i>0; i--) { ai=a[i]; ci=c[i]; for(j=lj; j>0; j--) { ci[j] = ai[j] op b; } } __CR__

#define R2_EQ_R_OP_R2_MACRO(c,a,op,b) c.x=a op b.x; c.y=a op b.y;
#define R3_EQ_R_OP_R3_MACRO(c,a,op,b) c.x=a op b.x; c.y=a op b.y; c.z=a op b.z;
#define R4_EQ_R_OP_R4_MACRO(c,a,op,b) c.x=a op b.x; c.y=a op b.y; c.z=a op b.z; c.w=a op b.w;
#define Rn_EQ_R_OP_Rn_MACRO(c,a,op,b) for(var i=a.length; i>0; i--) { c[i] = a op b[i]; }
#define Rnxn_EQ_R_OP_Rnxn_MACRO(c, a, op, b) __CR__\
	var i, j, li=a.length, lj=a[0].length, ai, ci; __CR__\
	for(i=li; i>0; i--) { ai=a[i]; ci=c[i]; for(j=lj; j>0; j--) { ci[j] = ai[j] op b; } } __CR__






#define Rx_EQ_Rx_OP_Rx_SUITE_MACRO(op, uni, x) \
function R##x##uni##R##x 		(a,b) 	{ R##x##_MATCH_MACRO(c,a)	R##x##_EQ_R##x##_OP_R##x##_MACRO(c, a, op, b) return c; } 	__CR__\
function R##x##uni##__EQ__R##x 	(a,b) 	{ 							R##x##_EQ_R##x##_OP_R##x##_MACRO(a, a, op, b) }				__CR__\
function R##x##__EQ__R##x##uni##R##x(c,a,b)	{ 						R##x##_EQ_R##x##_OP_R##x##_MACRO(c, a, op, b) }				__CR__

#define Rx_EQ_Rx_OP_R_SUITE_MACRO(op, uni, x) \
function R##x##uni##R 			(a,b) 	{ R##x##_MATCH_MACRO(c,a)	R##x##_EQ_R##x##_OP_R_MACRO(c, a, op, b) return c; }	__CR__\
function R##x##uni##__EQ__R 	(a,b) 	{	 						R##x##_EQ_R##x##_OP_R_MACRO(a, a, op, b) }				__CR__\
function R##x##__EQ__R##x##uni##R(c,a,b){ 							R##x##_EQ_R##x##_OP_R_MACRO(c, a, op, b) }				__CR__

#define Rx_EQ_R_OP_Rx_SUITE_MACRO(op, uni, x) \
function R##uni##R##x 			(a,b) 	{ R##x##_MATCH_MACRO(c,a)	R##x##_EQ_R_OP_R##x##_MACRO(c, a, op, b) return c; }	__CR__\
function R__EQ__R##uni##R##x	(c,a,b)	{ 							R##x##_EQ_R_OP_R##x##_MACRO(c, a, op, b) }				__CR__







// ---------------------------------Rᒾ---------------------------------

function ːᕮRᒾ		(x,y) 		{ return	{	x:x,	y:y 	}; }
aꜛꓽaꜛᕮRᒾ = xᐧiꜛᐩyᐧjꜛ	= ːᕮRᒾ;
aꜛᕮRᒾ = ᕮRᒾ = function(aꜛ) {
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z === void 0;
}
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(*, __HADAMARD__, 2)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(+, __ADD__, 2)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(-, __SUB__, 2)

Rx_EQ_Rx_OP_R_SUITE_MACRO	(+, __ADD__, 2)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(-, __SUB__, 2)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(*, __DOT__, 2)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(/, __DIV__, 2)

Rx_EQ_R_OP_Rx_SUITE_MACRO	(+, __ADD__, 2)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(-, __SUB__, 2)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(*, __DOT__, 2)

function ꘌR2 	(a,b) 	{ R2_MATCH_MACRO(c,a) return c; }
function R2ꘌR2 	(a,b) 	{ R2_EQ_R2_OP_R_MACRO(a,b,*,1) }
function ᐨR2 	(a,b) 	{ R2_MATCH_MACRO(c,a) R2_EQ_R_OP_R2_MACRO(c,-1,*,b) return c; }

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
		[xx, xy], 
		[yx, yy], 
	];
}

var Iᒾ = ᒾᕽᒾ(	1, 0, 
			0, 1 );






// ---------------------------------Rᵌ---------------------------------
function ːᕮRᵌ		(x,y,z)	{ return	{	x:x,	y:y, 	z:z 	}; }
aꜛᕮRᵌ = ᕮRᵌ = function(aꜛ)	{
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z !== void 0 && aꜛ.w === void 0;
}
aꜛꓽaꜛᕮRᵌ = xᐧiꜛᐩyᐧjꜛᐩzᐧkꜛ		= ːᕮRᵌ;

Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(*, __HADAMARD__, 3)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(+, __ADD__, 3)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(-, __SUB__, 3)

Rx_EQ_Rx_OP_R_SUITE_MACRO	(+, __ADD__, 3)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(-, __SUB__, 3)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(*, __DOT__, 3)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(/, __DIV__, 3)

Rx_EQ_R_OP_Rx_SUITE_MACRO	(+, __ADD__, 3)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(-, __SUB__, 3)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(*, __DOT__, 3)

function ꘌR3 	(a,b) 	{ R3_MATCH_MACRO(c,a) return c; }
function R3ꘌR3 	(a,b) 	{ R3_EQ_R3_OP_R_MACRO(a,b,*,1) }
function ᐨR3 	(a,b) 	{ R3_MATCH_MACRO(c,a) R3_EQ_R_OP_R3_MACRO(c,-1,*,b) return c; }

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
		[xx, xy, xz],
		[yx, yy, yz],
		[zx, zy, zz]
	];
};
var Iᵌ= ᵌᕽᵌ(	1, 0, 0,
			0, 1, 0,
			0, 0, 1 );
	








// ---------------------------------Rᶣ---------------------------------
function ːᕮRᶣ		(x,y,z,w) 	{ return	{	x:x,	y:y, 	z:z, 	w:w 	}; }
aꜛꓽaꜛᕮR4 = xᐧiꜛᐩyᐧjꜛᐩzᐧkꜛᐩwᐧlꜛ	= ːᕮRᶣ;
aꜛᕮRᶣ = ᕮRᶣ = function(aꜛ) {
	return aꜛ.x !== void 0 && aꜛ.y !== void 0 && aꜛ.z !== void 0 && aꜛ.w === void 0;
}

Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(*, __HADAMARD__, 4)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(+, __ADD__, 4)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(-, __SUB__, 4)

Rx_EQ_Rx_OP_R_SUITE_MACRO	(+, __ADD__, 4)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(-, __SUB__, 4)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(*, __DOT__, 4)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(/, __DIV__, 4)

Rx_EQ_R_OP_Rx_SUITE_MACRO	(+, __ADD__, 4)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(-, __SUB__, 4)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(*, __DOT__, 4)

function ꘌRᶣ 	(a,b) 	{ R4_MATCH_MACRO(c,a) return c; }
function RᶣꘌRᶣ 	(a,b) 	{ R4_EQ_R4_OP_R_MACRO(a,b,*,1) }
function ᐨRᶣ 	(a,b) 	{ R4_MATCH_MACRO(c,a) R4_EQ_R_OP_R4_MACRO(c,-1,*,b) return c; }

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
		[xx, xy, xz, xw],
		[yx, yy, yz, yw],
		[zx, zy, zz, zw],
		[wx, wy, wz, ww]
	];
}
var Iᶣ= ːᕮRᶣᕽᶣ(	1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1 );

// Special case for 3d graphics processing
function RᵌᐧꘌRᶣᕽᶣ (bꜛ, A) {
	//Give a simple variable name to each part of the matrix, a column and row number
	var A0 = A[0], A1 = A[1], A2 = A[2];
	var xx = A0[0], xy = A0[1], xz = A0[2], xw = A0[3];
	var yx = A1[0], yy = A1[1], yz = A1[2], yw = A1[3];
	var zx = A2[0], zy = A2[1], zz = A2[2], zw = A2[3];
	var wx = A3[0], wy = A3[1], wz = A3[2], ww = A3[3];

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

Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(*, __HADAMARD__, n)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(+, __ADD__, n)
Rx_EQ_Rx_OP_Rx_SUITE_MACRO	(-, __SUB__, n)

Rx_EQ_Rx_OP_R_SUITE_MACRO	(+, __ADD__, n)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(-, __SUB__, n)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(*, __DOT__, n)
Rx_EQ_Rx_OP_R_SUITE_MACRO	(/, __DIV__, n)

Rx_EQ_R_OP_Rx_SUITE_MACRO	(+, __ADD__, n)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(-, __SUB__, n)
Rx_EQ_R_OP_Rx_SUITE_MACRO	(*, __DOT__, n)

function ꘌRⁿ 	(a,b) 	{ Rn_MATCH_MACRO(c,a) return c; }
function RⁿꘌRⁿ 	(a,b) 	{ Rn_EQ_Rn_OP_R_MACRO(a,b,*,1) }
function ᐨRⁿ 	(a,b) 	{ Rn_MATCH_MACRO(c,a) Rn_EQ_R_OP_Rn_MACRO(c,-1,*,b) return c; }

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
function RᒾᐧRⁿ	(a,b) 	{ return a.x * b[0]	+	a.y * b[1]									 	}
function RᵌᐧRⁿ	(a,b) 	{ return a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]					 	}
function RᶣᐧRⁿ	(a,b) 	{ return a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]	+ 	a.w * b[3]; 	}
function RⁿᐧRᒾ	(b,a) 	{ return a.x * b[0]	+	a.y * b[1]									 	}
function RⁿᐧRᵌ	(b,a) 	{ return a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]					 	}
function RⁿᐧRᶣ	(b,a) 	{ return a.x * b[0]	+	a.y * b[1]	+	a.z * b[2]	+ 	a.w * b[3]; 	}

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
function RⁿᕽⁿᐧRᒾ	(A,b)	{ return  ꜛ(		RᒾᐧRⁿ(b,A[0]), 	RᒾᐧRⁿ(b,A[1]) 									); }
function RⁿᕽⁿᐧRᵌ	(A,b)	{ return  ꜛ(		RᵌᐧRⁿ(b,A[0]), 	RᵌᐧRⁿ(b,A[1]), 	RᵌᐧRⁿ(b,A[2])					); }
function RⁿᕽⁿᐧRᶣ	(A,b)	{ return  ꜛ(		RᶣᐧRⁿ(b,A[0]), 	RᶣᐧRⁿ(b,A[1]), 	RᶣᐧRⁿ(b,A[2]), 	RᶣᐧRⁿ(b,A[3])	); }
function RⁿᕽⁿᐧRⁿ	(A,b)	{ var result=[];	for(var i=0, li=A.length; i<li; i++) { result.push( RⁿᐧRⁿ(b,A[i]) ) }	return result;	}
function RᒾᐧꘌRⁿᕽⁿ	(a,B)	{ var				x=RᒾᐧRⁿ(a,B[0]),	y=RᒾᐧRⁿ(a,B[1])									; 		a.x=x; a.y=y;  				}
function RᵌᐧꘌRⁿᕽⁿ(a,B)	{ var				x=RᵌᐧRⁿ(a,B[0]),	y=RᵌᐧRⁿ(a,B[1]),	z=RᵌᐧRⁿ(a,B[2])					; 		a.x=x; a.y=y; a.z=z;		}
function RᶣᐧꘌRⁿᕽⁿ(a,B)	{ var				x=RᶣᐧRⁿ(a,B[0]),	y=RᶣᐧRⁿ(a,B[1]),	z=RᶣᐧRⁿ(a,B[2]), w=RᶣᐧRⁿ(a,B[3])	; 		a.x=x; a.y=y; a.z=z; a.w=w;	}
function RⁿᐧꘌRⁿᕽⁿ(a,B)	{ var result=[];	for(var i=0, li=B.length; i<li; i++) { result.push( RⁿᐧRⁿ(a,B[i]) ) }	RⁿꘌRⁿ(a,result);}

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

// 	FUNCTIONAL Rⁿᕽⁿ OPERATIONS
function FᐧRⁿᕽⁿ	(f,B)	{ var result=[];	for(var i=0, li=B.length; i<li; i++) { result.push(	FᐧRⁿ (F, B[i]) ); }			return result;	}
// function FⁿᕽⁿᐤRⁿᕽⁿ(f,a) 	{  } // WIP
function RⁿᕽⁿᐧꘌF(A,f) 	{ 					for(var i=0, li=A.length; i<li; i++) {	RⁿᐧꘌF (A[i], f);		} 						}
// function RⁿᕽⁿᐤꘌFⁿ(a,f)	{  } // WIP

function RⁿᕽⁿᐧRⁿᕽⁿ(a,b){
	var i, j, k, li=a.length, lj=b.length, lk=b[0].length;
	var aᵢ;
	var result = [], resultᵢ, resultᵢₖ;
	for (i = 0; i < li; i++) {
		aᵢ = a[i];
		resultᵢ = [];
		result[i] = resultᵢ;
		for (k = 0; k < lk; k++) {
			resultᵢₖ = 0;
			for (j = 0; j < lj; j++) {
				resultᵢₖ += aᵢ[j] * b[j][k];
			}
			resultᵢ[k] = resultᵢₖ;
		}
	}
	return result;
}
function RⁿᕽⁿᐪꘌRⁿᕽⁿᐧRⁿᕽⁿᐪ (Cᐪ,A,Bᐪ)  {
	var result = [];
	for (var i=0, li=Bᐪ.length; i<li; i++) { 
		result.push( RⁿᕽⁿᐧRⁿ	(A, Bᐪ[i]) ); 
	}

}
function RⁿᕽⁿᐧꘌRⁿᕽⁿᐪ (A,Bᐪ)  {
	var result = [];	
	for (var i=0, li=Bᐪ.length; i<li; i++) { 
		result.push( RⁿᕽⁿᐧRⁿ	(A, Bᐪ[i]) ); 
	}
	for (var i=0, li=result.length; i<li; i++) {	
		A[i] = result[i];
	}
}
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
	'use strict';
	var i, j, li=X.length, lj=X[0].length;
	var XᐩdX = X.slice(0);
	var XᵢᐩdX;
	var result = ⁿᕽⁿ(li, lj);
	var resultᵢ;
	var fX = f(X);
	for (i = 0; i<li; i++) {
		XᵢᐩdX = ꘌRⁿ( X[i] );
		XᐩdX[i] = XᵢᐩdX;
		resultᵢ = result[i];
		for (j = 0; j<lj; j++) {
			XᵢᐩdX[j] += dX;

			resultᵢ[j] = (f(XᐩdX) - fX) / dX ;
			
			XᵢᐩdX[j] -= dX;
		}
		XᐩdX[i] = X[i];
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
		//	'ǀxǀ	Matrix': 		ǀRⁿᕽⁿǀ, // WIP
			'ˆ	Vector2': 			Rᒾˆ,
			'ˆ	Vector3': 			Rᵌˆ,
			'ˆ	Vector4': 			Rᶣˆ,
			'ˆ	Array': 			Rⁿˆ,
			'ˆꘌ	Vector2': 			Rᒾˆꘌ,
			'ˆꘌ	Vector3': 			Rᵌˆꘌ,
			'ˆꘌ	Vector4': 			Rᶣˆꘌ,
			'ˆꘌ	Array': 			Rⁿˆꘌ,
		//	'ᐨᑊ	Matrix': 			Rⁿᕽⁿᐨᑊ, 	// WIP
			'ᐪ	Matrix': 			Rⁿᕽⁿᐪ, 
			
			'ꜛ	Undefined': 	function(_) 	{ return []; },
			'ꜛ	Array': 		function(array)	{ return array; },
			'ꜛ	Vector4':		function(xyzw)	{ return [xyzw.x, xyzw.y, xyzw.z, xyzw.w]; },
			'ꜛ	Vector3':		function(xyz)	{ return [xyz.x, xyz.y, xyz.z]; },
			'ꜛ	Vector2':		function(xy)	{ return [xy.x, xy.y]; },
			'ꜛ	Number': 		function(x) 	{ return [x]; },

			'ᐁ	Function	Vector2	Number': ᐁRᒾ,
			'ᐁ	Function	Vector3	Number': ᐁRᵌ,
			'ᐁ	Function	Vector4	Number': ᐁRᶣ,
			'ᐁ	Function	Array	Number': ᐁRⁿ,
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

		// MATRIX, ARRAY
			'Matrix	ᐧ	Array': 	RⁿᕽⁿᐧRⁿ,
			'Matrix	ᕁ	Array': 	RⁿᕽⁿᐧRⁿ,
			
			'Array	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Array	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRⁿ),
			'Array	ᐧꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,
			'Array	ᕁꘌ	Matrix': 	RⁿᐧꘌRⁿᕽⁿ,

		// MATRIX, VECTOR2
			'Matrix	ᐧ	Vector2': 	RⁿᕽⁿᐧRᒾ,
			'Matrix	ᕁ	Vector2': 	RⁿᕽⁿᐧRᒾ,
			
			'Vector2	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᒾ),
			'Vector2	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᒾ),
			'Vector2	ᐧꘌ	Matrix': 	RᒾᐧꘌRⁿᕽⁿ,
			'Vector2	ᕁꘌ	Matrix': 	RᒾᐧꘌRⁿᕽⁿ,

		// MATRIX, VECTOR3
			'Matrix	ᐧ	Vector3': 	RⁿᕽⁿᐧRᵌ,
			'Matrix	ᕁ	Vector3': 	RⁿᕽⁿᐧRᵌ,
			
			'Vector3	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᵌ),
			'Vector3	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᵌ),
			'Vector3	ᐧꘌ	Matrix': 	RᵌᐧꘌRⁿᕽⁿ,
			'Vector3	ᕁꘌ	Matrix': 	RᵌᐧꘌRⁿᕽⁿ,

		// MATRIX, VECTOR4
			'Matrix	ᐧ	Vector4': 	RⁿᕽⁿᐧRᶣ,
			'Matrix	ᕁ	Vector4': 	RⁿᕽⁿᐧRᶣ,
			
			'Vector4	ᐧ	Matrix': 	_associate(RⁿᕽⁿᐧRᶣ),
			'Vector4	ᕁ	Matrix': 	_associate(RⁿᕽⁿᐧRᶣ),
			'Vector4	ᐧꘌ	Matrix': 	RᶣᐧꘌRⁿᕽⁿ,
			'Vector4	ᕁꘌ	Matrix': 	RᶣᐧꘌRⁿᕽⁿ,

	// MATRIX, MATRIX -----------------------------
		// MATRIX OF SIZE NxN
			'Matrix	ᐨ	Undefined': 	ᐨRⁿᕽⁿ,
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
