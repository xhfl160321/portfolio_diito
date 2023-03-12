(function () {
    // function scrollTo(selector) {
    //   $("html, body").animate({scrollTop: parseInt($("tr4_td_con p:last-child").offset().top)},500);
    // }

    //   color 선택 시에 따른 페이지 메인 컬러 바뀌는 쿼리
    $(".color1").click(function () {
        $(".tr4_td_con p:first-child").css("text-shadow", "8px -8px 0px #3D80D9, 14px -12px 0px #85AFE6");
        $(".tr3_td5").css("background", "#FF301F");
        $(".tr3_td_con2 img").attr("src", "img/img_3d80d9.jpg");
        $("#sticker img").attr({ "src": "https://cdn-icons-png.flaticon.com/512/2215/2215562.png" });
    });
    $(".color2").click(function () {
        $(".tr4_td_con p:first-child").css("text-shadow", "8px -8px 0px #f24405, 14px -12px 0px #FA7D50");
        $(".tr3_td5").css("background", "#1DF24F");
        $(".tr3_td_con2 img").attr("src", "img/img_f24405.jpg");
        $("#sticker img").attr({ "src": "https://cdn-icons-png.flaticon.com/512/2215/2215541.png" }).css({ "transform": "rotate(15deg)" });
    });
    $(".color3").click(function () {
        $(".tr4_td_con p:first-child").css("text-shadow", "8px -8px 0px #f29f05, 14px -12px 0px #FABE50");
        $(".tr3_td5").css("background", "#6510E0");
        $(".tr3_td_con2 img").attr("src", "img/img_f29f05.jpg");
        $("#sticker img").attr({ "src": "https://cdn-icons-png.flaticon.com/512/2215/2215526.png" }).css({ "transform": "rotate(-20deg)" });
    });
    $(".color4").click(function () {
        $(".tr4_td_con p:first-child").css("text-shadow", "8px -8px 0px #038c3e, 14px -12px 0px #49E68D");
        $(".tr3_td5").css("background", "#8C0D03");
        $(".tr3_td_con2 img").attr("src", "img/img_038c3e.jpg");
        $("#sticker img").attr({ "src": "https://cdn-icons-png.flaticon.com/512/2215/2215521.png" }).css({ "transform": "rotate(10deg)" });
    });

    //   모달레이어 쿼리
    $("#lyrics").hide();

    $(".tr4_td_con > p:first-child").click(function () {
        $("#lyrics").show();
    });
    $(document).mouseup(function (e) {
        var lyricsPopup = $("#lyrics");
        if (lyricsPopup.has(e.target).length === 0) {
            lyricsPopup.hide();
        }
    });


})(jQuery);
