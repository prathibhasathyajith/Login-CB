$(document).ready(function () {
    $(".cb-dashboard").mouseover(function(){
        $(this).removeClass('dash');
        $(this).addClass('dash-r');
        $(".cb-main-content").css({"border-bottom-left-radius":"130px","border-top-left-radius":"130px"});
        $(".cb-main-content").css({"border-bottom-right-radius":"0px","border-top-right-radius":"0px"});
    });
    $(".cb-minibank").mouseover(function(){
        $(this).removeClass('mini');
        $(this).addClass('mini-r');
        $(".cb-main-content").css({"border-bottom-right-radius":"130px","border-top-right-radius":"130px"});
        $(".cb-main-content").css({"border-bottom-left-radius":"0px","border-top-left-radius":"0px"});
    });
    
    $(".cb-dashboard").mouseleave(function(){
        $(this).removeClass('dash-r');
        $(this).addClass('dash');
        $(".cb-main-content").css({"border-radius":"70px"});
    });
    $(".cb-minibank").mouseleave(function(){
        $(this).removeClass('mini-r');
        $(this).addClass('mini');
        $(".cb-main-content").css({"border-radius":"70px"});
    });

    
});
