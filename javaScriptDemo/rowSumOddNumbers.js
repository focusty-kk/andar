/**
 * Created by yanghui on 2017/1/6.
 */
function rowSumOddNumbers(n) {
    var e = 0;
    for (var i = 0; i < n; i++) {
        e += n * (n - 1) + 1 + 2*i;
    }
    return e;
}

/*
function rowSumOddNumbers(n) {
    return Math.pow(n,3);
}*/

