console.log("chromo.js");

var chromosome = {

					trace : '',
					
					agenes : ['0','1','2','3','4','5','6','7','8','9','+','-','*','/'],
					chromolen : 5,
					
					chromobin : '',
					chromodec : '',
					score : 0,
					total :0,
					
					create : function(target){
								var i=0; var ii =0;				// iteration counters
								var l = this.chromolen * 4;  	// chromosome length
								var r = Number(0);  			// random number
								var m = this.agenes.length;		// random range
								var f = 0;						// fill length for padding binary strings
								var gene = '';
								var floor = Math.floor;
								var random = Math.random;
								for ( i=0; i<this.chromolen; i++){
										r = random() * 10000 ; // avry slightly broaden our attempt randomness given 14 possible values??
										r = floor(r % m);		// random between 0 and m 
										//console.log(r.toString(2));	
										gene = r.toString(2);				// toString(radix 2) returns the binary string
										this.trace+= i+': r='+r+', g1='+gene;
										f = 4 - gene.length;
										// pad the binary string to 4 places
										for ( ii=0 ; ii<f; ii++){ gene = '0'+gene; }  //prepend the pad to preserve the binary value
										this.trace+=', g2='+gene +'\n';
										this.chromobin += gene;	
									}
								this.trace += "create()::this.score = this.rank()\n";
								this.score = this.rank(target);
								},
							
					decode : function(){
								this.trace+="decode()...\n";
								var i= 0;  						// iteration counter
								var ii= 0;						// index into lookup table agenes[]
								var l = this.chromobin.length;
								for (i=0; i<l; i+=4){
									ii = parseInt(this.chromobin.substr(i,4),2);
									this.trace+= i+': index='+ ii+', '+ this.chromobin.substr(i,4) +', '+parseInt(this.chromobin.substr(i,4),2)+'='+this.agenes[ii] + '\n';
									this.chromodec += this.agenes[ii];
									}								
					
							},
							
					rank : function(target){
								this.trace += "rank()...\n";
								var v; //  = this.calc();
								//var d = target-v; 
								return  (v = this.calc()) == target ? 0 : 1/(target-v) ;
							},					
							
					calc : function(){
								this.trace += "calc()...\n";
								// Numeric evaluation: skip to first number, skip to next operator, skip to next number, skip to next operator...
								//TODO: obviate repeated Number() inits and NaN() tests...?
								var p = 0;		// index position into chromosome
								var i = 0;		// iteration
								var l = 0;		// length of gene string
								var ch = '';	// character
								var ops = '';	// arithmetic operation
								var v = 0;  	// cumulative value
								if (this.chromodec.length < 1) {this.decode();}
								l = this.chromodec.length;
								// 1. find a number to start evaluation with
								while ( i < l){
									p=i;											// p tracks position in string, i is the loop control.
									if (isNaN( parseInt(ch = this.chromodec[i]))){i++;}  // in NaN continue (to look for next possible number)
									else { v=Number(ch); i+=l};								// number found, increment chromo value, exit loop.
									}
								// if no numeric genes found then exit	
								 if (i<l) {return false;}
								 
								 // we found a number, next token of interest should be an operator, set bNum false.
								 // when we find an operator token we will look for a numeric, set bNum true.
								 var bnum = false;
								 i = p;
								 while (i<l){
									 ch = this.chromodec[i];  	// next character
									 //p=i;						// track string index (unused...)
									 // order of operations...
									 if (bnum && isNaN(ch)){i++; continue;} 		// seeking numeric token, not found, next token. 
									 if (!bnum &&  !isNaN(ch)) {i++; continue;}		// seeking operator token, not found, next token.
									
									// 1st time thru we have number, the next parse will set the operator var 'ops'
									 // ch is numeris, use last operator to calculate value
									if (bnum){
										switch (ops){
											case '+': v += Number(ch); break;
											case '-': v -= Number(ch); break;
											case '*': v *= Number(ch); break;
											case '/' : if (ch !=0) v = Math.floor(v/ch); break;  // obviate divide-by-zero
											}
										}
									else { ops = ch;}
									bnum = !bnum	// inverse bnum
									i++;			// forward cursor
									}
								this.trace += "calc=" + v + "\n";	
								return v; 
							},

				} // chromosome object
				
exports.chromosome = chromosome;				

