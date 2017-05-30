/**
 * Created by yanghui on 2017/5/24.
 */

"use strict";

/*
const Egg = (function () {

   let todo = function () {
       console.log(111);
   };


    return{
        say: todo
    }

})();

Egg.say();*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Smk = function () {
    function Smk() {
        _classCallCheck(this, Smk);

        this.age = 123;
        this.name = "yanghui";
    }

    _createClass(Smk, [{
        key: "say",
        value: function say() {
            console.log(this.name);
        }
    }]);

    return Smk;
}();

var Klp = function (_Smk) {
    _inherits(Klp, _Smk);

    function Klp() {
        _classCallCheck(this, Klp);

        var _this = _possibleConstructorReturn(this, (Klp.__proto__ || Object.getPrototypeOf(Klp)).call(this));

        _this.kk = "zzz";
        return _this;
    }

    _createClass(Klp, null, [{
        key: "eat",
        value: function eat() {
            console.log("I eat a apple!");
        }
    }]);

    return Klp;
}(Smk);

var kl = new Klp();

console.log("haha " + kl.kk);

//# sourceMappingURL=addCount-compiled.js.map