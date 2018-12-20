
    $(function(){
        $(".carousel-content").carousel({
            carousel : ".carousel",//轮播图容器
            indexContainer : ".img-index",//下标容器
            prev : ".carousel-prev",//左按钮
            next : ".carousel-next",//右按钮
            timing : 2000,//自动播放间隔
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
            $(this).find("img").attr("src","../image2/left2.png");
        },function(){
            $(this).find("img").attr("src","../image2/left1.png");
        });
        $(".carousel-next").hover(function(){
            $(this).find("img").attr("src","../image2/right2.png");
        },function(){
            $(this).find("img").attr("src","../image2/right1.png");
        });
    });
    $(function () {
        $("#Ydiv1").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv1').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage1").attr("style",str2);
        })
        $("#Ydiv1").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv1').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage1").attr("style",str2);
        })
        $("#Ydiv2").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv2').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage2").attr("style",str2);
        })
        $("#Ydiv2").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv2').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage2").attr("style",str2);
        })
        $("#Ydiv3").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv3').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage3").attr("style",str2);
        })
        $("#Ydiv3").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv3').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage3").attr("style",str2);
        })
        $("#Ydiv4").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv4').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage4").attr("style",str2);
        })
        $("#Ydiv4").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv4').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage4").attr("style",str2);
        })
        $("#Ydiv5").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv5').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage5").attr("style",str2);
        })
        $("#Ydiv5").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv5').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage5").attr("style",str2);
        })
        $("#Ydiv6").mouseenter(function () {
            var str="box-shadow:2px 5px 7px grey "
            $('#Ydiv6').attr("style",str);
            var str2="bottom:35px";
            $(".YcenterImage6").attr("style",str2);
        })
        $("#Ydiv6").mouseleave(function () {
            var str="box-shadow:-1px -1px -1px -1px "
            $('#Ydiv6').attr("style",str);
            var str2="bottom:24px";
            $(".YcenterImage6").attr("style",str2);
        })
    })
    
   $(function () {
       $(".Ybottomright1").mouseenter(function () {
           $("#Yerweima1").attr("class", "Yshow");
       }).mouseleave(function () {
           $("#Yerweima1").attr("class", "Yhiden");
       })
       $(".Ybottomright2").mouseenter(function () {
           $("#Yerweima2").attr("class", "Yshow");
       }).mouseleave(function () {
           $("#Yerweima2").attr("class", "Yhiden");
       })
       $(".Ybottomright3").mouseenter(function () {
           $("#Yerweima3").attr("class", "Yshow");
       }).mouseleave(function () {
           $("#Yerweima3").attr("class", "Yhiden");
       })
   })

$(function () {
    $("#Ytoolbartop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
})