/**
 * Created by yanghui on 2017/1/26.
 */
var moveZeros = function (arr) {
    let ar = [];
    let count = 0;
    arr.forEach((v, i)=> {
        v === 0 ? count++ : ar.push(v)
    });
    for (let j = 0; j < count; j++) {
        ar.push(0);
    }
    return ar;
}