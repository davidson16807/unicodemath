'use strict';
function Rᵢᵢⱼⱼ(a){
	var i, j, li = a.length, lj = a[0].length;
	
	var aᵢ, aᵢⱼ;

	var result = 0;
	for (i = 0; i < li; i++) {
		aᵢ = a[i];
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			result += aᵢⱼ*aᵢⱼ;
		}
	}
	return result;
}

function RᵢₖꘌRᵢⱼᐧRₖⱼ(result, a,b) {
	if(a[0].length !== b[0].length){
		throw('dimension mismatch' + a[0].length + b[0].length)
	}

	var i, j, k, li=a.length, lk=b.length, lj=a[0].length;
	
	var aᵢ, bₖ;

	var resultᵢ, resultᵢₖ;
	for (i = 0; i < li; i++) {
		aᵢ = a[i];

		resultᵢ = new Array(lk);
		result[i] = resultᵢ;
		for (k = 0; k < lk; k++) {
			bₖ = b[k];

			resultᵢₖ = 0;
			for (j = 0; j < lj; j++) {
				resultᵢₖ += aᵢ[j] * bₖ[j];
			}
			resultᵢ[k] = resultᵢₖ;
		}
	}
}
function RᵢⱼᐧRⱼₖ(a,b){
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
function RᵢⱼᐧRₖⱼ(a,b){
	if(a[0].length !== b[0].length){
		throw('dimension mismatch' + a[0].length + b[0].length)
	}

	var i, j, k, li=a.length, lk=b.length, lj=a[0].length;
	
	var aᵢ, bₖ;

	var result = new Array(li);
	var resultᵢ, resultᵢₖ;
	for (i = 0; i < li; i++) {
		aᵢ = a[i];

		resultᵢ = new Array(lk);
		result[i] = resultᵢ;
		for (k = 0; k < lk; k++) {
			bₖ = b[k];

			resultᵢₖ = 0;
			for (j = 0; j < lj; j++) {
				resultᵢₖ += aᵢ[j] * bₖ[j];
			}
			resultᵢ[k] = resultᵢₖ;
		}
	}
	return result;
}
function RᵢⱼᐧRᵢₖ(a,b){
	var i, j, k, li=a.length, lj=b.length, lk=b[0].length;
	
	var aᵢ, bᵢ;

	var result = [];
	var resultᵢ, resultᵢₖ;
	for (j = 0; j < lj; j++) {
		aᵢ = a[i];
		bᵢ = b[i];

		resultᵢ = [];
		for (k = 0; k < lk; k++) {
		result.push(resultᵢ);
			resultᵢₖ = 0;
			for (i = 0; i < li; i++) {
				resultᵢₖ += aᵢ[j] * bᵢ[k];
			}
			resultᵢ.push(resultᵢₖ);
		}
	}
	return result;
}

function RᵢⱼₖᐧꘌR(a,b){
	var i, j, k, li,lj,lk;
	
	var aᵢ, aᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];

			for (k = 0; k<lk; k++) {
				aᵢⱼ[k] *= b;
			}
		}
	}
	return a;
}

function RᵢⱼₖᐩꘌRᵢⱼₖ(a,b){
	var i, j, k, li,lj,lk;
	
	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			for (k = 0; k<lk; k++) {
				aᵢⱼ[k] += bᵢⱼ[k];
			}
		}
	}
	return a;
}
function RᵢⱼₖᐨꘌRᵢⱼₖ(a,b){
	var i, j, k, li,lj,lk;
	
	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			for (k = 0; k<lk; k++) {
				aᵢⱼ[k] -= bᵢⱼ[k];
			}
		}
	}
	return a;
}
function RᵢⱼₖᐤꘌRᵢⱼₖ(a,b){
	var i, j, k, li,lj,lk;
	
	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			for (k = 0; k<lk; k++) {
				aᵢⱼ[k] *= bᵢⱼ[k];
			}
		}
	}
	return a;
}
function RᵢⱼₖꘌRᵢⱼₖ(a,b){
	var i, j, k, li,lj,lk;
	
	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			for (k = 0; k<lk; k++) {
				aᵢⱼ[k] = bᵢⱼ[k];
			}
		}
	}
	return a;
}

