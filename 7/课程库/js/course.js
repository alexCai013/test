$(document).ready(function() {
    $(".cf").find($("li")).hover(function() {
            // 块状显示状态
            if ($("#changeid").attr("class") == "lesson-list") {
                $(this).find($(".lessonimg-box")).css("opacity", ".3");
                $(this).find($(".lessonplay")).css("opacity", "1");
                $(this).find($(".lesson-infor")).css("height", "175");
                $(this).find($(".lesson-infor")).find($("p")).css({ "height": "52", "opacity": "1", "display": "block" });
                $(this).find($(".learn-number")).css("display", "inline");
                $(this).find($(".zhongji")).css("display", "block");
                $(this).find($(".lessonicon-box")).css("top", "25px");
                // 列表显示状态
            } else {
                $(this).find($(".lessonimg-box")).css("opacity", ".3");
                $(this).find($(".lessonplay")).css("opacity", "1");
            }


        },
        function() {
            // 块状显示状态
            if ($("#changeid").attr("class") == "lesson-list") {
                $(this).find($(".lessonimg-box")).css("opacity", "1");
                $(this).find($(".lessonplay")).css("opacity", "0");
                $(this).find($(".lesson-infor")).css("height", "88");
                $(this).find($(".lesson-infor")).find($("p")).css("display", "none");
                $(this).find($(".lesson-infor")).find($("p")).css({ "height": "0", "opacity": "0", "display": "none" });
                $(this).find($(".learn-number")).css("display", "none");
                $(this).find($(".zhongji")).css("display", "none");
                $(this).find($(".lessonicon-box")).css("top", "0");
                // 列表显示状态
            } else {
                $(this).find($(".lessonimg-box")).css("opacity", "1");
                $(this).find($(".lessonplay")).css("opacity", "0");
            }

        });

    // 切换list显示
    $(".list-icon").click(function() {
        $("#changeid").removeClass("lesson-list").addClass("lesson-list2");
        $(".lesson-infor").find($("p")).css({ "height": "36", "opacity": "0", "display": "block" });
        $(".zhongji").css("display", "block");
        $(".learn-number").css({ "display": "inline", "float": "right" });
        $(".lessonicon-box").css("top", "-65px");

    });

    //切换kuai显示
    $(".kuai-icon").click(function() {
        $("#changeid").removeClass("lesson-list2").addClass("lesson-list");
        $(".lesson-infor").find($("p")).css({ "height": "0", "opacity": "0", "display": "none" });
        $(".zhongji").css("display", "none");
        $(".learn-number").css("display", "none");
        $(".lessonicon-box").css("top", "0");
    });
});
