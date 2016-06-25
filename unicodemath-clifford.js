
// 	(R,C)->C OPERATIONS
function RᐩC		(a,b) 	{ return ːᕮC(	a + b[1],		b.xy			); }
function RᐨC		(a,b) 	{ return ːᕮC(	a - b[1],		b.xy			); }
function RᐧC		(a,b) 	{ return ːᕮC(	a * b[1],	a * b.xy			); }

// 	(C,R)->C OPERATIONS
function ᐨC		(a) 	{ return ːᕮC(	-a[1],		-a.xy			); }
function CᐩR		(a,b) 	{ return ːᕮC(	a[1] + b,	a.xy			); }
function CᐨR		(a,b) 	{ return ːᕮC(	a[1] - b,	a.xy			); }
function CᐧR		(a,b) 	{ return ːᕮC(	a[1] * b,	a.xy * b			); }
function C〳R	(a,b) 	{ return ːᕮC(	a[1] / b,	a.xy / b		); }
function ᐨꘌC		(a,b) 	{ return 		a[1] *=-1;	a.xy *=-1;}
function CᐩꘌR	(a,b) 	{ return 		a[1] += b;					}
function CᐨꘌR	(a,b) 	{ return 		a[1] -= b;					}
function CᐧꘌR	(a,b) 	{ return 		a[1] *= b;	a.xy *= b;		}
function C〳ꘌR	(a,b) 	{ return 		a[1] /= b;	a.xy /= b;		}

// 	(C,C)->C OPERATIONS
function CᐩC		(a,b) 	{ return ːᕮC(	a[1] +  b[1],	a.xy +  b.xy	); }
function CᐨC		(a,b) 	{ return ːᕮC(	a[1] -  b[1],	a.xy -  b.xy	); }
function CᐩꘌC	(a,b) 	{ return 		a[1] += b[1];	a.xy += b.xy;	}
function CᐨꘌC	(a,b) 	{ return 		a[1] -= b[1];	a.xy -= b.xy;	}
function CꘌC	(a,b) 	{ return 		a[1]  = b[1];	a.xy  = b.xy;	}
function CꘌꘌC	(a,b) 	{ return ːᕮC(	a[1] == b[1]&&a.xy == b.xy		); }

function ǀCǀ	(a)		{ return ᛇ(		a[1] * a[1] +	a.xy * a.xy		); }
function Cˆ		(a)		{ return 		C〳R 	(a, ǀCǀ(a));			}	
function Cˆꘌ	(a)		{ return 		C〳ꘌR 	(a, ǀCǀ(a));			}	

// COMPLEX MULTIPLICATION -----------------------------------------
ːᕮC = xᐩyi = aːaˆᕮC = function(a,b) {
	if (ᕮR(a) && b === void 0){ 
		return {1:a.x, xy:b.y}
	} else {
		return {1:a, xy:b};
	}
}
ᕮC = aˆᕮC = function(a) {
	return a[1] !== void 0 && a.xy !== void 0 && a.yz === void 0;
}
function ˣᛇᐨ1 (a) {
	return { 1: Math.cos(π/a) , xy: Math.sin(π/a) };
}
function Re (b) {
	return b[1];
}
function Im (bˆ) {
	return b[1];
}
// complex multiplication
function CॱC(w, z) {
	a = w[1];
	b = w.xy;
	c = z[1];
	d = z.xy;
	return ːᕮC(	a*c - b*d, 
				a*d + b*c );
}
// complex division
function C〳C (w,z) {
	a = w[1];
	b = w.xy;
	c = z[1];
	d = z.xy;
	var cᒾᐩdᒾ = c*c + d*d;
	return ːᕮC(	(a*c+b*d) / cᒾᐩdᒾ, 
				(b*c-a*d) / cᒾᐩdᒾ );
}
function R〳C (w,z) {
	a = w;
	b = 0;
	c = z[1];
	d = z.xy;
	var cᒾᐩdᒾ = c*c + d*d;
	return ːᕮC(	(a*c+b*d) / cᒾᐩdᒾ, 
				(b*c-a*d) / cᒾᐩdᒾ );
}
// in-place complex multiplication
function CॱꘌC(w, z) {
	a = w[1];
	b = w.xy;
	c = z[1];
	d = z.xy;
	w[1] = a*c - b*d;
	x.xy = a*d + b*c;
}
// in-place complex division
function C〳ꘌC (w,z) {
	a = w[1];
	b = w.xy;
	c = z[1];
	d = z.xy;
	var cᒾᐩdᒾ = c*c + d*d;
	w[1] = (a*c+b*d) / cᒾᐩdᒾ;
	w.xy = (b*c-a*d) / cᒾᐩdᒾ;
}



