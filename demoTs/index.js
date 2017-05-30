/**
 * Created by yanghui on 2017/1/4.
 */
// "use strict";

const obj = {};

Object.defineProperty(obj, "str", {
        enumerable: true,
        configurable: true,
        get(){return this.value},
        set(val){
            return this.value = val;
        }
    }
);


/*
*这个推送2
*
*
* 没错
* */
