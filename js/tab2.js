$(document).ready(function () {

    //탭 윗부분
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $(".tabs").children().eq(0).addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $(".tabs").children().click(function () {

        $(".tabs").children().removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

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


    // 배경효과
    var jbOffset = $('.background').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 700) {//적용이 시작되는 높이
            $('.background').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
            if ($(document).scrollTop() > 5000) {//적용이 끝나는 높이
                $('.background').removeClass("on");
            } else {
                $('.background').addClass("on");
            }
        }
        else {
            $('.background').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
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


    // 스크롤 위치 이동
    $(".go_btn").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#menu").offset().top }, 500);

    });



    // top버튼
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 1000) {//아이콘이 나타나길 원하는 높이를 설정하세요
            $('.top_btn_').fadeIn();//나타날 아이콘 클래스 수정!
        } else {
            $('.top_btn_').fadeOut();//나타날 아이콘 클래스 수정!
        }
    });
    $(".top_btn_").click(function (event) {

        event.preventDefault();

        $('html, body').animate({ scrollTop: $("#header_bg").offset().top }, 500);

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




    // 커피 이름 색상변경
    $(".beverage1").mouseover(function () {
        $(".p_color1").css({
            "color": "#a45a38",
        });
    });
    $(".beverage1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage2").mouseover(function () {
        $(".p_color2").css({
            "color": "#ffe49d",
        });
    });
    $(".beverage2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".beverage3").mouseover(function () {
        $(".p_color3").css({
            "color": "#c79355",
        });
    });
    $(".beverage3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage4").mouseover(function () {
        $(".p_color4").css({
            "color": "#ab9b96",
        });
    });
    $(".beverage4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage5").mouseover(function () {
        $(".p_color5").css({
            "color": "#acc781",
        });
    });
    $(".beverage5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage6").mouseover(function () {
        $(".p_color6").css({
            "color": "#d9cb80",
        });
    });
    $(".beverage6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage7").mouseover(function () {
        $(".p_color7").css({
            "color": "#f3b113",
        });
    });
    $(".beverage7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".beverage8").mouseover(function () {
        $(".p_color8").css({
            "color": "#cd974a",
        });
    });
    $(".beverage8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });

    // 커피 이름 색상변경 끝

    // 스무디 이름 색상변경
    $(".smoothie1").mouseover(function () {
        $(".p_color1").css({
            "color": "#ff7d59",
        });
    });
    $(".smoothie1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie2").mouseover(function () {
        $(".p_color2").css({
            "color": "#e0655f",
        });
    });
    $(".smoothie2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".smoothie3").mouseover(function () {
        $(".p_color3").css({
            "color": "#ffa8b5",
        });
    });
    $(".smoothie3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie4").mouseover(function () {
        $(".p_color4").css({
            "color": "#4f261c",
        });
    });
    $(".smoothie4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie5").mouseover(function () {
        $(".p_color5").css({
            "color": "#ff1701",
        });
    });
    $(".smoothie5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie6").mouseover(function () {
        $(".p_color6").css({
            "color": "#db0d16",
        });
    });
    $(".smoothie6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie7").mouseover(function () {
        $(".p_color7").css({
            "color": "#ffc43b",
        });
    });
    $(".smoothie7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie8").mouseover(function () {
        $(".p_color8").css({
            "color": "#ffcd36",
        });
    });
    $(".smoothie8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie9").mouseover(function () {
        $(".p_color9").css({
            "color": "#af0000",
        });
    });
    $(".smoothie9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie10").mouseover(function () {
        $(".p_color10").css({
            "color": "#fbd138",
        });
    });
    $(".smoothie10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie11").mouseover(function () {
        $(".p_color11").css({
            "color": "#a9acff",
        });
    });
    $(".smoothie11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie12").mouseover(function () {
        $(".p_color12").css({
            "color": "#c3b90a",
        });
    });
    $(".smoothie12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie13").mouseover(function () {
        $(".p_color13").css({
            "color": "#6b4224",
        });
    });
    $(".smoothie13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie14").mouseover(function () {
        $(".p_color14").css({
            "color": "#90360c",
        });
    });
    $(".smoothie14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie15").mouseover(function () {
        $(".p_color15").css({
            "color": "#a98048",
        });
    });
    $(".smoothie15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie16").mouseover(function () {
        $(".p_color16").css({
            "color": "#1a0201",
        });
    });
    $(".smoothie16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie17").mouseover(function () {
        $(".p_color17").css({
            "color": "#30211b",
        });
    });
    $(".smoothie17").mouseleave(function () {
        $(".p_color17").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie18").mouseover(function () {
        $(".p_color18").css({
            "color": "#47292f",
        });
    });
    $(".smoothie18").mouseleave(function () {
        $(".p_color18").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie19").mouseover(function () {
        $(".p_color19").css({
            "color": "#94602d",
        });
    });
    $(".smoothie19").mouseleave(function () {
        $(".p_color19").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie20").mouseover(function () {
        $(".p_color20").css({
            "color": "#e17a01",
        });
    });
    $(".smoothie20").mouseleave(function () {
        $(".p_color20").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie21").mouseover(function () {
        $(".p_color21").css({
            "color": "#9abc01",
        });
    });
    $(".smoothie21").mouseleave(function () {
        $(".p_color21").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie22").mouseover(function () {
        $(".p_color22").css({
            "color": "#92a126",
        });
    });
    $(".smoothie22").mouseleave(function () {
        $(".p_color22").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie23").mouseover(function () {
        $(".p_color23").css({
            "color": "#a6e386",
        });
    });
    $(".smoothie23").mouseleave(function () {
        $(".p_color23").css({
            "color": "#3a2f2f",
        });
    });
    $(".smoothie24").mouseover(function () {
        $(".p_color24").css({
            "color": "#02c4cb",
        });
    });
    $(".smoothie24").mouseleave(function () {
        $(".p_color24").css({
            "color": "#3a2f2f",
        });
    });
    // 스무디 이름 색상변경 끝

    // 과일주스 이름 색상변경
    $(".juice1").mouseover(function () {
        $(".p_color1").css({
            "color": "#f42831",
        });
    });
    $(".juice1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice2").mouseover(function () {
        $(".p_color2").css({
            "color": "#ff7e86",
        });
    });
    $(".juice2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".juice3").mouseover(function () {
        $(".p_color3").css({
            "color": "#b70310",
        });
    });
    $(".juice3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice4").mouseover(function () {
        $(".p_color4").css({
            "color": "#ff4800",
        });
    });
    $(".juice4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice5").mouseover(function () {
        $(".p_color5").css({
            "color": "#ff4241",
        });
    });
    $(".juice5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice6").mouseover(function () {
        $(".p_color6").css({
            "color": "#ff9e76",
        });
    });
    $(".juice6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice7").mouseover(function () {
        $(".p_color7").css({
            "color": "#feb100",
        });
    });
    $(".juice7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice8").mouseover(function () {
        $(".p_color8").css({
            "color": "#dd9504",
        });
    });
    $(".juice8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice9").mouseover(function () {
        $(".p_color9").css({
            "color": "#ff6b1c",
        });
    });
    $(".juice9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice10").mouseover(function () {
        $(".p_color10").css({
            "color": "#a8a247",
        });
    });
    $(".juice10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice11").mouseover(function () {
        $(".p_color11").css({
            "color": "#ffd800",
        });
    });
    $(".juice11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice12").mouseover(function () {
        $(".p_color12").css({
            "color": "#cbcb25",
        });
    });
    $(".juice12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice13").mouseover(function () {
        $(".p_color13").css({
            "color": "#ffed8a",
        });
    });
    $(".juice13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice14").mouseover(function () {
        $(".p_color14").css({
            "color": "#ffeea4",
        });
    });
    $(".juice14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice15").mouseover(function () {
        $(".p_color15").css({
            "color": "#fcd066",
        });
    });
    $(".juice15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".juice16").mouseover(function () {
        $(".p_color16").css({
            "color": "#ff2518",
        });
    });
    $(".juice16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });

    // 과일주스 이름 색상변경 끝

    // 기타(글라스) 이름 색상변경
    $(".glass1").mouseover(function () {
        $(".p_color1").css({
            "color": "#ff9f07",
        });
    });
    $(".glass1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass2").mouseover(function () {
        $(".p_color2").css({
            "color": "#f4bb00",
        });
    });
    $(".glass2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".glass3").mouseover(function () {
        $(".p_color3").css({
            "color": "#ff8901",
        });
    });
    $(".glass3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass4").mouseover(function () {
        $(".p_color4").css({
            "color": "#ff651a",
        });
    });
    $(".glass4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass5").mouseover(function () {
        $(".p_color5").css({
            "color": "#bcd57d",
        });
    });
    $(".glass5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass6").mouseover(function () {
        $(".p_color6").css({
            "color": "#de7e39",
        });
    });
    $(".glass6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass7").mouseover(function () {
        $(".p_color7").css({
            "color": "#ff9382",
        });
    });
    $(".glass7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass8").mouseover(function () {
        $(".p_color8").css({
            "color": "#72493b",
        });
    });
    $(".glass8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass9").mouseover(function () {
        $(".p_color9").css({
            "color": "#493a2e",
        });
    });
    $(".glass9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass10").mouseover(function () {
        $(".p_color10").css({
            "color": "#d32d2e",
        });
    });
    $(".glass10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass11").mouseover(function () {
        $(".p_color11").css({
            "color": "#823d0a",
        });
    });
    $(".glass11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass12").mouseover(function () {
        $(".p_color12").css({
            "color": "#ed1e04",
        });
    });
    $(".glass12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass13").mouseover(function () {
        $(".p_color13").css({
            "color": "#fe9ba4",
        });
    });
    $(".glass13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass14").mouseover(function () {
        $(".p_color14").css({
            "color": "#eee354",
        });
    });
    $(".glass14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass15").mouseover(function () {
        $(".p_color15").css({
            "color": "#ff89b3",
        });
    });
    $(".glass15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".glass16").mouseover(function () {
        $(".p_color16").css({
            "color": "#5a2702",
        });
    });
    $(".glass16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });

    // 기타(글라스) 이름 색상변경 끝





});