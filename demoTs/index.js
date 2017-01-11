/**
 * Created by yanghui on 2017/1/4.
 */
function nbYear(p0, percent, aug, p) {
    var year;
    if ((p0 * Math.pow((1 + percent), year) - aug*(p0 + year) == p)) {
        return Math.ceil(year);
    }
}


$(function(){
    console.log(nbYear(1500000, 2.5, 10000, 2000000));
});