/**
 * Created by yanghui on 2016/11/10.
 */


/*
*
* 接口类
* */

//Constructor

var Books = function(Newisbn,Newtitle,Newauthor){
    var isbn=0;

    var bi = function(){
        isbn++;
        return isbn;
    };

    return bi;

};

