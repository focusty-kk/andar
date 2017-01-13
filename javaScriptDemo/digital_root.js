/**
 * Created by yanghui on 2017/1/11.
 */
/*
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2*/


function digital_root(n) {
    let st = (""+n).split("");
    let count = 0;
    for(let i = 0 ;i<st.length;i++){
        count+=Number(st[i]);
        if(i==(st.length-1)){
            return (""+count).split("").length==1 ?count:digital_root(count)
        }
    }
}

/*
function digital_root(n) {
    return (n - 1) % 9 + 1;
}
*/


