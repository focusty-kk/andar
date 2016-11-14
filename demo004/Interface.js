/**
 * Created by yanghui on 2016/11/10.
 */


/*
*
* 接口类
* */

//Constructor

var Interface = function (name,methods){
    if(arguments.length!=2){
        console.log("此处接口params应该为2个");
        return;
    }

    this.name = name;
    this.method = [];

    for(var i=0;i<methods.length;i++){
        if(typeof methods[i] != "string"){
            console.log("接口的参数method应该是字符串数组");
            return;
        }
        this.method.push(methods[i]);
    }
};


var Book = function(isbn,title,author){
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
};

Book.prototype={
    setIsbn:function(isbn){
        this._isbn = isbn;
    },
    setTitle:function(title){
        this._title = title;
    },
    setAuthor:function(author){
        this._author = author;
    },
    getIsbn:function(isbn){
        return this._isbn;
    },
    getTitle:function(title){
        return this._title;
    },
    getAuthor:function(author){
        return this._author;
    }
};