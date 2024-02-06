$(function () {
    $(".sub").css(
        "border-radius", "15.5px");
    $(".header_menu>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $(".header_menu>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });
    $(".sub_logo").mouseover(function () {
        $(".sub_logo2").stop().fadeIn();
    });
    $(".sub_logo2").mouseleave(function () {
        $(".sub_logo2").fadeOut();
    });


    // 스크롤 지정위치 효과[메뉴]
    var jbOffset = $('.header_menu').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 974) {//여기 지정된 길이 이후부터 적용됩니다
            $('.header_menu').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('.header_menu').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });

    // 배경효과[메인미니버블]
    var jbOffset = $('.background_').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 80) {//적용이 시작되는 높이
            $('.background_').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
            if ($(document).scrollTop() > 1500) {//적용이 끝나는 높이
                $('.background_').removeClass("on");
            } else {
                $('.background_').addClass("on");
            }
        }
        else {
            $('.background_').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });



    // 쿠폰팝업
    $(".down1").click(function () {
        $(".popup1").fadeIn();
    });
    $(".close1").click(function () {
        $(".popup1").fadeOut();
    });
    $(".down2").click(function () {
        $(".popup2").fadeIn();
    });
    $(".close2").click(function () {
        $(".popup2").fadeOut();
    });

    // 주의사항 팝업
    $(".delivery_order").click(function () {
        $(".order_popup").show();
    });
    $(".order_popup").click(function () {
        $(this).hide();
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




    //sub1,2 (디저트,음료) 하트아이콘
    $(".top_flex li:first-child").click(function () {
        $(".heart_icon2").show();
        $(".heart_icon3").hide();
    });
    $(".top_flex li:last-child").click(function () {
        $(".heart_icon2").hide();
        $(".heart_icon3").show();
    });
    $(".tabs li:first-child>img").css({ "display": "inline-block" })
    $(".new_box a").click(function () {
        $(this).css({
            "transform": "translateX(120px)",
            "transition": "all 0.5s"
        });
        $(".new_box img").show().css({
            "transition": "all 0.5s"
        });
        $(".best_box img").hide();
        $(".best_box a").css({
            "transform": "translateX(0)",
            "transition": "all 0.5s"
        });
    });
    $(".best_box a").click(function () {
        $(this).css({
            "transform": "translateX(120px)",
            "transition": "all 0.5s"
        });
        $(".best_box img").show().css({
            "transition": "all 0.5s"
        });
        $(".new_box img").hide();
        $(".new_box a").css({
            "transform": "translateX(0)",
            "transition": "all 0.5s"
        });
    });


    // (장바구니 , 찜)아이콘 클릭효과
    $(".cart_icon").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "images/sub_menu/cart.png");
        } else {
            $(this).attr("src", "images/sub_menu/cart_full.png");
        }
    });
    $(".hart_icon_").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "images/sub_menu/hart.png");
        } else {
            $(this).attr("src", "images/sub_menu/hart_full.png");
        }
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



    // 스크롤 위치 이동[서브메뉴 클릭 시]
    $(".banner1").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#coupon").offset().top }, 500);

    });

    // top버튼
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 1500) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top_btn').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top_btn').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
    $(".top_btn").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#banner").offset().top }, 500);

    });





});