UnicodeMath.add_overloads({
	'Complex	ᐩ	Complex': 	CᐩC, 	// complex multiplication
	'Complex	ᐨ	Complex': 	CᐨC, 	// complex multiplication
	'Complex	ᐧ	Complex': 	CॱC, 	// complex multiplication
	'Complex	ॱ	Complex': 	CॱC, 	// complex multiplication
	'Complex	〳	Complex': 	C〳C, 	// complex division
	'Complex	ᐧꘌ	Complex': 	CॱꘌC, 	// complex multiplication
	'Complex	ॱꘌ	Complex': 	CॱꘌC, 	// complex multiplication
	'Complex	〳ꘌ	Complex': 	C〳ꘌC,	// complex division
});



// QUATERNION MULTIPLICATION -----------------------------------------

function ːᕮH		(s,a,b,c) 	{ return	{	1:s, xy:a, yz:b, zx:c 	}; }
aˆꓽaˆᕮR4 = aᐩbᐧiˆᐩcᐧjˆᐩdᐧkˆ	= ːᕮH;
aˆᕮH = ᕮH = function(q) {
	return q.x !== void 0 && q.y !== void 0 && q.z !== void 0 && q.w === void 0;
}

var iˆ = ːᕮH(0,1,0,0);
var jˆ = ːᕮH(0,0,1,0);
var kˆ = ːᕮH(0,0,0,1);
	
// 	(R,H)->H OPERATIONS
function RᐩH		(a,b) 	{ return ːᕮH(	a + b[1],		b.xy,		b.yz, 		b.zx 	); }
function RᐨH		(a,b) 	{ return ːᕮH(	a - b[1],		b.xy,		b.yz, 		b.zx 	); }
function RᐧH		(a,b) 	{ return ːᕮH(	a * b[1],	a * b.xy,	a * b.yz, 	a * b.zx 	); }
	
// 	(H,R)->H OPERATIONS
function ᐨH		(a) 	{ return ːᕮH(	-a[1],		-a.xy,		-a.yz, 		-a.zx 		); }
function HᐩR		(a,b) 	{ return ːᕮH(	a[1] + b,	a.xy,		a.yz,	 	a.zx	 	); }
function HᐨR		(a,b) 	{ return ːᕮH(	a[1] - b,	a.xy,		a.yz,	 	a.zx	 	); }
function HᐧR		(a,b) 	{ return ːᕮH(	a[1] * b,	a.xy * b,	a.yz * b, 	a.zx * b 	); }
function H〳R	(a,b) 	{ return ːᕮH(	a[1] / b,	a.xy / b,	a.yz / b, 	a.zx / b 	); }
function ᐨꘌH		(a,b) 	{ return 		a[1] *=-1;	a.xy *=-1;	a.yz *=-1;	a.zx *=-1;	}
function HᐩꘌR	(a,b) 	{ return 		a[1] += b;										}
function HᐨꘌR	(a,b) 	{ return 		a[1] -= b;										}
function HᐧꘌR	(a,b) 	{ return 		a[1] *= b;	a.xy *= b;	a.yz *= b;	a.zx *= b;	}
function H〳ꘌR	(a,b) 	{ return 		a[1] /= b;	a.xy /= b;	a.yz /= b;	a.zx /= b;	}
	
