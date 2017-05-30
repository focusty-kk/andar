/**
 * Created by yanghui on 2017/4/7.
 */

(function () {
    function Step(id, src) {
        this.id = id;
        this.src = src;
        this.targetDom = document.getElementById(this.id);
        this.imgDom = document.createElement("img");
        this.leftBtn = document.createElement("button");
        this.leftBtn.innerHTML = "上一张";
        this.rightBtn = document.createElement("button");
        this.rightBtn.innerHTML = "下一张";
        var that = this;
        this.rightBtn.onclick = function () {
            bindClick("right");
        };
        this.leftBtn.onclick = function () {
            bindClick("left")
        };

        function bindClick(type){
            var srcIndex = that.imgDom.src;
            var reg = /\/\d+\./g;
            var s = Number(reg.exec(srcIndex)[0].slice(1, -1));
            if(type == "left"){
                s--;
                s = s < 1 ? 3 : s;
            }else if(type == "right"){
                s++;
                s = s > 3 ? 1 : s;
            }
            that.imgDom.src = "../images/" + s + ".jpg";
        }

    }

    Step.prototype = {
        init: function () {
            this.targetDom.appendChild(this.imgDom);
            this.targetDom.appendChild(this.leftBtn);
            this.targetDom.appendChild(this.rightBtn);
            this.imgDom.src = this.src;
        }
    };

    window.Step = Step;

})();


window.onload = function () {
    var imgSrc = "../images/";
    var step = new Step("Step", imgSrc + "1.jpg");
    step.init();

    var Mtep = new Step("Mtep", imgSrc + "1.jpg");
    Mtep.init();
};


