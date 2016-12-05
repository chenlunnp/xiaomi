$("#head_car").hover(function(){
    $(this).css("background", "#fff");
    $(".head_car_text").css("color", "red");
    $(".car_text").css("display","block")
    $("#car_content").css({"width":"300px"}).animate({
        height:"100px"
    },400).finish();
},function(){
    $(this).css("background", "#424242");
    $(".head_car_text").css("color", "#b0b0b0");
    $(".car_text").css("display","none")
    $("#car_content").css({"width":"300px"}).animate({
        height:"0px"
    },400);
})
//导航栏控制显示
//$(".menu_li").hover(function(){
//  $("#menu_content_bg").css("border","1px solid #D0D0D0");
//  $(this).css("color","#ff6700");
//  $("#"+$(this).attr("control")).show();
////  $("#menu_content_bg").height(230);
//},function(){
//  $("#"+$(this).attr("control")).hide();
// $(this).css("color"," #424242");
////  $("#menu_content_bg").height(0);
//  $("#menu_content_bg").css("border","0px solid #D0D0D0");
//})

$(".menu_li").each(function(index){
	var df=$(this);
	df.hover(function(){
		
		var qqq=df.index();
		$("#menu_content_wrap li").eq(qqq).fadeIn(300).siblings().fadeOut(30);
	})
})


$("#menu_content_bg").hide();
$(".menu_li").mouseenter(function(){
	$("#menu_content_bg").show()
});
$('#menu_content_bg').mouseleave(function(){
	$("#menu_content_bg").hide()
});



//搜索框
$("#find_input").focus(function(){
    $("#find_wrap").css("border","1px solid #ff6700");
    $("#find_but").css("border-left","1px solid #ff6700");
})
$("#find_input").blur(function(){
    $("#find_wrap").css("border","1px solid #F0F0F0");
    $("#find_but").css("border-left","1px solid #F0F0F0");
})

var pic = $("#big_banner_pic_wrap li"),

    pagesNode = $(".page li");
    
    pic.eq(0).show().siblings().hide();
    pagesNode.eq(0).addClass("ssss"); 
    
    pagesNode.each(function(index){
			var zzz =$(this);
			$(this).click(function(){
				zzz.addClass("ssss").siblings().removeClass("ssss");
				var index =zzz.index();
				pic.eq(index).fadeIn(300).siblings().fadeOut(30);
			})
		}
		);
		
		 $("#big_banner_change_prev").click(function(){
            	i--;
                if(i == -1){
                	i = 4;
                }
            	pic.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode.eq(i).addClass("ssss").siblings().removeClass("ssss");  
            	
       });
       $("#big_banner_change_next").click(function(){
            autoplay();
       });
       
       var i=0;
        var timerr = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay(){
    	i++;
        if(i == 5){
        	i = 0
        }
    	pic.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode.eq(i).addClass("ssss").siblings().removeClass("ssss");
    }

    $("#big_banner_pic_wrap,#big_banner_change_wrap").hover(function(){
    	clearInterval(timerr);
    },function(){
    	// alert("111");
    	timerr = setInterval(autoplay,3000);
    });


//搜索按钮
$("#find_but").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"#fff",color:"#424242"});
})
//菜单栏的显示
$("#banner_menu_wrap").children().hover(function(){
    $(this).css("background","#ff6700");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
})

