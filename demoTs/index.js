/**
 * Created by yanghui on 2017/1/4.
 */
function alphabetPosition(text) {
    var txt = text.toLowerCase().split("");
    var arrLetter = txt.filter(function (e) {
        return /\w/.test(e);
    });
    var mm = 'abcdefghijklmnopqrstuvwxyz'.split("");


    for (var j = 0; j < arrLetter.length; j++) {
        for (var i = 0; i < mm.length; i++) {
            if (arrLetter[j] == mm[i]) {
                arrLetter[j]= i+1;
                break;
            }
        }
    }
    return arrLetter.join(" ");
}

$(function(){
    console.log(alphabetPosition("The sunset sets at twelve o' clock."));
});