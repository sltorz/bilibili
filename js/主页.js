;$(function(){
    $(".carousel-content").carousel({
        carousel : ".carousel",//轮播图容器
        indexContainer : ".img-index",//下标容器
        prev : ".carousel-prev",//左按钮
        next : ".carousel-next",//右按钮
        timing : 3000,//自动播放间隔
        animateTime : 700,//动画时间
        autoPlay : true,//是否自动播放 true/false
        direction : "left",//滚动方向 right/left
    });
    $(".carousel-content").hover(function(){
        $(".carousel-prev,.carousel-next").fadeIn(300);
    },function(){
        $(".carousel-prev,.carousel-next").fadeOut(300);
    });

    $(".carousel-prev").hover(function(){
        $(this).find("image").attr("src","../image/left2.png");
    },function(){
        $(this).find("image").attr("src","../image/left1.png");
    });
    $(".carousel-next").hover(function(){
        $(this).find("image").attr("src","../image/right2.png");
    },function(){
        $(this).find("image").attr("src","../image/right1.png");
    });

    
    
    
    $(".srecommend-module .groom-module").each(function(idx,ele){
        var str="background-image:url(../image/sleft"+(idx+1)+".jpg)"
       $(ele) .attr("style",str);
        $(ele) .attr("index",idx);
    });

    $(".srecommend-module .groom-module").mouseenter(function(){
        var index=$(this) .attr("index");
       $($(".srecommend-module .card-mark")[ index]) .css("display","block")
    })
    $(".srecommend-module .groom-module").mouseleave(function(){
        var index=$(this) .attr("index");
        $($(".srecommend-module .card-mark")[ index]).css("display","none")
    })
    $(".storey-box .smask-video").each(function(id,ele){
        var str="background-image:url(../image/sv"+(id+1)+".PNG)"
        $(ele) .attr("style",str);

    });
    $(".storey-box").mouseenter(function(){
        var num= $(this) .attr("index");
        $($(".smask-video .card-mark")[num]) .css("display","block");
        $($(".storey-box p")[ num]) .css("color","#00a1d6");
        $($(".storey-box .p-mark ")[ num-4]).slideUp(300);
        //

    })
    $(".storey-box").mouseleave(function(){
        var num=$(this) .attr("index");
        $($(".smask-video .card-mark")[ num]).css("display","none")
        $($(".storey-box p")[ num]) .css("color","#222");
        $($(".storey-box .p-mark ")[ num-4]).slideDown(300);
    })
    $("button").mouseenter(function () {
        $(this).css("color","#f25d8e")
        $(this).css("cursor","hand" )

    })
    $("button").mouseleave(function () {
        $(this).css("color","#00a1d6")
        $(this).css("cursor","point" )

    })
    $("#dh3").mouseenter(function () {
        $(this).css("backgroundColor","rgba(0, 0, 0, 0.2)")
    })

    $("#dh3").mouseleave(function () {
            $(this).css("backgroundColor","")
        })
    $("#dh4").mouseenter(function () {
        $(this).html("更多  >");
    })

    $("#dh4").mouseleave(function () {
        $(this).html("更多>");
    })
    $("#dh7").mouseenter(function () {
        $(this).css("height","44px")
        $(this).html("<p style='height: 22px'>三日 <i class='fa fa-chevron-up'></i></p><p style='height: 22px'>周一 </p> ");
    })
    $("#dh7").add(".fhead3").mouseleave(function () {
       $(this).css("height","22px");
        $(this).html("<p style='height: 22px'>三日 <i class='fa fa-chevron-up'></i></p> ");
    })
    $(".fhead3").mouseenter(function () {
        $(this).css("height","44px")
        $(this).html("<p style='height: 22px'>三日 <i class='fa fa-chevron-up'></i></p><p style='height: 22px'>周一 </p> ");
    })
    $(".fhead3").mouseleave(function () {
        $(this).css("height","22px");
        $(this).html("<p style='height: 22px'>三日 <i class='fa fa-chevron-up'></i></p> ");
    })
    $(".bottom").mouseenter(function () {
        $(this).css("backgroundColor","#ccd0d7")

    })
    $(".bottom").mouseleave(function () {
        $(this).css("backgroundColor","#e5e9ef")
    })
    $(".fhead1").mouseenter(function () {
        $(this).css("backgroundColor","#f25d8e");
        $(this).css("color","white")

    })
    $(".fhead1").mouseleave(function () {
        $(this).css("backgroundColor","");
        $(this).css("color","#f25d8e")
    })
    $(".fhead li").mouseover(function (e) {
        $(e.target).css("color","#00a1d6")
    })
    $(".fhead li").mouseleave(function (e) {
        $(e.target).css("color","")
    })
    var child=$(".fhead41 .childs");
    for(var i=0;i<20;i++){
        $(".fhead41").append(child.clone());
    }
    $(".stbtjl").each(function(id,ele){
        var str="background-image:url(../image/tbtj"+(id+1)+".PNG)"
        $(ele) .attr("style",str);

    });
    $(".tbtjb1").each(function (id,ele) {
        var str="background-image:url(../image/头像"+(id+1)+".png)";
        $(ele).attr("style",str);
    })
    $(".st").add(".tbtjb2").mouseenter(function () {
        $(this).css("color","#00a1d6")

    })
    $(".st").add(".tbtjb2").mouseleave(function () {

        $(this).css("color","black")
    })
    $(".headline img").each(function (id,ele) {
        var str="../image/图标"+id+".png";
        $(ele).attr("src",str);
    })

    $(".nav-mask li").mouseenter(function () {
        $(this).css("background-color","hsla(0,0%,100%,.5)")

    })
    $(".nav-mask li").mouseleave(function () {

        $(this).css("background-color","")
    })
    $(".position li").mouseenter(function (e) {
        $(this).css("background-color","#449fdb");
        $(e.target).css("color","white");
    })

    $(".position li").mouseleave(function (e) {
        $(this).css("background-color","");
        $(e.target).css("color","")
    })
    $(".position li")[0].onclick=function (e) {
        // document.body.scrollTop=400;
        $("body").animate({"scrollTop":400},400);
    }
    $(".position li")[1].onclick=function (e) {
        // document.body.scrollTop=800;
        $("body").animate({"scrollTop":800},600);
    }
    $(".position li")[2].onclick=function (e) {
        // document.body.scrollTop=1300;
        $("body").animate({"scrollTop":1300},800);

    }
    $(".position li")[3].onclick=function (e) {
      $("body").animate({"scrollTop":1822},1000);
        // document.body.scrollTop=1822;

    }
  $(".serwei").add(".serwei img").mouseenter(function () {
      $(".serwei").add(".serwei img").css("display","block")

  })

    $("#xiaz1").mouseenter(function () {
        $(".serwei").css("display","block");
        $(".serwei img").css("display","block");

    })
    $(".serwei").mouseenter(function () {
        $(".serwei").css("display","block");
        $(".serwei img").css("display","block");

    })

    $("#xiaz1").mouseleave(function () {
        $(".serwei").css("display","none");
        $(".serwei img").css("display","none");
    })

    $(".serwei").mouseleave(function () {

        $(".serwei").css("display","none");
        $(".serwei img").css("display","none");

    })



    $("#bml").mouseenter(function () {
        $(".sbml").css("display","block");
        $(".sbml img").css("display","block");

    })
    $("#bml").mouseleave(function () {
        $(".sbml").css("display","none");
        $(".sbml img").css("display","none");

    })


    $(".sbml").mouseenter(function () {

        $(".sbml").css("display","block");
        $(".sbml img").css("display","block");
        


    })

    $(".sbml").mouseleave(function () {

        $(".sbml").css("display","none");
        $(".sbml img").css("display","none");

    })
    $(".sdenlunb").mouseenter(function () {

        $(".sdenlunb").css("background-color","#02B5E5");

    })

    $(".sdenlunb").mouseleave(function () {
        $(".sdenlunb").css("background-color","#00a1d6");
    

    })





    var str=0;
    window.setInterval(function () {
        var img= $( $(".sdenlunc img")[0]);
        var img1= $( $(".sdenlunc img")[1]);
        var indext=parseInt(img.css("left"));
        var indext=parseInt(img1.css("left"));
       
        if(str == -320){
            $(".sdenlunc")[0].appendChild(($(".sdenlunc img").clone())[0]);
           
            img.css("left","0px");
            // $(".sdenlunc")[0].removeChild($(".sdenlunc img")[0]);
            str=0;
        }
        str=str-1;

        img.animate({"left":str+"px"},10)
        img1.animate({"left":str+"px"},10)
    },10);




    $("#heda1").mouseenter(function () {
        $(".sdenlu").css("display","block");


    })

    $("#heda1").mouseleave(function () {
        $(".sdenlu").css("display","none");

    })

    $(".sdenlu").mouseenter(function () {

        $(".sdenlu").css("display","block");
        //$(".sdenlu p").css("display","block");


    })
    $(".sdenlu").mouseleave(function () {

        $(".sdenlu").css("display","none");


    })

    $(".sdenlu p").mouseenter(function () {

        $(".sdenlu").css("display","block");
        //$(".sdenlu p").css("display","block");


    })
    $(".sdenlup").mouseleave(function () {

        $(".sdenlu").css("display","none");


    })
    $(".sdenlu img").mouseenter(function () {

        $(".sdenlu").css("display","block");
        //$(".sdenlu p").css("display","block");


    })
    $(".sdenlup img").mouseleave(function () {

        $(".sdenlu").css("display","none");


    })
});
