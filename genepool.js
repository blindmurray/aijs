console.log("genepool.js");
<<<<<<< HEAD
var src = "genepool";


var chromo = require("./chromosome");
var Log = require("./log");

function log(msg){
  Log.show(src +": " +  msg);
  }

=======

var chromo = require("./chromosome");
>>>>>>> 99c09e75db369c6ed3b3290df510c970675eca6b

 var trace = '';
 var genepool = { "generation" : 0, fcum : 0,  "pool" : [] };
 var target = 0;			// solution we're trying to fit
 var generation = 0;		// number of generations to evolve this gene pool
<<<<<<< HEAD
 var size = 4;				// number of chromosomes per pool
=======
 var size = 40;				// number of chromosomes per pool
>>>>>>> 99c09e75db369c6ed3b3290df510c970675eca6b
 var pool = [];				// generation of chromosomes
 var childpool = [];		// generate offspring; repopulate pool
 var nscore = 0;			// sum of all scores - used for proportional roulette-wheel fittest chromosome selection
	
// populate a genepool with chromosomes
<<<<<<< HEAD
 var	generate = function(pool, target){
 
 
				var fn = 'generate()';
				log(fn);

				var  p = []; //this.genepool.pool;
				var l=i=0;
				var g;
				//console.log(pool.toSource());
				for (i=0; i< size; i++){
					log(fn+'-'+i);
					//gp.push(chromo.create(target));
					//gp[i] = chromo.create(target);
					//g = chromo.create(target);
					chromo.add(p, target);
					//gp.push(g);
					//log(gp.length);
					l = p.length;
					
					var ii=0;
					for ( ; ii<l; ii++){console.log(ii+": "+p[ii].bin);}
					}
				p.generation++;
				
				log(fn + ' genepool---------\n');
				//for (gene in pool.pool){console.log(gene.bin);}
					l = p.length;
					si=0;
				for ( ; i<l; i++){console.log(i+": "+p[i].bin);}
				
=======
 var	generate = function(target){
				for (i=0; i< size; i++){
					var chrm = chromo;
					//console.log(i + ": generate()");
					chrm.create(target, this.on_chromosome);
					chrm = null;
					}
				genepool.generation++;	
>>>>>>> 99c09e75db369c6ed3b3290df510c970675eca6b
				return genepool;
				}
				
				
<<<<<<< HEAD
 var  	on_chromosome =  function(chromo){
							var fn = 'on_chromosome()';
							log (fn + ' pushing '+ chromo.bin);
							genepool.pool.push(chromo);
							}
=======
 var  	on_chromosome =  function(chromo){genepool.pool.push(chromo);}
>>>>>>> 99c09e75db369c6ed3b3290df510c970675eca6b
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