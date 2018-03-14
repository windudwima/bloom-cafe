function animasiIntro(){
	$("#text span").velocity("transition.slideLeftIn",{
						stagger: 150,
						complete: function(){
							animasiStartButton();
						}
						});
}


function animasiStartButton(){
	$("#start").velocity("transition.bounceUpIn")
				.mouseenter(function(){
						$(this).velocity({width:250});
				})
				.mouseleave(function(){
					$(this).velocity({width:275});
				});
}


function animasiIntroOut(){
	$("#start").attr("disabled", true).css({"color":"black"});
	$("#start").velocity("transition.whirlOut",{
						stagger: 150,
						complete: function(){
						$("#text").velocity({"font-size":"30px", "top":"95%"},
							{duration: 1000, complete: function(){
								callMenu();
								$("#menu ul li a[href='what_we_do']").trigger("click");
								$("#start").attr("disabled", false).css({"color":"black"});
							}
							});
						}
						});
}

function callMenu(){
	$("#menu ul li").velocity("transition.slideLeftIn",{
						stagger: 250
	});
	$("#menu ul li a").off().click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");
		var hrefstring = $(this).attr("href");
		if(hrefstring == "home"){
			home();
		}else{
		if(!$("#" + hrefstring).is(":visible")){
		$(".container-content").fadeOut(1000);
		setTimeout(function(){
		$("#" + hrefstring).show();
		window[hrefstring]();
		}, 1000);
		}
		}
						});
	
}

function what_we_do(){
	$("#what_we_do img").velocity("transition.flipYIn", {duration:1500});
	$("#what_we_do .title").velocity("transition.slideUpIn", {duration:1500});
	$("#what_we_do div").velocity("transition.slideDownIn", {duration:1500});
	
}

function our_team(){
	$(".members.top240").velocity("transition.slideUpIn",{ stagger: 200 });		
	$(".members.top170").velocity("transition.slideDownIn",{ stagger: 200 });		
}

function home(){
	$("#menu ul li").hide();
	$(".container-content").hide();
		$("#text").velocity({"font-size":"56px", "top":"50%"},
		{duration: 1000, complete: function(){
		$("#start").velocity("transition.whirlIn");
							}
							});
}


function menu(){
	$(".members.top240").velocity("transition.slideUpIn",{ stagger: 200 });		
	$(".members.top170").velocity("transition.slideDownIn",{ stagger: 200 });		
}

$(document).ready(function(){
animasiIntro();
});