"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();
var $html = $("html");
var htmlH;

$window.on("load",function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    main();
});
function main(){
    var $bright = $(".bright"),
        $section03Contents = $(".section_03_contents"),
        $nav = $("#nav"),
        sectionHeightArr = [];

    function sectionHeight(){
        for(var i = 2; i <= $(".section_height").length + 1; i++){
            sectionHeightArr.push($("#section_0"+i+"").offset().top);
        }
    }

    //nav effect
    function navAct(){
        if( sectionHeightArr[0] - 400 > winSc){
            TweenMax.to($nav, .5, {opacity:0});
            $(".page").removeClass("active_dark active_bright");
        }
        else if(sectionHeightArr[0] < winSc + 400 && winSc < sectionHeightArr[1] - 400 ){
            TweenMax.to($nav, .5, {opacity:1});
            $(".page").removeClass("active_dark active_bright");
            $(".page_1").addClass("active_dark");
            $(".section_link").removeClass("active_bright_text active_dark_text");
            $(".section_link_01").addClass("active_dark_text");
        }
        else if(sectionHeightArr[1] < winSc + 400 && winSc < sectionHeightArr[2] - 400){
            TweenMax.to($nav, .5, {opacity:1});
            $(".page").removeClass("active_dark active_bright");
            $(".page_2").addClass("active_bright");
            $(".section_link").removeClass("active_bright_text active_dark_text");
            $(".section_link_02").addClass("active_bright_text");
            //light off
            for(var i = 0; i < $bright.length; i++){
                $(".bright_"+ (i+1) + "").css({"opacity":0});
            }
        }
        else if(sectionHeightArr[2] < winSc + 500 && winSc < sectionHeightArr[2] + 3860){ //문제의 구간
            TweenMax.to($nav, .5, {opacity:1});
            $(".page").removeClass("active_dark active_bright");
            $(".page_3").addClass("active_dark");
            $(".section_link").removeClass("active_bright_text active_dark_text");
            $(".section_link_03").addClass("active_dark_text");
            //light on
            for(var i = 0; i < $bright.length; i++){
                $(".bright_"+ (i+1) + "").css({"opacity":1, "transition-delay":Math.random()+"s"});
            }
        }
        else if(sectionHeightArr[3] < winSc + 400 && winSc < sectionHeightArr[3] + 6700){
            TweenMax.to($nav, .5, {opacity:1});
            $(".page").removeClass("active_dark active_bright");
            $(".page_4").addClass("active_bright");
            $(".section_link").removeClass("active_bright_text active_dark_text");
            $(".section_link_04").addClass("active_bright_text");
        }
        else if(sectionHeightArr[4] < winSc + 400){
            TweenMax.to($nav, .5, {opacity:1});
            $(".page").removeClass("active_dark active_bright");
            $(".page_5").addClass("active_bright");
            $(".section_link").removeClass("active_bright_text active_dark_text");
            $(".section_link_05").addClass("active_bright_text");
        }
    }

    //section01 animation
    function section01Ani() {
        TweenMax.to($(".main_title_bg"), .5, {top: "500px", opacity: 1});
        TweenMax.to($(".main_title_01"), .3, {left: "42px", opacity: 1});
        TweenMax.to($(".main_title_02"), .4, {left: "50px", opacity: 1});
        TweenMax.to($(".main_title_03"), .5, {left: "530px", opacity: 1});
    }

    //section03 hover effect
    function section03HoverEffect() {
        $section03Contents.find(".box").on("mouseenter", function () {
            TweenMax.to($(this).find(".dimmed"), .5, {opacity: 1});
        })
        $section03Contents.find(".box").on("mouseleave", function () {
            TweenMax.to($(this).find(".dimmed"), .5, {opacity: 0});
        })
    }

    //function execute
    section01Ani();
    sectionHeight();
    section03HoverEffect();

    $(window).on("scroll",function(){
        navAct();
    });

    var controller = new ScrollMagic.Controller();

    //object tweenmax
    var section03Scr = new TimelineMax();
    var section_03_01 = TweenMax.fromTo($(".section_03_title"), .1, {y: 400}, {y: 0});
    var section_03_02 = TweenMax.fromTo($(".section_03_contents .box_01"), .2, {y: 350}, {y: -200, delay:.15});
    var section_03_03 = TweenMax.fromTo($(".section_03_contents .box_02"), .5, {y: 200}, {y: -200, delay:.05});
    var section_03_04 = TweenMax.fromTo($(".section_03_contents .box_03"), .1, {y: 280}, {y: -200, delay:.23 });
    var section_03_05 = TweenMax.fromTo($(".section_03_contents .box_04"), .3, {y: 200}, {y: -400, delay:.2 });
    section03Scr.add([section_03_01,section_03_02,section_03_03,section_03_04,section_03_05])

    var section04Scr = new TimelineMax();
    var section_04_01 = TweenMax.fromTo($(".section_04_txt_01"), 1, {y: "80%"}, {y: "-50%", opacity:1 });
    var section_04_02 = TweenMax.fromTo($(".section_04_txt_02"), 1, {y: "50%"}, {y: "-10%", opacity:1, delay:1 });
    var section_04_03 = TweenMax.fromTo($("#section_04-01"), 1, {y: 0, x:"100%"}, {y: 0, x:"0.0001%", delay:2});
    var section_04_04 = TweenMax.fromTo($("#section_04-01 p"), .5, {y: "50px"}, {y:0, opacity:1, delay:3});
    var section_04_05 = TweenMax.fromTo($("#section_04-02"), 1, {y: 0, x:"100%"}, {y: 0, x:"0.0001%", delay:4});
    var section_04_06 = TweenMax.fromTo($("#section_04-02 p"), .5, {y: "50px"}, {y:0, opacity:1, delay:5});
    section04Scr.add([section_04_01,section_04_02,section_04_03,section_04_04,section_04_05,section_04_06]);

    var section05Scr = new TimelineMax();
    var section_05_01 = TweenMax.fromTo($(".section_05_title"), .5, {y: 400}, {y: 0});
    var section_05_02 = TweenMax.fromTo($(".section_05_contents .box_01"), .4, {y: 300}, {y: 0, delay:.5});
    var section_05_03 = TweenMax.fromTo($(".section_05_contents .box_02"), .4, {y: 500}, {y: 0, delay:.7});
    var section_05_04 = TweenMax.fromTo($(".section_05_contents .box_03"), .4, {y: 450}, {y: 0, delay:.9});
    var section_05_05 = TweenMax.fromTo($(".section_05_contents .box_04"), .4, {y: 400}, {y: 0, delay:1.1});
    var section_05_06 = TweenMax.fromTo($(".section_05_contents .box_05"), .4, {y: 400}, {y: 0, delay:1.3});
    var section_05_07 = TweenMax.fromTo($(".section_05_contents .box_06"), .4, {y: 500}, {y: 0, delay:1.5});
    var section_05_08 = TweenMax.fromTo($(".section_05_bottom"), .5, {y: 400}, {y: 0, delay:1.7});
    section05Scr.add([section_05_01,section_05_02,section_05_03,section_05_04,section_05_05,section_05_06,section_05_07,section_05_08]);

    var section06Scr = new TimelineMax();
    var section_06_01 = TweenMax.fromTo($("#section_06 p"), 2, {y: "80%"}, {y: "-30%", opacity:1 });
    var section_06_02 = TweenMax.fromTo($("#section_06 a"), 2, {y: "70%"}, {y: "-20%", opacity:1, delay:1 });
    section06Scr.add([section_06_01,section_06_02]);


    //scroll magic scene
    var section03ScrM = new ScrollMagic.Scene({
        triggerElement: "#section_03",
        duration: "500%",
        triggerHook: 1
    })
        .setTween(section03Scr)
        .addTo(controller)
        // .addIndicators({
        //     name: "1"
        // })

    var section04ScrM = new ScrollMagic.Scene({
        triggerElement: "#section_04",
        duration: $("#section_04").height() + 2500,
        triggerHook: 0
    })
        .setPin("#section_04")
        .setTween(section04Scr)
        .addTo(controller)
        // .addIndicators({
        //     name: "2"
        // })

    var section05ScrM = new ScrollMagic.Scene({
        triggerElement: "#section_05",
        duration: "405%",
        offset: 200,
        triggerHook: 1
    })
        .setTween(section05Scr)
        .addTo(controller)
        // .addIndicators({
        //     name: "3"
        // })

    var section06ScrM = new ScrollMagic.Scene({
        triggerElement: "#section_06",
        duration: $("#section_06").height() - 500,
        offset:400,
        triggerHook: 1
    })
        .setTween(section06Scr)
        .addTo(controller)
        // .addIndicators({
        //     name: "4"
        // })
}