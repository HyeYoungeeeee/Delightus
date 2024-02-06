$(document).ready(function () {
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



    // 헤더 나타내기
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 970) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.header_inner').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.header_inner').fadeOut();//나타날 아이콘 클래스 수정!
        }


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













});