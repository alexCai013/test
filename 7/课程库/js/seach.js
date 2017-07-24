$(document).ready(function() {
    // 关闭搜索框
    $("#close-btn").click(function() {
        $(".searchbox").css("display", "none");
    });

    $("#seach").click(function() {
        $("#searchbox").show(500);
    });
});
