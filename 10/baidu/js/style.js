$(document).ready(function() {
    // 更多产品hover
    $(".more").hover(function() {
        $("#more_product").show();
    });

    // 隐藏更多产品
    $("#more_product").mouseleave(function() {
        $("#more_product").hide();
    });

    // 推荐click
    $("#recommend_span").click(function() {
        $("#recommend").show();
        $("#navi").hide();
    });

    // 导航click
    $("#navi_span").click(function() {
        $("#navi").show();
        $("#recommend").hide();
    });
});
