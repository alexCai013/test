$(document).ready(function() {
    // 更多产品hover
    $(".more").hover(function() {
        $("#more_product").show();
    });

    // 隐藏更多产品
    $("#more_product").mouseleave(function() {
        $("#more_product").hide();
    });


    //单例模式
    var clickFunction = {
        //初始化
        init: function() {
            var me = this;
            me.getBtn();
            me.doClick();
        },
        //取得BTN
        getBtn: function() {
            var me = this;
            me.btn = $(".s-menu-item");

        },
        //执行点击事件
        doClick: function() {
            var me = this;
            me.btn.click(function() {
                var divNm = $(this).attr('data-targer');
                $(divNm).show().siblings().hide().eq(0).show();
            });

        }
    }
    clickFunction.init();
});
