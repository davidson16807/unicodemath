
UnicodeMath.add_datatype("THREE.Vector2", 		function(x) { x instanceof THREE.Vector2 });
UnicodeMath.add_datatype("THREE.Vector3", 		function(x) { x instanceof THREE.Vector3 });
UnicodeMath.add_datatype("THREE.Vector4", 		function(x) { x instanceof THREE.Vector4 });
UnicodeMath.add_datatype("THREE.Matrix3", 		function(x) { x instanceof THREE.Matrix3 });
UnicodeMath.add_datatype("THREE.Matrix4", 		function(x) { x instanceof THREE.Matrix4 });
UnicodeMath.add_datatype("THREE.Quaternion", 	function(x) { x instanceof THREE.Quaternion });

UnicodeMath.add_binary('Number',		'ᐩ', 	'THREE.Vector2', function(b,a) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.addScalar(b); 		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐨ', 	'THREE.Vector2', function(b,a) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.addScalar(-b); 		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐧ', 	'THREE.Vector2', function(b,a) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.multiplyScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐩ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.addScalar(b); 		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐨ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.addScalar(-b); 		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐧ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.multiplyScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector2',	'〳', 	'Number',		 function(a,b) { aʹ=new THREE.Vector2(); aʹ.copy(a); aʹ.divideScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐩꘌ', 	'Number',		 function(a,b) { return a.addScalar(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐨꘌ', 	'Number',		 function(a,b) { return a.addScalar(-b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐧꘌ', 	'Number',		 function(a,b) { return a.multiplyScalar(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'〳ꘌ', 	'Number',		 function(a,b) { return a.divideScalar(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ǀxǀꘌ',	'Number',		 function(a,b) { return a.setLength(b); } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐨ', 	'Undefined',	 function(a,b) { a.negate(); } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐩ', 	'THREE.Vector2', function(a,b) { return (new THREE.Vector2()).addVectors(a, b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐨ', 	'THREE.Vector2', function(a,b) { return (new THREE.Vector2()).subVectors(a, b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐧ', 	'THREE.Vector2', function(a,b) { return a.dot(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐩꘌ', 	'THREE.Vector2', function(a,b) { a.add(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ᐨꘌ', 	'THREE.Vector2', function(a,b) { a.sub(b) } );
UnicodeMath.add_binary('THREE.Vector2',	'ꘌꘌ', 	'THREE.Vector2', function(a,b) { a.equals(b); } );
UnicodeMath.add_binary('THREE.Vector2',	'ꘌ', 	'THREE.Vector2', function(a,b) { a.copy(b) } );
UnicodeMath.add_unary ('THREE.Vector2',	'ǀxǀ', 					 function(a)   { a.length(); } );
UnicodeMath.add_unary ('THREE.Vector2',	'ˆ', 					 function(a)   { return aʹ=new THREE.Vector2(); aʹ.copy(a); a.normalize();	return aʹ; } );
UnicodeMath.add_unary ('THREE.Vector2',	'ˆꘌ', 					 function(a)   { a.normalize(); } );

UnicodeMath.add_binary('Number',		'ᐩ', 	'THREE.Vector3', function(b,a) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.addScalar(b); 		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐨ', 	'THREE.Vector3', function(b,a) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.addScalar(-b); 		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐧ', 	'THREE.Vector3', function(b,a) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.multiplyScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐩ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.addScalar(b); 		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐨ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.addScalar(-b); 		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐧ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.multiplyScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	'〳', 	'Number',		 function(a,b) { aʹ=new THREE.Vector3(); aʹ.copy(a); aʹ.divideScalar(b); 	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐩꘌ', 	'Number',		 function(a,b) { return a.addScalar(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐨꘌ', 	'Number',		 function(a,b) { return a.addScalar(-b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐧꘌ', 	'Number',		 function(a,b) { return a.multiplyScalar(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'〳ꘌ', 	'Number',		 function(a,b) { return a.divideScalar(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ǀxǀꘌ',	'Number',		 function(a,b) { return a.setLength(b); } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐨ', 	'Undefined',	 function(a,b) { a.negate(); } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐩ', 	'THREE.Vector3', function(a,b) { return (new THREE.Vector3()).addVectors(a, b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐨ', 	'THREE.Vector3', function(a,b) { return (new THREE.Vector3()).subVectors(a, b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐧ', 	'THREE.Vector3', function(a,b) { return a.dot(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᕁ', 	'THREE.Vector3', function(a,b) { return (new THREE.Vector3()).crossVectors(a, b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐩꘌ', 	'THREE.Vector3', function(a,b) { a.add(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐨꘌ', 	'THREE.Vector3', function(a,b) { a.sub(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ᕁꘌ', 	'THREE.Vector3', function(a,b) { a.cross(b) } );
UnicodeMath.add_binary('THREE.Vector3',	'ꘌꘌ', 	'THREE.Vector3', function(a,b) { a.equals(b); } );
UnicodeMath.add_binary('THREE.Vector3',	'ꘌ', 	'THREE.Vector3', function(a,b) { a.copy(b) } );
UnicodeMath.add_unary ('THREE.Vector3',	'ǀxǀ', 					 function(a)   { a.length(); } );
UnicodeMath.add_unary ('THREE.Vector3',	'ˆ', 					 function(a)   { return aʹ=new THREE.Vector2(); aʹ.copy(a); a.normalize();	return aʹ; } );
UnicodeMath.add_unary ('THREE.Vector3',	'ˆꘌ', 					 function(a)   { a.normalize(); } );

UnicodeMath.add_binary('Number',		'ᐩ', 	'THREE.Vector4', function(b,a) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.addScalar(b);		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐨ', 	'THREE.Vector4', function(b,a) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.addScalar(-b);		return aʹ; } );
UnicodeMath.add_binary('Number',		'ᐧ', 	'THREE.Vector4', function(b,a) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.multiplyScalar(b);	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐩ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.addScalar(b);		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐨ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.addScalar(-b);		return aʹ; } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐧ', 	'Number',		 function(a,b) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.multiplyScalar(b);	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector4',	'〳', 	'Number',		 function(a,b) { aʹ=new THREE.Vector4(); aʹ.copy(a); aʹ.divideScalar(b);	return aʹ; } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐩꘌ', 	'Number',		 function(a,b) { return a.addScalar(b) } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐨꘌ', 	'Number',		 function(a,b) { return a.addScalar(-b) } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐧꘌ', 	'Number',		 function(a,b) { return a.multiplyScalar(b) } );
UnicodeMath.add_binary('THREE.Vector4',	'〳ꘌ', 	'Number',		 function(a,b) { return a.divideScalar(b) } );
UnicodeMath.add_binary('THREE.Vector4',	'ǀxǀꘌ',	'Number',		 function(a,b) { return a.setLength(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐨ', 	'Undefined',	 function(a,b) { a.negate(); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐩ', 	'THREE.Vector4', function(a,b) { return (new THREE.Vector4()).addVectors(a, b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐨ', 	'THREE.Vector4', function(a,b) { return (new THREE.Vector4()).subVectors(a, b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐧ', 	'THREE.Vector4', function(a,b) { return a.dot(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐩꘌ', 	'THREE.Vector4', function(a,b) { a.add(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐨꘌ', 	'THREE.Vector4', function(a,b) { a.sub(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ꘌꘌ', 	'THREE.Vector4', function(a,b) { a.equals(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ꘌ', 	'THREE.Vector4', function(a,b) { a.copy(b); } );
UnicodeMath.add_unary ('THREE.Vector4',	'ǀxǀ', 					 function(a)   { a.length(); } );
UnicodeMath.add_unary ('THREE.Vector4',	'ˆ', 					 function(a)   { return aʹ=new THREE.Vector2(); aʹ.copy(a); a.normalize();	return aʹ; } );
UnicodeMath.add_unary ('THREE.Vector4',	'ˆꘌ', 					 function(a)   { a.normalize(); } );



UnicodeMath.add_binary('THREE.Quaternion','ᐧ', 	'THREE.Vector3',	function(a,b) { return aʹ=new THREE.Vector3(); aʹ.copy(a); b.multiplyVector3(aʹ,aʹ); return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	 'ᐧ', 	'THREE.Quaternion',	function(a,b) { return aʹ=new THREE.Vector3(); aʹ.copy(a); b.multiplyVector3(aʹ,aʹ); return aʹ; } );
UnicodeMath.add_binary('THREE.Vector3',	 'ᐧꘌ', 	'THREE.Quaternion',	function(a,b) { b.multiplyVector3(a,a); } );
UnicodeMath.add_binary('THREE.Quaternion','ᐧ', 	'THREE.Quaternion',	function(a,b) { return aʹ=new THREE.Quaternion(); aʹ.copy(a); b.multiply(aʹ,aʹ); return aʹ; } );
UnicodeMath.add_binary('THREE.Quaternion','ᐧꘌ', 	'THREE.Quaternion',	function(a,b) { a.multiply(b); } );
UnicodeMath.add_binary('THREE.Quaternion','ꘌꘌ',	'THREE.Quaternion',	function(a,b) { a.equals(b); } );
UnicodeMath.add_binary('THREE.Quaternion','ꘌ', 	'THREE.Quaternion',	function(a,b) { a.copy(b); } );
UnicodeMath.add_unary ('THREE.Quaternion','ǀxǀ', 					function(a)   { a.length(); } );
UnicodeMath.add_unary ('THREE.Quaternion','ˆ', 						function(a)   { return aʹ=new THREE.Vector2(); aʹ.copy(a); a.normalize();	return aʹ; } );
UnicodeMath.add_unary ('THREE.Quaternion','ˆꘌ', 					function(a)   { a.normalize(); } );



UnicodeMath.add_binary('THREE.Vector3',	'ᐧꘌ', 	'THREE.Matrix3', function(a,b) { a.applyMatrix3(b); } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐧ', 	'THREE.Matrix3', function(a,b) { 
	var aʹ = a.clone();
	aʹ.applyMatrix3(b);
	return aʹ;
} );
UnicodeMath.add_binary('THREE.Matrix3',	'ᐧ', 	'THREE.Vector3', function(b,a) { 
	var aʹ = a.clone();
	aʹ.applyMatrix3(b);
	return aʹ;
} );



UnicodeMath.add_binary('THREE.Vector3',	'ᐧꘌ', 	'THREE.Matrix4', function(a,b) { a.applyMatrix4(b); } );
UnicodeMath.add_binary('THREE.Vector3',	'ᐧ', 	'THREE.Matrix4', function(a,b) { 
	var aʹ = a.clone();
	aʹ.applyMatrix4(b);
	return aʹ;
} );
UnicodeMath.add_binary('THREE.Matrix4',	'ᐧ', 	'THREE.Vector3', function(b,a) { 
	var aʹ = a.clone();
	aʹ.applyMatrix4(b);
	return aʹ;
} );



UnicodeMath.add_binary('THREE.Vector4',	'ᐧꘌ', 	'THREE.Matrix4', function(a,b) { a.applyMatrix4(b); } );
UnicodeMath.add_binary('THREE.Vector4',	'ᐧ', 	'THREE.Matrix4', function(a,b) { 
	var aʹ = a.clone();
	aʹ.applyMatrix4(b);
	return aʹ;
} );
UnicodeMath.add_binary('THREE.Matrix4',	'ᐧ', 	'THREE.Vector4', function(b,a) { 
	var aʹ = a.clone();
	aʹ.applyMatrix4(b);
	return aʹ;
} );




UnicodeMath.add_binary('THREE.Matrix3',	'ꘌ', 	'THREE.Matrix3', function(a,b) { a.copy(b); } );
UnicodeMath.add_binary('THREE.Matrix3',	'ᐧꘌ', 	'Number', 		 function(a,b) { a.multiplyScalar(b) } );
UnicodeMath.add_binary('THREE.Matrix3',	'〳ꘌ', 	'Number', 		 function(a,b) { a.multiplyScalar(1/b) } );
UnicodeMath.add_binary('THREE.Matrix3',	'ᐧ', 	'Number', 		 function(a,b) { 
	var aʹ = (new THREE.Matrix3())
	aʹ.copy(a); 
	aʹ.multiplyScalar(b);
	return aʹ;
} );
UnicodeMath.add_binary('THREE.Matrix3',	'〳', 	'Number', 		 function(a,b) { 
	var aʹ = (new THREE.Matrix3())
	aʹ.copy(a); 
	aʹ.multiplyScalar(1/b);
	return aʹ;
} );
UnicodeMath.add_unary ('THREE.Matrix3',	'ᐪꘌ',					 function(a)   { a.transpose(); } );
UnicodeMath.add_unary ('THREE.Matrix3', 'ǀxǀ', 					 function(a)   { return a.determinant(); })
UnicodeMath.add_unary ('THREE.Matrix3', 'ᐨᑊ', 					 function(a)   { return THREE.Matrix3.getInverse(a, false); })




UnicodeMath.add_binary('THREE.Matrix4',	'ᐧ', 	'THREE.Matrix4', function(a,b) { return (new THREE.Matrix4()).multiplyMatrices(a, b); } );
UnicodeMath.add_binary('THREE.Matrix4',	'ᐧꘌ', 	'THREE.Matrix4', function(a,b) { return a.multiply(b); } );
UnicodeMath.add_binary('THREE.Matrix4',	'ꘌ', 	'THREE.Matrix4', function(a,b) { a.copy(b); } );
UnicodeMath.add_binary('THREE.Matrix4',	'ᐧꘌ', 	'Number', 		 function(a,b) { a.multiplyScalar(b) } );
UnicodeMath.add_binary('THREE.Matrix4',	'〳ꘌ', 	'Number', 		 function(a,b) { a.multiplyScalar(1/b) } );
UnicodeMath.add_binary('THREE.Matrix4',	'ᐧ', 	'Number', 		 function(a,b) { 
	var aʹ = (new THREE.Matrix4())
	aʹ.copy(a); 
	aʹ.multiplyScalar(b);
	return aʹ;
} );
UnicodeMath.add_binary('THREE.Matrix4',	'〳', 	'Number', 		 function(a,b) { 
	var aʹ = (new THREE.Matrix4())
	aʹ.copy(a); 
	aʹ.multiplyScalar(1/b);
	return aʹ;
} );
UnicodeMath.add_unary ('THREE.Matrix4',	'ᐪꘌ',					 function(a)   { a.transpose(); } );
UnicodeMath.add_unary ('THREE.Matrix4', 'ǀxǀ', 					 function(a)   { return a.determinant(); })
UnicodeMath.add_unary ('THREE.Matrix4', 'ᐨᑊ', 					 function(a)   { return THREE.Matrix4.getInverse(a); })

