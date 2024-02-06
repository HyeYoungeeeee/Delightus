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




    // 홀케이크 메뉴 이름 색상변경
    $(".whole1").mouseover(function () {
        $(".p_color1").css({
            "color": "#ff954e",
        });
    });
    $(".whole1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole2").mouseover(function () {
        $(".p_color2").css({
            "color": "#fdde89",
        });
    });
    $(".whole2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".whole3").mouseover(function () {
        $(".p_color3").css({
            "color": "#ff7078",
        });
    });
    $(".whole3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole4").mouseover(function () {
        $(".p_color4").css({
            "color": "#ffa1d8",
        });
    });
    $(".whole4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole5").mouseover(function () {
        $(".p_color5").css({
            "color": "#de6468",
        });
    });
    $(".whole5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole6").mouseover(function () {
        $(".p_color6").css({
            "color": "#ff5a57",
        });
    });
    $(".whole6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole7").mouseover(function () {
        $(".p_color7").css({
            "color": "#b21f22",
        });
    });
    $(".whole7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole8").mouseover(function () {
        $(".p_color8").css({
            "color": "#f7a9a6",
        });
    });
    $(".whole8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole9").mouseover(function () {
        $(".p_color9").css({
            "color": "#fb9453",
        });
    });
    $(".whole9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole10").mouseover(function () {
        $(".p_color10").css({
            "color": "#cb7972",
        });
    });
    $(".whole10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole11").mouseover(function () {
        $(".p_color11").css({
            "color": "#6c3a39",
        });
    });
    $(".whole11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".whole12").mouseover(function () {
        $(".p_color12").css({
            "color": "#dd731a",
        });
    });
    $(".whole12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    // 홀케이크 색상변경 끝


    // 조각케이크 이름 색상변경
    $(".piece1").mouseover(function () {
        $(".p_color1").css({
            "color": "#ff6f66",
        });
    });
    $(".piece1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece2").mouseover(function () {
        $(".p_color2").css({
            "color": "#a7613a",
        });
    });
    $(".piece2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".piece3").mouseover(function () {
        $(".p_color3").css({
            "color": "#ffb574",
        });
    });
    $(".piece3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece4").mouseover(function () {
        $(".p_color4").css({
            "color": "#e11313",
        });
    });
    $(".piece4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece5").mouseover(function () {
        $(".p_color5").css({
            "color": "#f98300",
        });
    });
    $(".piece5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece6").mouseover(function () {
        $(".p_color6").css({
            "color": "#ff6c00",
        });
    });
    $(".piece6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece7").mouseover(function () {
        $(".p_color7").css({
            "color": "#ff9d00",
        });
    });
    $(".piece7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece8").mouseover(function () {
        $(".p_color8").css({
            "color": "#1d181a",
        });
    });
    $(".piece8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece9").mouseover(function () {
        $(".p_color9").css({
            "color": "#873a2e",
        });
    });
    $(".piece9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece10").mouseover(function () {
        $(".p_color10").css({
            "color": "#782c1b",
        });
    });
    $(".piece10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece11").mouseover(function () {
        $(".p_color11").css({
            "color": "#200c09",
        });
    });
    $(".piece11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".piece12").mouseover(function () {
        $(".p_color12").css({
            "color": "#984b20",
        });
    });
    $(".piece12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    // 조각케이크 색상변경 끝

    // 미니디저트 이름 색상변경
    $(".mini1").mouseover(function () {
        $(".p_color1").css({
            "color": "#ff6f66",
        });
    });
    $(".mini1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini2").mouseover(function () {
        $(".p_color2").css({
            "color": "#fa1b1b",
        });
    });
    $(".mini2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".mini3").mouseover(function () {
        $(".p_color3").css({
            "color": "#c47eb8",
        });
    });
    $(".mini3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini4").mouseover(function () {
        $(".p_color4").css({
            "color": "#9b0000",
        });
    });
    $(".mini4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini5").mouseover(function () {
        $(".p_color5").css({
            "color": "#e1dc87",
        });
    });
    $(".mini5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini6").mouseover(function () {
        $(".p_color6").css({
            "color": "#702611",
        });
    });
    $(".mini6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini7").mouseover(function () {
        $(".p_color7").css({
            "color": "#da0e22",
        });
    });
    $(".mini7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini8").mouseover(function () {
        $(".p_color8").css({
            "color": "#ff5555",
        });
    });
    $(".mini8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini9").mouseover(function () {
        $(".p_color9").css({
            "color": "#db110a",
        });
    });
    $(".mini9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini10").mouseover(function () {
        $(".p_color10").css({
            "color": "#ffaaaa",
        });
    });
    $(".mini10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini11").mouseover(function () {
        $(".p_color11").css({
            "color": "#fd0000",
        });
    });
    $(".mini11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini12").mouseover(function () {
        $(".p_color12").css({
            "color": "#9ba32e",
        });
    });
    $(".mini12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini13").mouseover(function () {
        $(".p_color13").css({
            "color": "#f62642",
        });
    });
    $(".mini13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini14").mouseover(function () {
        $(".p_color14").css({
            "color": "#ffda3d",
        });
    });
    $(".mini14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini15").mouseover(function () {
        $(".p_color15").css({
            "color": "#ac2515",
        });
    });
    $(".mini15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini16").mouseover(function () {
        $(".p_color16").css({
            "color": "#904111",
        });
    });
    $(".mini16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini17").mouseover(function () {
        $(".p_color17").css({
            "color": "#5d1600",
        });
    });
    $(".mini17").mouseleave(function () {
        $(".p_color17").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini18").mouseover(function () {
        $(".p_color18").css({
            "color": "#cfcf47",
        });
    });
    $(".mini18").mouseleave(function () {
        $(".p_color18").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini19").mouseover(function () {
        $(".p_color19").css({
            "color": "#a15b27",
        });
    });
    $(".mini19").mouseleave(function () {
        $(".p_color19").css({
            "color": "#3a2f2f",
        });
    });
    $(".mini20").mouseover(function () {
        $(".p_color20").css({
            "color": "#924e35",
        });
    });
    $(".mini20").mouseleave(function () {
        $(".p_color20").css({
            "color": "#3a2f2f",
        });
    });

    // 미니디저트 이름 색상변경 끝

    // 샌드위치 이름 색상변경
    $(".sandwich1").mouseover(function () {
        $(".p_color1").css({
            "color": "#d6772b",
        });
    });
    $(".sandwich1").mouseleave(function () {
        $(".p_color1").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich2").mouseover(function () {
        $(".p_color2").css({
            "color": "#cbc857",
        });
    });
    $(".sandwich2").mouseleave(function () {
        $(".p_color2").css({
            "color": "#3a2f2f",
        });
    });

    $(".sandwich3").mouseover(function () {
        $(".p_color3").css({
            "color": "#ffb574",
        });
    });
    $(".sandwich3").mouseleave(function () {
        $(".p_color3").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich4").mouseover(function () {
        $(".p_color4").css({
            "color": "#a43308",
        });
    });
    $(".sandwich4").mouseleave(function () {
        $(".p_color4").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich5").mouseover(function () {
        $(".p_color5").css({
            "color": "#ffd6a3",
        });
    });
    $(".sandwich5").mouseleave(function () {
        $(".p_color5").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich6").mouseover(function () {
        $(".p_color6").css({
            "color": "#7e3d28",
        });
    });
    $(".sandwich6").mouseleave(function () {
        $(".p_color6").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich7").mouseover(function () {
        $(".p_color7").css({
            "color": "#ffc35b",
        });
    });
    $(".sandwich7").mouseleave(function () {
        $(".p_color7").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich8").mouseover(function () {
        $(".p_color8").css({
            "color": "#ffa600",
        });
    });
    $(".sandwich8").mouseleave(function () {
        $(".p_color8").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich9").mouseover(function () {
        $(".p_color9").css({
            "color": "#b95c18",
        });
    });
    $(".sandwich9").mouseleave(function () {
        $(".p_color9").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich10").mouseover(function () {
        $(".p_color10").css({
            "color": "#9a5212",
        });
    });
    $(".sandwich10").mouseleave(function () {
        $(".p_color10").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich11").mouseover(function () {
        $(".p_color11").css({
            "color": "#773d1c",
        });
    });
    $(".sandwich11").mouseleave(function () {
        $(".p_color11").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich12").mouseover(function () {
        $(".p_color12").css({
            "color": "#984b20",
        });
    });
    $(".sandwich12").mouseleave(function () {
        $(".p_color12").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich13").mouseover(function () {
        $(".p_color13").css({
            "color": "#3f0600",
        });
    });
    $(".sandwich13").mouseleave(function () {
        $(".p_color13").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich14").mouseover(function () {
        $(".p_color14").css({
            "color": "#ffb523",
        });
    });
    $(".sandwich14").mouseleave(function () {
        $(".p_color14").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich15").mouseover(function () {
        $(".p_color15").css({
            "color": "#892a0c",
        });
    });
    $(".sandwich15").mouseleave(function () {
        $(".p_color15").css({
            "color": "#3a2f2f",
        });
    });
    $(".sandwich16").mouseover(function () {
        $(".p_color16").css({
            "color": "#c26d36",
        });
    });
    $(".sandwich16").mouseleave(function () {
        $(".p_color16").css({
            "color": "#3a2f2f",
        });
    });


    // 샌드위치 이름 색상변경 끝
});