//轮播
//$(function(){
//  var i=0;
//  var big_banner_pic = $("#big_banner_pic");
//  var allimg=$("#big_banner_pic li").length;
//  function img_change(){
//      var img_i=i*-1226+"px";
//      big_banner_pic.animate({opacity:".2"},100,function(){
//          big_banner_pic.css("left",img_i );
//          big_banner_pic.animate({
//              opacity: "1"
//          }, 100);
//      })
//  }
//  function automatic(){
//      i+=1;
//      if(i>=allimg){
//          i=0;
//      }
//      img_change();
//  }
//  change_self_time = setInterval(automatic, 3000);
//  //轮播上一张下一张图标控制
//  $("#big_banner_change_wrap").hover(function(){
//      clearInterval(change_self_time);
//      $("#big_banner_change_wrap").children().show();
//  },function(){
//      change_self_time = setInterval(automatic, 3000);
//      $("#big_banner_change_wrap").children().hide();
//  })
//  $("#big_banner_change_prev").click(function(){
//      i += 1;
//      if (i >= allimg) {
//          i = 0;
//      }
//      img_change();
//  })
//  $("#big_banner_change_next").click(function(){
//      i -= 1;
//      if (i <= 0) {
//          i = allimg - 1;
//      }
//      img_change();
//  })
//})
//小米明星border-top color设置
$(function(){
    $("#head_hot_goods_content").children().children().eq(0).css("border-color","#ff7600");
    $("#head_hot_goods_content").children().children().eq(1).css("border-color","red");
    $("#head_hot_goods_content").children().children().eq(2).css("border-color","#adff2f");
    $("#head_hot_goods_content").children().children().eq(3).css("border-color","#6495ed");
    $("#head_hot_goods_content").children().children().eq(4).css("border-color","#6a5acd");
    $("#head_hot_goods_content").children().children().eq(5).css("border-color","#ff7600");
    $("#head_hot_goods_content").children().children().eq(6).css("border-color","red");
    $("#head_hot_goods_content").children().children().eq(7).css("border-color","#adff2f");
    $("#head_hot_goods_content").children().children().eq(8).css("border-color","#6495ed");
    $("#head_hot_goods_content").children().children().eq(9).css("border-color","#6a5acd");
})


//控制小米明星left
$("#head_hot_goods_prave").click(function(){
     $("#head_hot_goods_content").children("ul").animate({
         left:"-1226px"
     },300)
})
$("#head_hot_goods_next").click(function(){
    $("#head_hot_goods_content").children("ul").animate({
        left:"0"
    },300)
})
$("#head_hot_goods_prave").hover(function(){
    $(this).css("color","#ff6700");
},function(){
    $(this).css("color","#BEBEBE");
})
$("#head_hot_goods_next").hover(function(){
    $(this).css("color","#ff6700");
},function(){
    $(this).css("color","#BEBEBE");
})

$(".floor_goods_wrap_li").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})

$(".floor_goods_wrap_li2").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})

$(".shipin .shipin3 ul li").hover(function () {
       $(this).css({"top":"-5px",
           "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
       });
},function(){
    $(this).css({"top":"0px",
        "box-shadow":"none"
    });
})
$(".foot_bottom_r").children("span").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"none",color:"#ff6700"});
})

 function zxc(){
		var neir5=$(".hit .neir5 li");
		var neir6=$(".hit .neir6 li");
		
		var i=0;
		
		neir6.each(function(index){
			var mmm =$(this);
			mmm.click(function(){
				mmm.addClass("ssss").siblings().removeClass("ssss");
				var index =mmm.index();
				neir5.eq(index).fadeIn(300).siblings().fadeOut(30);
			})
		}
		);
		
		$(".hit .prev_t").click(function(){
			i--;
			if(i == -1){
				i = 3;
			}
			console.log(i);
			neir5.eq(i).fadeIn(300).siblings().fadeOut(300);
			neir6.eq(i).addClass("ssss").siblings().removeClass("ssss");
		});
		$(".hit .next_t").click(function(){
			i++;
			if(i == 4){
				i = 0;
			}
			neir5.eq(i).fadeIn(100).siblings().fadeOut(100);
			neir6.eq(i).addClass("ssss").siblings().removeClass("ssss");
		});
}
 	

$('.neir4>li').each(function(){
	$(this).on({
		mouseenter:function(){
			$(this).addClass('hit');
			zxc();
		},
		mouseleave:function(){
			$(this).removeClass('hit');
			
		}
		
	})
	
	


})
