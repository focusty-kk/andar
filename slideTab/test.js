/**
 * Created by yanghui on 2017/3/23.
 */
/*
 $.fn.extend({
 selectt: function () {
 this.click(function () {
 $(this).parent().find("ul").stop(false, true).slideToggle();

 });

 this.hover(noop, function () {
 alert(123);
 });
 function noop() {

 }
 }


 });


 $(function () {
 $("#selectInput").selectt();
 });
 */

$(function () {
    $("#selectInput").click(function () {
        $("#optionReset").stop(false, true).slideToggle();
    });
    $("#optionReset").find("li").click(function () {
        $("#selectInput").val($(this).html());
        $("#selectInput").click();
    })
});

/*var ba = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB58AAAABCAIAAABmLv4HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmY2ZWVlYi02NDllLTQxNDgtODU5ZC1lMGFkYWJiNDNjMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkM1RjU1NTUxMEJFMTFFNUEyNUI5ODdGRDZBM0VDNzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkM1RjU1NTQxMEJFMTFFNUEyNUI5ODdGRDZBM0VDNzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozZjZmZTJkMC02ODlhLTRlOWEtYTc4MS1mNTg3NmY5ZGQyZDciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MmE4YWY4Yy00OTg4LTExNzgtYmU1NC05OTVkYjZiYjU3NGMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IkKSiAAAB5UlEQVRYw9VY0bLrIAhcvuO+nv//xO59SFRAVDTNzDmdTgaWZSXEtlL5+UcKANxXAAICqEa5Ok51RzSIJ+jQbUc6nqnSteb1YjEq0vQ1aKMMQPpomD6PfolwFx/hzmaCY7rkOJ17yAz5rs4Rx5WaUPPGwbXfXVGoGRN76U7ACf4KQXwrwv7MwUzKEt9yDwi7xhPaQzsfShK2wGXot704KJxrcqzAaQoXtow4c5Dd6vtGW9oRVq4syREoTNFSKeOrPOEvyUvNZRnhPSaYszpZarvenw4h8PGuJxDyse5YTS4cgY4pA0Yzpim7gdggSNcEwYwmXeele75iey5uQ57+zuz+ZibPKfq40dvJg8xXyLtZGfCAE6SIcsUytesOOGLVNplhol99IJUkYMSZMCf4QDC/Oe24FkxsCmT5lE2mRgKAHTHNoBlPnxTen/aGU7sUBbYsAGxRgMIWrW4haIWiTJULRmqsNzXQubLaoqVFtYB4uWKbOougvmsjWBsYJFLhpWC9tH4Kqi2wS6BbBc5VFapHSfd3QoSo/aMPE+VbmtGsyfaVHh3v/tBJdvM4LvvI2ZjxdftgjjoAn6S8Udhrs6KcPfEn+yoT4k4oM62lXe6PbSn7jPBgGnyU+2phL9n5UHIXGeQ/IU/bghy3yoMAAAAASUVORK5CYII="

 $(".img").attr("src",ba);*/

var ss = {
    "qq": "11",
    "ww": "22",
    "ee": "33",
    "say": function () {
        alert(123);
    }
};
var mm = {
    "zz": "99",
    "xx": "88",
    "cc": "77",
    "doki": function () {
        alert(999);
    }
};

var cloneObj = function (obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};


var dd = $.extend({}, cloneObj($(".container")), mm);
var hg = $("#mbwz").clone(true);


$("#mbwz").remove();


$("#mdiv").append(hg);




