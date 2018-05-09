/**
 * Created by Lxc on 2018/1/16.
 */
window.onload=function(){
    //吸顶盒子

    function scroll(){
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };

    }

    var topPart = document.querySelector(".nav");
    var navBar = document.querySelector(".lunbo_nav");
    console.log(navBar)
    window.onscroll = function(){
        if(scroll().top>topPart.offsetHeight){
            navBar.className = "fixed";
        }else{
            navBar.className = "lunbo_nav";
        }
    }




    //轮播图
    var arrBan=document.querySelectorAll('.lunbo_img');
    var arrPage=document.querySelectorAll('.lunbo_ul li');
    var arrSapns=document.querySelectorAll(".lunbo_ul li span");
    var oDIV=document.querySelector(".lunbo")
    var timer=null;
    for(var i=0;i<arrPage.length;i++){
        arrPage[i].index=i;
        arrPage[i].onclick=function(){
            setTimeout(timer);
            for(var i=0;i<arrBan.length;i++){
                arrBan[i].style.opacity="0";
                arrPage[i].className='';
                arrSapns[i].style.display="none";
            }
            arrBan[this.index].style.opacity="1";
            this.className='now';
            arrSapns[this.index].style.display="block"
            pic = square = this.index;
        }

    }


    var pic=0;
    var square=0;
    timer = setInterval(playNext, 5000);
    function playNext() {
        pic++;
        if(pic>arrBan.length-1){
            pic=0;
        }
        if (square < arrPage.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for(var i=0;i<arrBan.length;i++){
            arrBan[i].style.opacity="0";
            arrPage[i].className='';
            arrSapns[i].style.display="none";
        }
        arrBan[square].style.opacity="1";
        arrPage[square].className='now';
        arrSapns[square].style.display="block";
    }

    //礼物框架函数
    var oOpen=document.querySelector(".gift p");
    var oGimg=document.querySelector(".gift .gift_img");
    var oDown=document.querySelector(".gift .gift_img_close");
    oOpen.onclick=function(){
        oGimg.style.display="block";
    }
    oDown.onclick=function(){
        oGimg.style.display="none";
    }

    //下载框函数
    var oAlert=document.querySelector(".alert p");
    oAlert.onclick=function(){
        alert("下 载 未 开 放 , 敬 请 期 待 ! O 口 O");
    }
    //选项卡
    function Tab(uls, ols) {
        for (var i = 0; i < uls.length; i++) {    //  遍历到所有的按钮。
            uls[i].index = i;    //  绑定索引。
            uls[i].onclick = function () {    //  鼠标滑动可修改。
                for (var i = 0; i < ols.length; i++) {    //  遍历按钮对应的所有内容。
                    ols[i].style.display = "none";    //  所有内容隐藏。
                    uls[i].classList.remove("now");    //  按钮删除类名 now。
                }
                ols[this.index].style.display = "block";    //  按钮对应的当前（索引）内容显示。
                this.classList.add("now");    //  当前按钮添加类名 now。
            }
        }
    }



    //木马
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        }
        else {
            return obj.currentStyle[atrr];
        }
    }
    function animate2(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    var flag = true;

    //config??????????涨??????????Сλ?ò??????
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 400,
            "top": 70,
            "left": 100,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 400,
            top: 70,
            left: 700,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    //????
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    wrap.onmouseover = function () {
        animate2(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate2(arrow, {"opacity": 0});
    };

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate2(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    assign();

    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            assign();
        }

    };
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    };


    //选项卡2
    function Tab3(ols,aspan) {
        for (var i = 0; i < aspan.length; i++) {    //  遍历到所有的按钮。
            aspan[i].index = i;    //  绑定索引。
            aspan[i].onclick = function () {    //  鼠标滑动可修改。
                for (var i = 0; i < ols.length; i++) {    //  遍历按钮对应的所有内容。
                    ols[i].style.display = "none";    //  所有内容隐藏。
                    aspan[i].style.opacity = "0"; //  按钮删除类名 now。
                }
                ols[this.index].style.display = "block";    //  按钮对应的当前（索引）内容显示。
                this.style.opacity="1";    //  当前按钮添加类名 now。

            }
        }
    }

    var aimg=document.querySelectorAll(".frame3_img_k");
    console.log(aimg)
    var aspan=document.querySelectorAll(".frame3 span");
    console.log(aspan)
    //var ali=document.querySelectorAll(".frame3 li")
    Tab3(aimg,aspan);


    //返回顶部
    var fh=document.querySelector(".bottom u");
    var target=0;
    console.log(fh);
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
    }
    window.onscroll=function(){
        leader=scroll().top;
        if(scroll().top<1800){
            fh.style.display="none"
        }
        if(scroll().top>1800){
            fh.style.display="block"
        }
    };
    fh.onclick=function(){
        clearInterval(timer);
        timer = setInterval(function () {
            var step=(target-leader)/10;
            step=step>0 ? Math.ceil(step) : Math.floor(step);
            leader+=step;
            window.scrollTo(0,leader);
            if(leader===target){
                clearInterval(timer)
            }
        }, 20)
    }

}