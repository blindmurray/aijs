console.log("genepool.js");

var chromo = require("./chromosome");

 var trace = '';
 var genepool = { "generation" : 0, fcum : 0,  "pool" : [] };
 var target = 0;			// solution we're trying to fit
 var generation = 0;		// number of generations to evolve this gene pool
 var size = 40;				// number of chromosomes per pool
 var pool = [];				// generation of chromosomes
 var childpool = [];		// generate offspring; repopulate pool
 var nscore = 0;			// sum of all scores - used for proportional roulette-wheel fittest chromosome selection
	
// populate a genepool with chromosomes
 var	generate = function(target){
				for (i=0; i< size; i++){
					var chrm = chromo;
					//console.log(i + ": generate()");
					chrm.create(target, this.on_chromosome);
					chrm = null;
					}
				genepool.generation++;	
				return genepool;
				}
				
				
 var  	on_chromosome =  function(chromo){genepool.pool.push(chromo);}
 //var  	on_chromosome =  function(){alert("on_chromo()");}

 var	evolve = function(){
					// check for a previously generated or evolved geene pool
					//if (this.pool.length == 0) {this.generate();}
					//childpool.length = 0;	// clear the pool, do not reinstantiate
					//? this.generation++;
				}		
				

 var	tostring = function(){
						var str = 'chromosome  - fitness\n';
						var l = 0;
						var i = 0;
						//console.log("tostring() pool.len = "+genepool.length+"\n");
						if ((l = genepool.pool.length) > 0){
							for ( ; i<l; i++){
									// chromosome objects have a binary signature 'chromobin' property.
									str+= i+': '+genepool.pool[i].bin + " ("+genepool.pool[i].fit +")\n";										}
							return str;	
							}
						return "Error:pool.length="+genepool.length+"\n";	
				}			

		
		
exports.generate = generate;	
exports.tostring = tostring;	
exports.on_chromosome = on_chromosome;
exports.genepool = genepool;