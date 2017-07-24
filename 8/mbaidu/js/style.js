$(document).ready(function() {
    // 新闻生成
    refreshNews("推荐");
    // 取得不同分类的新闻
    getItemNews();
});

// 新闻生成
function refreshNews(itemBtnVal) {
    // 新闻清空
    var lists = $("article ul");
    lists.empty();
    // ajax加载
    $.ajax({
        url: "../mbaidu/server/getnews.php",
        type: "get",
        datatype: "json",
        success: function(data) {
            data.forEach(function(item, index, array) {
                if (itemBtnVal == item.newstype) {
                    var list = $("<li></li>").addClass("news-list").prependTo(lists);
                    if (CheckImgExists(item.newsimg)) {
                        var newsImg = $("<div></div>").addClass("news-img").appendTo(list);
                        var img = $("<img>").attr("src", item.newsimg).appendTo(newsImg);
                    }
                    var newsContent = $("<div></div>").addClass("news-content").appendTo(list);
                    var h1 = $("<h1></h1>").html(item.newstitle).appendTo(newsContent);
                    var p = $("<p></p>").appendTo(newsContent);
                    var newsTime = $("<span></span>").addClass("news-time").html(item.newstime).appendTo(p);
                    var newsSrc = $("<span></span>").addClass("news-src").html(item.newssrc).appendTo(p);
                }
            });
        }
    });
}

// 取得不同分类的新闻
function getItemNews() {
    var itemBtn = $("nav ul li a");
    $(itemBtn).click(function() {
        var itemBtnVal = $(this).html();
        refreshNews(itemBtnVal);
    });

}

// 判断图片是否存在
function CheckImgExists(imgurl) {
    var ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;
    //没有图片，则返回-1  
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    } else {
        return false;
    }
}
