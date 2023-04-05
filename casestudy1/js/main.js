$(function(){
		$("#gnb > ul > li").hover(
			function(){
				$(this).parent().addClass("active");
			},
			function(){
				$(this).parent().removeClass("active");
			}
		);
	$("#gnb > ul > li").focusin(function(){
		$(this).addClass("active");
	});
	$("#gnb > ul > li").focusout(function(){
		$(this).removeClass("active");
	});
	$("#gnb > ul > li:first-child").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li:last-child li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		$(this).parent().parent().parent().removeClass("active");
	});

	var n=0;
	let pageN=0;

	$(".keyvisual li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");

	$(".pagination li").click(function(e){ 
	e.preventDefault(); 
	$(".pagination li").removeClass("current");
	$(this).addClass("current");

	pageN=$(this).index();
	console.log(pageN);	

	$(".keyvisual li").removeClass("current");
	$(".keyvisual li").eq(pageN).addClass("current")
});

	$(".right").click(function(e){
	e.preventDefault();

	if(pageN < 3){
		pageN=pageN+1;   
	}
	else{
		pageN=0;
	}

	$(".pagination li").removeClass("current");
	$(".pagination li").eq(pageN).addClass("current");
	$(".keyvisual li").removeClass("current");
	$(".keyvisual li").eq(pageN).addClass("current");
});
	$(".left").click(function(e){
	e.preventDefault();

	if(pageN > 0){
		pageN=pageN-1;
	}
	else{
		pageN=3;
	}
	
	$(".pagination li").removeClass("current");
	$(".pagination li").eq(pageN).addClass("current");
	$(".keyvisual li").removeClass("current");
	$(".keyvisual li").eq(pageN).addClass("current");
});
});