function RᐧRᵢⱼₖ(b,a) {
	return RᵢⱼₖᐧR(a, b);
}
function RᵢⱼₖᐧR(a, b){
	var i, j, k, li,lj,lk;

	var aᵢ, aᵢⱼ;

	var result = [];
	var resultᵢ, resultᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];

		resultᵢ = [];
		result.push(resultᵢ);

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];

			resultᵢⱼ = [];
			resultᵢ.push(resultᵢⱼ);

			for (k = 0; k<lk; k++) {
				resultᵢⱼ[k] = aᵢⱼ[k] * b;
			}
		}
	}
	return result;
}

function RᵢⱼₖᐩRᵢⱼₖ(a, b){
	var i, j, k, li,lj,lk;

	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	var result = [];
	var resultᵢ, resultᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		resultᵢ = [];
		result.push(resultᵢ);

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			resultᵢⱼ = [];
			resultᵢ.push(resultᵢⱼ);

			for (k = 0; k<lk; k++) {
				resultᵢⱼ[k] = aᵢⱼ[k] + bᵢⱼ[k];
			}
		}
	}
	return result;
}

function RᵢⱼₖᐨRᵢⱼₖ(a, b){
	var i, j, k, li,lj,lk;

	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	var result = [];
	var resultᵢ, resultᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		resultᵢ = [];
		result.push(resultᵢ);

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			resultᵢⱼ = [];
			resultᵢ.push(resultᵢⱼ);

			for (k = 0; k<lk; k++) {
				resultᵢⱼ[k] = aᵢⱼ[k] - bᵢⱼ[k];
			}
		}
	}
	return result;
}

function ꘌRᵢⱼₖ(a){
	var i, j, k, li,lj,lk;

	var aᵢ, aᵢⱼ;

	var result = [];
	var resultᵢ, resultᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];

		resultᵢ = [];
		result.push(resultᵢ);

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];

			resultᵢⱼ = [];
			resultᵢ.push(resultᵢⱼ);

			for (k = 0; k<lk; k++) {
				resultᵢⱼ[k] = aᵢⱼ[k];
			}
		}
	}
	return result;
}
function RᵢⱼₖᐤRᵢⱼₖ(a, b){
	var i, j, k, li,lj,lk;

	var aᵢ, aᵢⱼ;
	var bᵢ, bᵢⱼ;

	var result = [];
	var resultᵢ, resultᵢⱼ;

	li = a.length;
	for (var i = 0; i < li; i++) {
		aᵢ = a[i];
		bᵢ = b[i];

		resultᵢ = [];
		result.push(resultᵢ);

		lj=aᵢ.length, lk=aᵢ[0].length;
		for (j = 0; j < lj; j++) {
			aᵢⱼ = aᵢ[j];
			bᵢⱼ = bᵢ[j];

			resultᵢⱼ = [];
			resultᵢ.push(resultᵢⱼ);

			for (k = 0; k<lk; k++) {
				resultᵢⱼ[k] = aᵢⱼ[k] * bᵢⱼ[k];
			}
		}
	}
	return result;
}

function Rᵢⱼₖꘌdf〳dXᵢⱼₖ(Y, f, X, dX) {
	var i, j, k, li,lj,lk;

	var Xᵢ, Xᵢⱼ;
	var Yᵢ, Yᵢⱼ;

	var XᐩdX = ꘌRⁿ(X);
	var XᵢᐩdX, XᵢⱼᐩdX;

	var fX = f(X);

	li = X.length;
	for (var i = 0; i < li; i++) {
		Xᵢ = X[i];
		Yᵢ = Y[i];

		XᵢᐩdX = ꘌRⁿ( Xᵢ );
		XᐩdX[i] = XᵢᐩdX;
		XᵢⱼᐩdX = ꘌRⁿ( Xᵢ[0] );

		lj=Xᵢ.length, lk=Xᵢ[0].length;
		for (j = 0; j < lj; j++) {
			Xᵢⱼ = Xᵢ[j];
			Yᵢⱼ = Yᵢ[j];

			RⁿꘌRⁿ( XᵢⱼᐩdX, Xᵢⱼ );
			XᵢᐩdX[j] = XᵢⱼᐩdX;

			for (k = 0; k<lk; k++) {
				XᵢⱼᐩdX[k] 	+= dX;

				Yᵢⱼ[k] 		= ( f(XᐩdX) - fX ) / dX;
				
				XᵢⱼᐩdX[k] 	-= dX;
			}

			XᵢᐩdX[j] = Xᵢⱼ;
		}
		XᐩdX[i] = Xᵢ;
	}
}
function dfᵢᐤᐧᐧᐧᐤfₙ〳dx(functions, derivatives) {
	derivatives[i]( functions.reduce( function(g,f){ return (f(g)) }) );
}