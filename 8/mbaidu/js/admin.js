// 打开页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
    // 新闻加载
    refreshNews();
    // 添加新闻
    addNews();
    // 删除新闻
    delNews();
    // 更新新闻
    upNews();
});

// 新闻加载
function refreshNews() {
    // 列表清空
    var $newsTable = $('#newsTable tbody');
    $newsTable.empty();
    // ajax加载
    $.ajax({
        url: "../mbaidu/server/getnews.php",
        type: "get",
        datatype: "json",
        success: function(data) {
            data.forEach(function(item, index, array) {
                var id = $('<td>').html(item.id);
                var newstype = $('<td>').html(item.newstype);
                var newstitle = $('<td>').html(item.newstitle).attr('style', 'width:25%');
                var newstime = $('<td>').html(item.newstime);
                var newssrc = $('<td>').html(item.newssrc);
                var newsimg = $('<td>').html(item.newsimg).hide();
                var btnTd = $('<td>');
                var upBtn = $('<button>').addClass('btn btn-primary btn-xs').html("修改");
                var delBtn = $('<button>').addClass('btn btn-danger btn-xs').html("删除");
                btnTd.append(upBtn, delBtn);
                var tr = $('<tr>');
                tr.append(id, newstype, newstitle, newstime, newssrc, btnTd, newsimg);
                $newsTable.append(tr);
            });
        }

    });

}

// 添加新闻
function addNews() {
    $("#btnsubmit").click(function(e) {
        e.preventDefault();
        // 输入判断
        if ($("#newstitle").val() === "" || $("#newsimg").val() === "" || $("#newstime").val() === "" || $("#newssrc").val() === "") {
            if ($("#newstitle").val() === "") {
                $("#newstitle").parent().addClass('has-error');
            } else {
                $("#newstitle").parent().removeClass('has-error');
            }
            if ($("#newsimg").val() === "") {
                $("#newsimg").parent().addClass('has-error');
            } else {
                $("#newstitle").parent().removeClass('has-error');
            }
            if ($("#newstime").val() === "") {
                $("#newstime").parent().addClass('has-error');
            } else {
                $("#newstitle").parent().removeClass('has-error');
            }
            if ($("#newssrc").val() === "") {
                $("#newssrc").parent().addClass('has-error');
            } else {
                $("#newstitle").parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstype: $("#newstype").val(),
                newstitle: $("#newstitle").val(),
                newsimg: $("#newsimg").val(),
                newstime: $("#newstime").val(),
                newssrc: $("#newssrc").val()
            };
            $.ajax({
                type: "POST",
                url: "../mbaidu/server/insert.php",
                data: jsonNews,
                datatype: "json",
                success: function(data) {
                    refreshNews();
                    $("#insModal").modal('show');
                }
            });
        }
    });
}

// 删除新闻
function delNews() {
    var delId = null;
    var $newsTable = $('#newsTable tbody');
    $newsTable.on('click', '.btn-danger', function() {
        $("#delModal").modal('show');
        delId = $(this).parent().prevAll().eq(4).html();
    });
    $('#confirmDel').click(function() {
        if (delId) {
            $.ajax({
                url: "../mbaidu/server/del.php",
                type: "post",
                data: { newsid: delId },
                success: function(data) {
                    $("#delModal").modal('hide');
                    refreshNews();
                }
            });
        }
    });
}

// 更新新闻
function upNews() {
    var upId = null;
    var $newsTable = $('#newsTable tbody');
    $newsTable.on('click', '.btn-primary', function() {
        $("#upModal").modal('show');
        upId = $(this).parent().prevAll().eq(4).html();
        upNewsType = $(this).parent().prevAll().eq(3).html();
        upNewstitle = $(this).parent().prevAll().eq(2).html();
        upNewsTime = $(this).parent().prevAll().eq(1).html();
        upNewsSrc = $(this).parent().prevAll().eq(0).html();
        upNewsImg = $(this).parent().next().html();
        $('#unewstype').val(upNewsType);
        $('#unewstitle').val(upNewstitle);
        $('#unewstime').val(upNewsTime);
        $('#unewsimg').val(upNewsImg);
        $('#unewssrc').val(upNewsSrc);
    });
    $('#confirmUp').click(function() {
        if (upId) {
            var jsonNews = {
                newstype: $("#unewstype").val(),
                newstitle: $("#unewstitle").val(),
                newsimg: $("#unewsimg").val(),
                newstime: $("#unewstime").val(),
                newssrc: $("#unewssrc").val(),
                id: upId
            };
            $.ajax({
                url: "../mbaidu/server/update.php",
                type: "post",
                data: jsonNews,
                success: function(data) {
                    $("#upModal").modal('hide');
                    refreshNews();
                }
            });
        }
    });
}
