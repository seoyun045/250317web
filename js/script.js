const grid=$(".contents").isotope();

$(".btns>li").click(function(){
 $(this).addClass("active");
 $(this).siblings().removeClass("active");

 /*필터기능*/ 
 let a=$(this).attr('data-filter')
$(".contents").isotope({filter:a})




})

$(".fancybox").fancybox();

setTimeout(function(){$(".contents").isotope('layout)},100)
