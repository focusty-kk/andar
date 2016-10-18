/**
 * Created by yanghui on 2016/10/18.
 */
$(function(){
    var sN= 3;
    var _tbtn=$("#tbtn");
    var timer=null;
    _tbtn.bind("click",function(){
        _tbtn.attr("disabled","disabled");

        setTimeout(function(){
            _tbtn.removeAttr("disabled");
        },1000);
    })
});