// 	(H,H)->H OPERATIONS
function HᐩH		(a,b) 	{ return ːᕮH(	a[1] +  b[1],	a.xy +  b.xy,	a.yz +  b.yz,	a.zx +  b.zx 	); }
function HᐨH		(a,b) 	{ return ːᕮH(	a[1] -  b[1],	a.xy -  b.xy,	a.yz -  b.yz,	a.zx -  b.zx 	); }
function HᐤH		(a,b) 	{ return ːᕮH(	a[1] *  b[1],	a.xy *  b.xy,	a.yz *  b.yz,	a.zx *  b.zx 	); }
function HᐩꘌH	(a,b) 	{ return 		a[1] += b[1];	a.xy += b.xy;	a.yz += b.yz;	a.zx += b.zx;	}
function HᐨꘌH	(a,b) 	{ return 		a[1] -= b[1];	a.xy -= b.xy;	a.yz -= b.yz;	a.zx -= b.zx;	}
function HᐤꘌH	(a,b) 	{ return 		a[1] *= b[1];	a.xy *= b.xy;	a.yz *= b.yz;	a.zx *= b.zx;	}
function HꘌH	(a,b) 	{ return 		a[1]  = b[1];	a.xy  = b.xy;	a.yz  = b.yz;	a.zx  = b.zx;	}

function HꘌꘌH	(a,b) 	{ return 		a[1] == b[1]&&a.xy == b.xy&&a.yz == b.yz&&a.zx == b.zx 	 ; }
function ǀHǀ	(a)		{ return  ᛇ(	a[1] * a[1] +	a.xy * a.xy +	a.yz * a.yz + a.zx * a.zx	); }
function Hˆ		(a)		{ return 		H〳R 	(a, ǀHǀ(a));		}	
function Hˆꘌ	(a)		{ return 		H〳ꘌR 	(a, ǀHǀ(a));		}	


// Quaternion multiplication
function HॱH(q,r) {
	var qxy = q.xy;
	var qyz = q.yz;
	var qzx = q.zx;
	var q1 = q[1];
	
	var rxy = r.xy;
	var ryz = r.yz;
	var rzx = r.zx;
	var r1 = r[1];
	
	return ːᕮH(	qxy*rxy - qyz*ryz - qzx*rzx - q1*r1,
				qxy*ryz + qyz*rxy + qzx*r1 - q1*rzx,
				qxy*rzx - qyz*r1 + qzx*rxy + q1*ryz,
				qxy*r1  + qyz*rzx - qzx*ryz + q1*rxy	);
}
// Quaternion division
function H〳H(q,r) {
	var qxy = q.xy;
	var qyz = q.yz;
	var qzx = q.zx;
	var q1 = q[1];
	
	var rxy = r.xy;
	var ryz = r.yz;
	var rzx = r.zx;
	var r1 = r[1];
	
	var ǀrǀᒾ = rxy*rxy + ryz*ryz + rzx*rzx + r1*r1;
	
	return ːᕮH(	(rxy*qxy + ryz*qyz + rzx*qzx + r1*q1)		/ 	ǀrǀᒾ,
				(rxy*qyz - ryz*qxy - rzx*q1  + r1*qzx)		/ 	ǀrǀᒾ,
				(rxy*qzx + ryz*q1  - rzx*qxy - r1*qyz)		/ 	ǀrǀᒾ,
				(rxy*q1  - ryz*qzx + rzx*qyz - r1*qxy)		/ 	ǀrǀᒾ		);
}
// in-place Quaternion multiplication
function HॱꘌH(q,r) {
	var qxy = q.xy;
	var qyz = q.yz;
	var qzx = q.zx;
	var q1 = q[1];
	
	var rxy = r.xy;
	var ryz = r.yz;
	var rzx = r.zx;
	var r1 = r[1];
	
	var sx = qxy*rxy - qyz*ryz - qzx*rzx - q1*r1;
	var sy = qxy*ryz + qyz*rxy + qzx*r1 - q1*rzx;
	var sz = qxy*rzx - qyz*r1 + qzx*rxy + q1*ryz;
	var sw = qxy*r1 + qyz*rzx - qzx*ryz + q1*rxy;

	q.xy = sx;
	q.yz = sy;
	q.zx = sz;
	q[1] = sw;
}
// in-place Quaternion division
function H〳ꘌH(q,r) {
	var qxy = q.xy;
	var qyz = q.yz;
	var qzx = q.zx;
	var q1 = q[1];
	
	var rxy = r.xy;
	var ryz = r.yz;
	var rzx = r.zx;
	var r1 = r[1];
	
	var ǀrǀᒾ = rxy*rxy + ryz*ryz + rzx*rzx + r1*r1;
	
	var sx = rxy*qxy + ryz*qyz + rzx*qzx + r1*q1		/ 	ǀrǀᒾ ;
	var sy = rxy*qyz - ryz*qxy - rzx*q1 + r1*qzx		/ 	ǀrǀᒾ ;
	var sz = rxy*qzx + ryz*q1 - rzx*qxy - r1*qyz		/ 	ǀrǀᒾ ;
	var sw = rxy*q1 - ryz*qzx + rzx*qyz - r1*qxy		/ 	ǀrǀᒾ ;

	q.xy = sx;
	q.yz = sy;
	q.zx = sz;
	q[1] = sw;
}



