<<<<<<< HEAD
console.log("index.js");
var src = 'index';

var chromo = require("./chromosome");
var genepool = require("./genepool");
var Log = require("./log");


function log(msg){
  Log.show(src +": " + msg);
  }
  
log ("calling genepool.generate(15)");
//genepool.generate(genepool.genepool, 15);

//for  ( gene in genepool.genepool.pool){
//	console.log(genepool.genepool.pool[gene].bin+'\n');
//	}

var p = [];
for (i=0; i<10;i++)
{
 c = chromo.create(15);
  p.push(c.bin);
  console.log(c.bin + " - " + p[i]);
  
	var l = p.length;
	for (var ii=0; ii<l; ii++){
		console.log(p[ii]);
	  }
  
}
=======

console.log("index.js");

//var chromo = require("./chromosome");
var this.genepool = require("./genepool");

genepool.generate(15);
for  ( gene in genepool.genepool.pool){
	console.log(genepool.genepool.pool[gene].bin+'\n');
	}



>>>>>>> 99c09e75db369c6ed3b3290df510c970675eca6b
