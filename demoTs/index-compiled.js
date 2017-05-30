"use strict";

/**
 * Created by yanghui on 2017/1/4.
 */
// "use strict";

var obj = {};

Object.defineProperty(obj, "str", {
    enumerable: true,
    configurable: true,
    get: function get() {
        return this.value;
    },
    set: function set(val) {
        return this.value = val;
    }
});

/*
*这个推送2
*
*
* 没错
* */

//# sourceMappingURL=index-compiled.js.map