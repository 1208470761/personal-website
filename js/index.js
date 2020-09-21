// 图片替换
$(window)
    .on("resize", function () {
        let clientWidth = $(window).width();
        let isShowBig = clientWidth > 900;
        let $items = $("#poster .carousel-item");
        $items.each((index, item) => {
            let src = isShowBig
                ? $(item).data("lg-img")
                : $(item).data("sm-img");
            let imgElem = `<img src="${src}">`;
            $(item).empty().append(imgElem);
        });
    })
    .trigger("resize");
// 主题
$(".dark-theme").on("click", function(){
    $("body").css({
        backgroundColor: "#131124",
        color: "white",
    });
    $("body a").css({
        color: "white",
    });
    $(".navbar-toggler").css({
        borderColor: "white",
        backgroundColor: "white",
    });
});
$(".light-theme").on("click", function(){
    $("body").css({
        backgroundColor: "white",
        color: "black",
    });
    $("body a").css({
        color: "black",
    });
    $(".navbar-toggler").css({
        borderColor: "black",
    });
});
