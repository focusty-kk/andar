/**
 * Created by yanghui on 2016/11/19.
 */


(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(function () {
            return factory(global)
        });
    else
        factory(global)
}(this, function (window) {

    var Mm = function (selector) {
        return new Mm.fn.init(selector);
    };


    Mm.fn = Mm.prototype = {
        css:function(attr,value){
            for(var i = 0;i<this.length;i++){
                this[i].style[attr]=value;
            }
            return this;
        },
        attr:function(attr,value){
            for(var i = 0;i<this.length;i++){
                this[i].setAttribute(attr,value);
            }
            return this;
        }
    };


    Mm.fn.init = function (selector) {
        if (typeof selector == "string") {
            var exprID = /#\w+/,
                exprCL = /\.\w+/,
                exprTAG = /^[a-z]+$/;
            if (exprID.test(selector)) {
                var eleI = document.getElementById(selector.substring(1));
                this[0] = eleI;
                this.length = 1;
            } else if (exprCL.test(selector)) {
                var i = 0,
                    eleC = document.getElementsByClassName(selector.substring(1));
                for (; i < eleC.length; i++) {
                    this[i] = eleC[i];
                    this.length = eleC.length;
                }
            } else if (exprTAG.test(selector)) {
                var j = 0,
                    eleT = document.getElementsByTagName(selector);
                for (; j < eleT.length; j++) {
                    this[j] = eleT[j];
                    this.length = eleT.length;
                }
            }
        }
    };


    Mm.fn.init.prototype = Mm.prototype;
    window.Mm = Mm;
}));