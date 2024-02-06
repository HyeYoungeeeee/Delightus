$(document).ready(function () {

    //탭 아래부분
    $(".tab_content1").hide(); //tab_content 부분을 모두 숨김.
    $(".tabs1").children().eq(0).addClass("active1").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content1:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $(".tabs1").children().click(function () {

        $(".tabs1").children().removeClass("active1"); //Remove any "active" class
        $(this).addClass("active1"); //선택한 탭에만 active클래스 붙임
        $(".tab_content1").hide(); //모든 contents들 숨김

        var activeTab1 = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab1).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });


    //같은 페이지 내에서 동작하게 하는 코드 [서브메뉴]
    $(".sub_move li").click(function () {
        var indexNo = $(this).index();
        $("ul.tabs1 li").removeClass("active1");
        $(".tabs1 li").eq(indexNo + 1).addClass("active1");
        $(".tab_content1").hide();
        var activeTab2 = $(".tabs1 li.active1").find("a").attr("href");
        $(activeTab2).fadeIn();
        return false;
    });
    // 스크롤 위치 이동[서브메뉴 클릭 시]
    $(".sub_move li a").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#menu").offset().top }, 500);

    });




    // top버튼
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 1200) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top_btn_').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top_btn_').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
    $(".top_btn_").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#best_item").offset().top }, 500);

    });

    // 푸터 정보 클릭시 팝업
    $(".f_content1").click(function () {
        alert("개인정보처리방침 입니다.")
    });
    $(".f_content2").click(function () {
        alert("이용약관 입니다.")
    });
    $(".f_content3").click(function () {
        alert("고객센터 입니다.")
    });
    $(".f_content4").click(function () {
        alert("사업자정보확인 입니다.")
    });



    //다른 페이지에서 이동할때 필요한 코드
    var location = window.location.hash;
    if ($(location).length != "0") {
        var tab_arr = [];
        $(".tabs1 li a").each(function (index, element) {
            tab_arr.push($(this).attr("href"));
        });

        var numb = jQuery.inArray(location, tab_arr)
        console.log(numb);
        $('.tabs1 li').removeClass("active1");
        $('.tabs1 li').eq(numb).addClass("active1");
        $(".tab_content1").hide();
        $('.tab_container1').find(location).show();

        return false;
    }

    //같은 페이지 내에서 동작하게 하는 코드 [more 버튼]
    $(".more_btn").click(function () {
        var indexNo = $(this).index();
        $("ul.tabs1 li").removeClass("active1");
        $(".tabs1 li").eq(indexNo - 3).addClass("active1");
        $(".tab_content1").hide();
        var activeTab2 = $(".tabs1 li.active1").find("a").attr("href");
        $(activeTab2).fadeIn();
        return false;
    });
    // 스크롤 위치 이동[more 클릭 시]
    $(".more_btn").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#menu").offset().top }, 500);

    });


    // 상품 이름 색상변경
    $(".all1").mouseover(function () {
        $(".p_color1").css({
            "color": "#bc9cc9",
        });
    });
    $(".all1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".all2").mouseover(function () {
        $(".p_color2").css({
            "color": "#bc9cc9",
        });
    });
    $(".all2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".all3").mouseover(function () {
        $(".p_color3").css({
            "color": "#bc9cc9",
        });
    });
    $(".all3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".all4").mouseover(function () {
        $(".p_color4").css({
            "color": "#bc9cc9",
        });
    });
    $(".all4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".all5").mouseover(function () {
        $(".p_color5").css({
            "color": "#bc9cc9",
        });
    });
    $(".all5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".all6").mouseover(function () {
        $(".p_color6").css({
            "color": "#bc9cc9",
        });
    });
    $(".all6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".all7").mouseover(function () {
        $(".p_color7").css({
            "color": "#bc9cc9",
        });
    });
    $(".all7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".all8").mouseover(function () {
        $(".p_color8").css({
            "color": "#bc9cc9",
        });
    });
    $(".all8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".all9").mouseover(function () {
        $(".p_color9").css({
            "color": "#FF92B9",
        });
    });
    $(".all9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".all10").mouseover(function () {
        $(".p_color10").css({
            "color": "#FF92B9",
        });
    });
    $(".all10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".all11").mouseover(function () {
        $(".p_color11").css({
            "color": "#FF92B9",
        });
    });
    $(".all11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".all12").mouseover(function () {
        $(".p_color12").css({
            "color": "#FF92B9",
        });
    });
    $(".all12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".all13").mouseover(function () {
        $(".p_color13").css({
            "color": "#FF92B9",
        });
    });
    $(".all13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".all14").mouseover(function () {
        $(".p_color14").css({
            "color": "#FF92B9",
        });
    });
    $(".all14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".all15").mouseover(function () {
        $(".p_color15").css({
            "color": "#FF92B9",
        });
    });
    $(".all15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".all16").mouseover(function () {
        $(".p_color16").css({
            "color": "#FF92B9",
        });
    });
    $(".all16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });
    $(".all17").mouseover(function () {
        $(".p_color17").css({
            "color": "#60d5ff",
        });
    });
    $(".all17").mouseleave(function () {
        $(".p_color17").css({
            "color": "#3a2f2f",
        });
    });
    $(".all18").mouseover(function () {
        $(".p_color18").css({
            "color": "#60d5ff",
        });
    });
    $(".all18").mouseleave(function () {
        $(".p_color18").css({
            "color": "#3a2f2f",
        });
    });
    $(".all19").mouseover(function () {
        $(".p_color19").css({
            "color": "#60d5ff",
        });
    });
    $(".all19").mouseleave(function () {
        $(".p_color19").css({
            "color": "#3a2f2f",
        });
    });
    $(".all20").mouseover(function () {
        $(".p_color20").css({
            "color": "#60d5ff",
        });
    });
    $(".all20").mouseleave(function () {
        $(".p_color20").css({
            "color": "#3a2f2f",
        });
    });
    $(".all21").mouseover(function () {
        $(".p_color21").css({
            "color": "#5d80cb",
        });
    });
    $(".all21").mouseleave(function () {
        $(".p_color21").css({
            "color": "#3a2f2f",
        });
    });
    $(".all22").mouseover(function () {
        $(".p_color22").css({
            "color": "#5d80cb",
        });
    });
    $(".all22").mouseleave(function () {
        $(".p_color22").css({
            "color": "#3a2f2f",
        });
    });
    $(".all23").mouseover(function () {
        $(".p_color23").css({
            "color": "#5d80cb",
        });
    });
    $(".all23").mouseleave(function () {
        $(".p_color23").css({
            "color": "#3a2f2f",
        });
    });
    $(".all24").mouseover(function () {
        $(".p_color24").css({
            "color": "#5d80cb",
        });
    });
    $(".all24").mouseleave(function () {
        $(".p_color24").css({
            "color": "#3a2f2f",
        });
    });
    // 상품 이름 색상변경 끝






});