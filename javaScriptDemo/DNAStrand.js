/**
 * Created by yanghui on 2017/1/6.
 */
function DNAStrand(dna){
    return dna.split("").map(function(e,i){
        return function (e){
            switch(e){
                case "A":
                    return "T";
                case "T":
                    return "A";
                case "G":
                    return "C";
                case  "C":
                    return "G";
            }
        }();
    })
}

/*function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
}*/

//return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');