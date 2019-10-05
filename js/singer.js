function Func(control,num1,num2,num3,num4) {

    $(".bigBox .navUl li").css({
        "background": "linear-gradient(to bottom,#FFF,rgb(230,230,230))"
    });

    $(control).css({
        "background": "#FFF",
    });
    $(".hotProduction").css({
        "display": num1
    });
    $(".allDisc").css({
        "display": num2
    });
    $(".mv").css({
        "display": num3
    });
    $(".details").css({
        "display": num4
    });
}

$(function(){
    Func(".control_1","inline","none","none","none");
});

$(".control_1").click(function(){
    Func(".control_1","inline","none","none","none");
});

$(".control_2").click(function(){

    Func(".control_2","none","inline","none","none");
});

$(".control_3").click(function(){
    Func(".control_3","none","none","inline","none");
});

$(".control_4").click(function(){
    Func(".control_4","none","none","none","inline");
});
