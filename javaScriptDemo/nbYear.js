/**
 * Created by yanghui on 2017/1/6.
 */
function nbYear(p0, percent, aug, p) {
    for(var y =0;p0<p;y++){
        p0 = p0*(1+percent/100)+aug;
    }
    return y;
}


//function nbYear(p0, percent, aug, p) {
//    for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
//    return y;
//}