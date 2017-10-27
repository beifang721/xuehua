/// <reference path="jquery-1.10.2.min.js" />

var i = 0;
var flakeColor = "#fff";//定义雪片的颜色
var newOn = 100;//间隔多长时间产生一个雪片，单位是毫秒
var flake = $("<div></div>").css("position", "absolute").html("❄");//定义雪片对象
//var flake = $("<div></div>").css("position", "absolute").html("<img src='image/11.jpg' style='width:100px;'>");//定义雪片对象
$(function () {
    startLunbo();//轮播
    var dWidth = $(document).width();//获取页面的宽度
    var dHeight = $(document).height();//获取页面的高度
    setInterval(function () {
        var startLeft = Math.random() * dWidth;//雪片开始的时候距离浏览器的left
        var flakeSize = 5 + 50 * Math.random();//雪片随机的大小
        var startOpacity = 0.7+0.3*Math.random();//雪片开始的时候的透明度
        var endOpacity = 0.4+0.3*Math.random();//雪片下落的时候的透明度
        var endLeft = Math.random() * dWidth;//雪片下落后距离浏览器的left
        var durationTime = 4000 + 8000 * Math.random();//雪片下落所需的时间
        flake.clone().appendTo($("body")).css({//吧雪片拷贝一份加到网页中，设置它的初始样式
            "top": "-55px",
            "left": startLeft,
            "font-size": flakeSize,
            "color": flakeColor,
            "opacity": startOpacity
        }).animate({//执行动画，从上面飘到下面
            "top": dHeight,
            "left": endLeft,
            "opacity": endOpacity
        }, durationTime, function () {
            $(this).remove();//动画结束后，清除div
        });
    }, newOn);
});


function startLunbo() {
    $(".item").eq(0).show().siblings().hide();//第一张图显示，其余的图片隐藏
    setInterval(function () {
        i++;
        if (i == 3) {
            i = 0;
        }
        $(".item").eq(i).fadeIn(300).siblings().fadeOut(300);
    }, 3000);
}