UnicodeMath.add_overloads({
	'Quaternion	ॱ	Quaternion': 	HॱH, 	// complex multiplication
	'Quaternion	ॱꘌ	Quaternion': 	HॱꘌH, 	// complex multiplication
	'Quaternion	〳	Quaternion': 	H〳H, 	// complex division
	'Quaternion	〳ꘌ	Quaternion': 	H〳ꘌH,	// complex division
});



function ːᕮGᵌ(s,x,y,z,xy,yz,zx,xyz) 	{ 
	return bases = {
		1: 		s	|| 0,
		x: 		x	|| 0,
		y: 		y	|| 0,
		z: 		z	|| 0,
		xy: 	xy	|| 0,
		yz: 	yz	|| 0,
		zx: 	zx	|| 0,
		xyz: 	xyz	|| 0
	};
}

var Gᵌ = (function () {
	var bases = [
		'1',
		'x', 	'y',	'z',
		'xy', 	'yz',	'zx',
		'xyz'];
	var sign = {};
	var simplification = {};
	function simplify(input) {
		var _simplification = {
			'yx':  '-xy',
			'zy':  '-yz',
			'xz':  '-zx',
			'xzy':'-xyz',
			'yxz':'-xyz',
			'zyx':'-xyz',
			'yzx': 'xyz',
			'zxy': 'xyz'
		};
		var output_basis = input.replace('1', '');
		var output_sign = 1;
		while(true) {
			var removed = [];
			for (var i = 0; i < output_basis.length; i++) {
				for (var j = i+1; j < output_basis.length; j++) {
					if (output_basis[i] === output_basis[j]) { 
						output_basis = output_basis.slice(0, j) + output_basis.slice(j+1);
						output_basis = output_basis.slice(0, i) + output_basis.slice(i+1);
						output_sign *= (j - i) % 2 == 1? 1: -1;
						i--;
						break;
					}
				}
			}
			if (removed.length == 0) { 	break; }
		}
		if (_simplification[output_basis] !== void 0) {
			output_basis = _simplification[output_basis];
		}
		if (output_basis[0] == '-') {
			output_basis = output_basis.slice(1);
			output_sign *= -1;
		}
		output_basis = output_basis || '1';
		sign[input] = output_sign;
		simplification[input] = output_basis;
		return (output_sign > 0? '':'-') + output_basis;
	}
	for (var i = 0; i < bases.length; i++) {
		for (var j = 0; j < bases.length; j++) {
			simplify(bases[i]+bases[j]);
		}
	}
	console.log(simplification);
	// NOTE: The following is effectively performing the product between two sums:
	// ( aˣeˣ	+	 			( bˣeˣ	 +	
	//	 aʸeʸ	+				  bʸeʸ	 +	
	//	 aᶻeᶻ	+				  bᶻeᶻ	 +	
	//	 aˣʸeˣʸ	+		  *		  bˣʸeˣʸ +	
	//	 aʸᶻeʸᶻ	+				  bʸᶻeʸᶻ +	
	//	 aᶻˣeᶻˣ	+				  bᶻˣeᶻˣ +	
	//	 aˣʸᶻeˣʸᶻ  )			  bˣʸᶻeˣʸᶻ  )
	// Where e has the following properties:
	//	eˣeˣ = 1
	//	eˣeʸ = -eˣeʸ
	function _GᵌᐧGᵌ (a,b) {
		var eᵃ, eᵇ;
		var product_basis, product_factor;
		product = {};

		for (var i = 0; i < bases.length; i++) {
			eᵃ = bases[i];
			if (!a[eᵃ]) { continue; }
			for (var j = 0; j < bases.length; j++) {
				eᵇ = bases[j];
				if (!b[eᵇ]) { continue; }
				
				product_basis 	= simplification[eᵃ+eᵇ];
				product_factor 	= sign[eᵃ+eᵇ] * (a[eᵃ] || 0) * (b[eᵇ] || 0);

				product[product_basis] = product[product_basis] || 0;
				product[product_basis] += product_factor;
			}
		}
		return product;
	}
	GᵌᐧGᵌ = _GᵌᐧGᵌ;
	RᐩGᵌ = function (a,b) {
		return GᵌᐩGᵌ({1:a}, b);
	};
	RᐨGᵌ = function (a,b) {
		return GᵌᐨGᵌ({1:a}, b);
	};
	RᐧGᵌ = function (a,b) {
		return GᵌᐧGᵌ({1:a}, b);
	};

	GᵌᐩR = function (a,b) {
		return GᵌᐩGᵌ(a, {1:b});
	};
	GᵌᐨR = function (a,b) {
		return GᵌᐨGᵌ(a, {1:b});
	};
	GᵌᐧR = function (a,b) {
		return GᵌᐧGᵌ(a, {1:b});
	};

	GᵌᐩꘌR = function (a,b) {
		a[1] += b;
	};
	GᵌᐨꘌR = function (a,b) {
		a[1] -= b;
	};
	GᵌᐧꘌR = function (a,b) {
		return GᵌᐧꘌGᵌ(a, {1:b});
	};

	GᵌᐩGᵌ = function (a,b) {
		var sum = {};
		for (var i = 0; i < bases.length; i++) {
			e = bases[i];
			sum[e] = (a[e] || 0) + (b[e] || 0);
		}
		return sum;
	};
	GᵌᐨGᵌ = function (a,b) {
		var difference = {};
		for (var i = 0; i < bases.length; i++) {
			e = bases[i];
			difference[e] = (a[e] || 0) - (b[e] || 0);
		}
		return difference;
	};

	GᵌᐩꘌGᵌ = function (a,b) {
		for (var i = 0; i < bases.length; i++) {
			e = bases[j];
			a[e] = a[e] || 0
			a[e] += b[e] || 0;
		}
	};
	GᵌᐨꘌGᵌ = function (a,b) {
		for (var i = 0; i < bases.length; i++) {
			e = bases[j];
			a[e] = a[e] || 0
			a[e] += b[e] || 0;
		}
	};
	GᵌᐧꘌGᵌ = function (a,b) {
		var product = GᵌᐧGᵌ(a,b);
		for (var i = 0; i < bases.length; i++) {
			a[bases[i]] = product[bases[i]];
		}
	};
	GᵌꘌꘌGᵌ = function (a,b) {
		for (var i = 0; i < bases.length; i++) {
			if (a[bases[i]] !== b[bases[i]]) {
				return false;
			}
		}
		return true;
	};
	GᵌꘌGᵌ = function (a,b) {
		for (var i = 0; i < bases.length; i++) {
			a[bases[i]] = b[bases[i]];
		}
	}
})();

