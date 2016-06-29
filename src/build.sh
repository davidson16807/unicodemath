cpp unicodemath-linear-template.js | 
sed \
	-e s/^#.*//g 			\
	-e s/__HADAMARD__/ᐤ/g 	\
	-e s/__CROSS__/ᕁ/g 		\
	-e s/__ADD__/ᐩ/g 		\
	-e s/__SUB__/ᐨ/g 		\
	-e s/__DOT__/ᐧ/g 		\
	-e s/__DIV__/〳/g 		\
	-e s/__EQ__/ꘌ/g 		\
	-e s/__CR__/#/g  		\
	-e s/Rn/Rⁿ/g  			\
	-e s/R4/Rᶣ/g  			\
	-e s/R3/Rᵌ/g  			\
	-e s/R2/Rᒾ/g | 			\
tr '#' '\n' \
 > ../unicodemath-linear.js