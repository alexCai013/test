$(document).ready(function() {
    $(window).on("load", function() {
        // 图片排列方法
        imgLoaction();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] }
        window.onscroll = function() {
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) {
                    // 创建box
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    // 创建content
                    var content = $("<div>").addClass("content").appendTo(box);
                    // 加载img
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                });
                // 图片排列方法
                imgLoaction();
            }
            window.onresize = function(){
            	imgLoaction();
            }
        };
    });
});
//鼠标滚动加载
function scrollside() {
    var box = $(".box");
    // 最后图片的高度
    var boxLastHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // 窗口高度
    var windowHeight = $(window).height();
    // 滚动高度
    var scrollHeight = $(window).scrollTop();
    return boxLastHeight < scrollHeight + windowHeight;
}

//图片排列方法
function imgLoaction() {
    var box = $(".box");
    // 图片宽度
    var boxWidth = box.eq(0).width();
    // 一行排列的个数
    var num = $(window).width() / boxWidth;
    num = Math.floor(num);
    var boxArr = [];
    box.each(function(index, value) {
    	// 初始化value
    	value.style.cssText ='';
        //图片高度
        var boxHeight = $(box).eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            // 最小的图片高度
            minBoxHeight = Math.min.apply(null, boxArr);
            // 最小图片所在的位置
            minIndex = $.inArray(minBoxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minIndex).position().left
            });
            boxArr[minIndex] += box.eq(index).height();
        }
    });
}
