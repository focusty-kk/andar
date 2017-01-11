/**
 * Created by yanghui on 2017/1/10.
 */
/*
 validParentheses( "()" ) => returns true
 validParentheses( ")(()))" ) => returns false
 validParentheses( "(" ) => returns false
 validParentheses( "(())((()())())" ) => returns true */

class Pair {
    constructor(left = true, right = false) {
        this.left = left;
        this.right = right;
    }
}
function validParentheses(testStr) {
    let stack = [];
    for (let char of testStr) {
        if (char === '(') {
            stack.unshift(new Pair);
        }
        else if (char === ')') {
            if (!stack.shift())
                return false;
        }
    }
    if (stack.length !== 0)
        return false;
    return true;
}

