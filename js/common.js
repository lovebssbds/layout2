$(function(){
    $(".main-nav").mouseenter(function(){
        $(".drop-back").stop().slideDown();
        $(".drop").stop().slideDown();
      
    })
    $(".main-nav").mouseleave(function(){
        $(".drop-back").stop().slideUp();
        $(".drop").stop().slideUp();    
    })
    
/*     //updown slide

    var sheight=0; //슬라이드 높이
    var slideCount=1;
    var slideLength=0
    var auto=null;
    var slidePosition=0
    var $slides=$(".slides")
    var $slide=$(".slides").children(".slide");

    function slideInit(){
        var slider_wrap=$(".sl-g").height();
        sheight=slider_wrap/slideCount;
        $slide.css({"height":sheight})
        slideLength=$(".slide").length;
        $slides.css({"height":sheight*slideLength})
    }
    slideInit();

    function slideEvent(){

        function slideMove(){
            $slides.stop().animate({
                top:-
            })
        }
    } */
})