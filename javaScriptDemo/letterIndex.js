/**
 * Created by yanghui on 2017/1/4.
 */
function alphabetPosition(text) {
    var letter = text.toLowerCase().split("");
    var letterArr = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var arrLetter = letter.filter(function (e) {
        return /[a-z]/gi.test(e);
    });
    for (var j = 0; j < arrLetter.length; j++) {
        for (var i = 0; i < letterArr.length; i++) {
            if (arrLetter[j] == letterArr[i]) {
                arrLetter[j]= i+1;
            }
        }
    }
    return arrLetter.join(" ");
}

