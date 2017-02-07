/**
 * Created by yanghui on 2017/1/20.
 */
function anagrams(word, words) {
    var mm = [];
    words.forEach((v, i)=> {
        var flag = true;
        word.split("").forEach((m, n)=> {

            if (v.indexOf(m) == -1) {
                flag = false;
            }
            if (n == word.length - 1) {
                if (flag) {
                    mm.push(v);
                }
            }
        })
    });
    return mm;
}