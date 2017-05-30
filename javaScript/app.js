(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Created by yanghui on 2017/1/26.
 */
var moveZeros = function moveZeros(arr) {
    var ar = [];
    var count = 0;
    arr.forEach(function (v, i) {
        v === 0 ? count++ : ar.push(v);
    });
    for (var j = 0; j < count; j++) {
        ar.push(0);
    }
    return ar;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhU2NyaXB0RGVtby9tb3ZlWmVyb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7QUFHQSxJQUFJLFlBQVksU0FBWixTQUFZLENBQVUsR0FBVixFQUFlO0FBQzNCLFFBQUksS0FBSyxFQUFUO0FBQ0EsUUFBSSxRQUFRLENBQVo7QUFDQSxRQUFJLE9BQUosQ0FBWSxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVM7QUFDakIsY0FBTSxDQUFOLEdBQVUsT0FBVixHQUFvQixHQUFHLElBQUgsQ0FBUSxDQUFSLENBQXBCO0FBQ0gsS0FGRDtBQUdBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFwQixFQUEyQixHQUEzQixFQUFnQztBQUM1QixXQUFHLElBQUgsQ0FBUSxDQUFSO0FBQ0g7QUFDRCxXQUFPLEVBQVA7QUFDSCxDQVZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSB5YW5naHVpIG9uIDIwMTcvMS8yNi5cbiAqL1xudmFyIG1vdmVaZXJvcyA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBsZXQgYXIgPSBbXTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGFyci5mb3JFYWNoKCh2LCBpKT0+IHtcbiAgICAgICAgdiA9PT0gMCA/IGNvdW50KysgOiBhci5wdXNoKHYpXG4gICAgfSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgIGFyLnB1c2goMCk7XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn0iXX0=