UnicodeMath.add_overloads({

	'Number	ᐩ	Multivector': 			RᐩGᵌ, 	// complex multiplication
	'Number	ᐨ	Multivector': 			RᐨGᵌ, 	// complex multiplication
	'Number	ᐧ	Multivector': 			RᐧGᵌ, 	// complex multiplication
	'Number	ॱ	Multivector': 			RᐧGᵌ, 	// complex multiplication
	'Multivector	ᐩ	Number': 		GᵌᐩR, 	// complex multiplication
	'Multivector	ᐨ	Number': 		GᵌᐨR, 	// complex multiplication
	'Multivector	ᐧ	Number': 		GᵌᐧR, 	// complex multiplication
	'Multivector	ॱ	Number': 		GᵌᐧR, 	// complex multiplication
	'Multivector	ᐩꘌ	Number': 		GᵌᐩꘌR, 	// complex multiplication
	'Multivector	ᐨꘌ	Number': 		GᵌᐨꘌR, 	// complex multiplication
	'Multivector	ᐧꘌ	Number': 		GᵌᐧꘌR, 	// complex multiplication
	'Multivector	ॱꘌ	Number': 		GᵌᐧꘌR, 	// complex multiplication

	'Multivector	ᐩ	Multivector': 	GᵌᐩGᵌ, 	// complex multiplication
	'Multivector	ᐨ	Multivector': 	GᵌᐨGᵌ, 	// complex multiplication
	'Multivector	ᐧ	Multivector': 	GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ॱ	Multivector': 	GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ᐩꘌ	Multivector': 	GᵌᐩꘌGᵌ, 	// complex multiplication
	'Multivector	ᐨꘌ	Multivector': 	GᵌᐨꘌGᵌ, 	// complex multiplication
	'Multivector	ᐧꘌ	Multivector': 	GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ॱꘌ	Multivector': 	GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌ	Multivector': 	GᵌꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌꘌ	Multivector': 	GᵌꘌꘌGᵌ, // complex multiplication

	'Multivector	ᐩ	Vector3': 		GᵌᐩGᵌ, 	// complex multiplication
	'Multivector	ᐨ	Vector3': 		GᵌᐨGᵌ, 	// complex multiplication
	'Multivector	ᐧ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ॱ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ᐩꘌ	Vector3': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Multivector	ᐨꘌ	Vector3': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Multivector	ᐧꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ॱꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌ	Vector3': 		GᵌꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌꘌ	Vector3': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Vector3	ᐩ	Multivector': 		GᵌᐩGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Multivector': 		GᵌᐨGᵌ, 	// complex multiplication
	'Vector3	ᐧ	Multivector': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ॱ	Multivector': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ᐩ	Multivector': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Multivector': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Vector3	ᐧꘌ	Multivector': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ॱꘌ	Multivector': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌ	Multivector': 		GᵌꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌꘌ	Multivector': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Multivector	ᐩ	Quaternion': 	GᵌᐩGᵌ, 	// complex multiplication
	'Multivector	ᐨ	Quaternion': 	GᵌᐨGᵌ, 	// complex multiplication
	'Multivector	ᐧ	Quaternion': 	GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ॱ	Quaternion': 	GᵌᐧGᵌ, 	// complex multiplication
	'Multivector	ᐩꘌ	Quaternion': 	GᵌᐩꘌGᵌ, 	// complex multiplication
	'Multivector	ᐨꘌ	Quaternion': 	GᵌᐨꘌGᵌ, 	// complex multiplication
	'Multivector	ᐧꘌ	Quaternion': 	GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ॱꘌ	Quaternion': 	GᵌᐧꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌ	Quaternion': 	GᵌꘌGᵌ, 	// complex multiplication
	'Multivector	ꘌꘌ	Quaternion': 	GᵌꘌꘌGᵌ, // complex multiplication

	'Quaternion	ᐩ	Multivector': 		GᵌᐩGᵌ, 	// complex multiplication
	'Quaternion	ᐨ	Multivector': 		GᵌᐨGᵌ, 	// complex multiplication
	'Quaternion	ᐧ	Multivector': 		GᵌᐧGᵌ, 	// complex multiplication
	'Quaternion	ॱ	Multivector': 		GᵌᐧGᵌ, 	// complex multiplication
	'Quaternion	ᐩ	Multivector': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Quaternion	ᐨ	Multivector': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Quaternion	ᐧꘌ	Multivector': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Quaternion	ॱꘌ	Multivector': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Quaternion	ꘌ	Multivector': 		GᵌꘌGᵌ, 	// complex multiplication
	'Quaternion	ꘌꘌ	Multivector': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Vector3	ᐩ	Quaternion': 		GᵌᐩGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Quaternion': 		GᵌᐨGᵌ, 	// complex multiplication
	'Vector3	ᐧ	Quaternion': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ॱ	Quaternion': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ᐩꘌ	Quaternion': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Vector3	ᐨꘌ	Quaternion': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Vector3	ᐧꘌ	Quaternion': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ॱꘌ	Quaternion': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌ	Quaternion': 		GᵌꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌꘌ	Quaternion': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Quaternion	ᐩ	Vector3': 		GᵌᐩGᵌ, 	// complex multiplication
	'Quaternion	ᐨ	Vector3': 		GᵌᐨGᵌ, 	// complex multiplication
	'Quaternion	ᐧ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Quaternion	ॱ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Quaternion	ᐩ	Vector3': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Quaternion	ᐨ	Vector3': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Quaternion	ᐧꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Quaternion	ॱꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Quaternion	ꘌ	Vector3': 		GᵌꘌGᵌ, 	// complex multiplication
	'Quaternion	ꘌꘌ	Vector3': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Vector3	ᐩ	Complex': 		GᵌᐩGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Complex': 		GᵌᐨGᵌ, 	// complex multiplication
	'Vector3	ᐧ	Complex': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ॱ	Complex': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ᐩꘌ	Complex': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Vector3	ᐨꘌ	Complex': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Vector3	ᐧꘌ	Complex': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ॱꘌ	Complex': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌ	Complex': 		GᵌꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌꘌ	Complex': 		GᵌꘌꘌGᵌ, // complex multiplication

	'Complex	ᐩ	Vector3': 		GᵌᐩGᵌ, 	// complex multiplication
	'Complex	ᐨ	Vector3': 		GᵌᐨGᵌ, 	// complex multiplication
	'Complex	ᐧ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Complex	ॱ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Complex	ᐩ	Vector3': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Complex	ᐨ	Vector3': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Complex	ᐧꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Complex	ॱꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Complex	ꘌ	Vector3': 		GᵌꘌGᵌ, 	// complex multiplication
	'Complex	ꘌꘌ	Vector3': 		GᵌꘌꘌGᵌ,	// complex multiplication

	'Vector3	ᐩ	Vector3': 		GᵌᐩGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Vector3': 		GᵌᐨGᵌ, 	// complex multiplication
	'Vector3	ᐧ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ॱ	Vector3': 		GᵌᐧGᵌ, 	// complex multiplication
	'Vector3	ᐩ	Vector3': 		GᵌᐩꘌGᵌ, 	// complex multiplication
	'Vector3	ᐨ	Vector3': 		GᵌᐨꘌGᵌ, 	// complex multiplication
	'Vector3	ᐧꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ॱꘌ	Vector3': 		GᵌᐧꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌ	Vector3': 		GᵌꘌGᵌ, 	// complex multiplication
	'Vector3	ꘌꘌ	Vector3': 		GᵌꘌꘌGᵌ,	// complex multiplication

});

