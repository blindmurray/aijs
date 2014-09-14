
console.log("index.js");

//var chromo = require("./chromosome");
var this.genepool = require("./genepool");

genepool.generate(15);
for  ( gene in genepool.genepool.pool){
	console.log(genepool.genepool.pool[gene].bin+'\n');
	}



