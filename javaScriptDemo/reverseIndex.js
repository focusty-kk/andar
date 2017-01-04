/**
 * Created by yanghui on 2017/1/3.
 */
function getMiddle(s) {
    if(s.length%2==0){
        return s.slice(s.length/2-1, s.length/2+1);
    }else{
        return s.slice((s.length-1)/2,(s.length+1)/2);
    }
    //return s.substr(Math.ceil(s.length/2-1),s.length % 2 === 0 ? 2 : 1)
}