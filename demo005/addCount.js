/**
 * Created by yanghui on 2017/5/24.
 */

"use strict"

/*
const Egg = (function () {

   let todo = function () {
       console.log(111);
   };


    return{
        say: todo
    }

})();

Egg.say();*/


class Smk{
    constructor(){
        this.age =123;
        this.name = "yanghui"
    }
    say(){
        console.log(this.name);
    }
}

class Klp extends Smk{
    constructor(){
        super();
        this.kk = "zzz";
    }

     static eat(){
        console.log("I eat a apple!");
    }

}


const  kl = new Klp();

console.log(`haha ${kl.kk}`);