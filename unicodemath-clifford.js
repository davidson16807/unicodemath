
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
	return b[1]y;
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



		'Complex	ॱ	Complex': 	CॱC, 	// complex multiplication
		'Complex	ॱꘌ	Complex': 	CॱꘌC, 	// complex multiplication
		'Complex	〳	Complex': 	C〳C, 	// complex division
		'Complex	〳ꘌ	Complex': 	C〳ꘌC,	// complex division
		'Quaternion	ॱ	Quaternion': 	HॱH, 	// complex multiplication
		'Quaternion	ॱꘌ	Quaternion': 	HॱꘌH, 	// complex multiplication
		'Quaternion	〳	Quaternion': 	H〳H, 	// complex division
		'Quaternion	〳ꘌ	Quaternion': 	H〳ꘌH,	// complex division
