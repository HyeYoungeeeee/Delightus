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



    // 주의사항 팝업
    $(".delivery_order").click(function () {
        $(".order_popup").show();
    });
    $(".order_popup").click(function () {
        $(this).hide();
    });


    // 작성완료 팝업
    $(".last_btn").click(function () {
        $(".popup2_img").show();
    });
    $(".popup2_img").click(function () {
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

    // 개수 카운팅 버튼
    let counter = 0;

    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.querySelector('#reset');

    // To increment the value of counter
    incrementBtn.addEventListener('click', () => {
        counter--;
        counterValue.innerHTML = counter;
    });

    // To decrement the value of counter
    decrementBtn.addEventListener('click', () => {
        counter++;
        counterValue.innerHTML = counter;
    });

    // To reset the counter to zero
    resetBtn.addEventListener('click', reset);

    function reset() {
        counter = 0;
        counterValue.innerHTML = counter;
    }

    //추가할부분 시작

    // 하늘색 슬라이드 개수 카운팅 버튼
    let counter1 = 0;

    const counterValue1 = document.getElementById('counter-value1');
    const incrementBtn1 = document.getElementById('increment-btn1');
    const decrementBtn1 = document.getElementById('decrement-btn1');
    const resetBtn1 = document.querySelector('#reset1');

    // To increment the value of counter
    incrementBtn1.addEventListener('click', () => {
        counter1--;
        counterValue1.innerHTML = counter1;
    });

    // To decrement the value of counter
    decrementBtn1.addEventListener('click', () => {
        counter1++;
        counterValue1.innerHTML = counter1;
    });

    // To reset the counter to zero
    resetBtn1.addEventListener('click', reset1);

    function reset1() {
        counter1 = 0;
        counterValue1.innerHTML = counter1;
    }



    // 시계 스타일
    $("input[type=time]").clockInput(false);



    // 달력
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    const day = document.querySelector(".calendar-dates");

    const currdate = document
        .querySelector(".calendar-current-date");

    const prenexIcons = document
        .querySelectorAll(".calendar-navigation span");

    // Array of month names
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Function to generate the calendar
    const manipulate = () => {

        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay();

        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();

        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();

        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();

        // Variable to store the generated calendar HTML
        let lit = "";

        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lit +=
                `<li class="inactive">${monthlastdate - i + 1}</li>`;
        }

        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {

            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active"
                : "";
            lit += `<li class="${isToday}">${i}</li>`;
        }

        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            lit += `<li class="inactive">${i - dayend + 1}</li>`
        }

        // Update the text of the current date element 
        // with the formatted current month and year
        currdate.innerText = `${months[month]} ${year}`;

        // update the HTML of the dates element 
        // with the generated calendar
        day.innerHTML = lit;
    }

    manipulate();

    // Attach a click event listener to each icon
    prenexIcons.forEach(icon => {

        // When an icon is clicked
        icon.addEventListener("click", () => {

            // Check if the icon is "calendar-prev"
            // or "calendar-next"
            month = icon.id === "calendar-prev" ? month - 1 : month + 1;

            // Check if the month is out of range
            if (month < 0 || month > 11) {

                // Set the date to the first day of the 
                // month with the new year
                date = new Date(year, month, new Date().getDate());

                // Set the year to the new year
                year = date.getFullYear();

                // Set the month to the new month
                month = date.getMonth();
            }

            else {

                // Set the date to the current date
                date = new Date();
            }

            // Call the manipulate function to 
            // update the calendar display
            manipulate();
        });
    });

    // 파란 슬라이드달력
    let date1 = new Date();
    let year1 = date1.getFullYear();
    let month1 = date1.getMonth();

    const day1 = document.querySelector(".calendar-dates1");

    const currdate1 = document
        .querySelector(".calendar-current-date1");

    const prenexIcons1 = document
        .querySelectorAll(".calendar-navigation1 span");

    // Array of month names
    const months1 = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Function to generate the calendar
    const manipulate1 = () => {

        // Get the first day of the month
        let dayone1 = new Date(year1, month1, 1).getDay();

        // Get the last date of the month
        let lastdate1 = new Date(year1, month1 + 1, 0).getDate();

        // Get the day of the last date of the month
        let dayend1 = new Date(year1, month1, lastdate1).getDay();

        // Get the last date of the previous month
        let monthlastdate1 = new Date(year1, month1, 0).getDate();

        // Variable to store the generated calendar HTML
        let lit1 = "";

        // Loop to add the last dates of the previous month
        for (let i = dayone1; i > 0; i--) {
            lit1 +=
                `<li class="inactive">${monthlastdate1 - i + 1}</li>`;
        }

        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate1; i++) {

            // Check if the current date is today
            let isToday1 = i === date1.getDate()
                && month1 === new Date().getMonth()
                && year1 === new Date().getFullYear()
                ? "active1"
                : "";
            lit1 += `<li class="${isToday1}">${i}</li>`;
        }

        // Loop to add the first dates of the next month
        for (let i = dayend1; i < 6; i++) {
            lit1 += `<li class="inactive">${i - dayend1 + 1}</li>`
        }

        // Update the text of the current date element 
        // with the formatted current month and year
        currdate1.innerText = `${months1[month1]} ${year1}`;

        // update the HTML of the dates element 
        // with the generated calendar
        day1.innerHTML = lit1;
    }

    manipulate1();

    // Attach a click event listener to each icon
    prenexIcons1.forEach(icon1 => {

        // When an icon is clicked
        icon1.addEventListener("click", () => {

            // Check if the icon is "calendar-prev"
            // or "calendar-next"
            month1 = icon1.id === "calendar-prev1" ? month1 - 1 : month1 + 1;

            // Check if the month is out of range
            if (month1 < 0 || month1 > 11) {

                // Set the date to the first day of the 
                // month with the new year
                date1 = new Date(year1, month1, new Date().getDate());

                // Set the year to the new year
                year1 = date1.getFullYear();

                // Set the month to the new month
                month1 = date1.getMonth();
            }

            else {

                // Set the date to the current date
                date1 = new Date();
            }

            // Call the manipulate function to 
            // update the calendar display
            manipulate1();
        });
    });



    // 아코디언
    $('.ab_accordion_header').click(function () {
        // toggle the content
        $(this).next('.ab_accordion_content').slideToggle(200);
        // toggle the arrow icon
        $(this).toggleClass('active');
        // hide the other contents
        $('.ab_accordion_content').not($(this).next()).slideUp(200);
        // remove the active class from other headers
        $('.ab_accordion_header').not($(this)).removeClass('active');
    });



});