/**
 * Created by Lxc on 2018/1/7.
 */
window.onload=function(){
    //轮播图
    var arrBan=document.querySelectorAll('.lunbo .lunbo_img img');
    var arrPage=document.querySelectorAll('.lunbo ul li i');
    var timer=null;
    for(var i=0;i<arrPage.length;i++){
        arrPage[i].index=i;
        arrPage[i].onmouseover=function(){
            setTimeout(timer);
            for(var i=0;i<arrBan.length;i++){
                arrBan[i].style.opacity="0";
                arrPage[i].className='';
            }
            arrBan[this.index].style.opacity="1";
            this.className='now';
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
        }
        arrBan[square].style.opacity="1";
        arrPage[square].className='now';
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
    //选项卡opacity
    function Tab2(uls, ols) {
        for (var i = 0; i < uls.length; i++) {    //  遍历到所有的按钮。
            uls[i].index = i;    //  绑定索引。
            uls[i].onclick = function () {    //  鼠标滑动可修改。
                for (var i = 0; i < ols.length; i++) {    //  遍历按钮对应的所有内容。
                    ols[i].style.opacity = "0";    //  所有内容隐藏。
                    uls[i].classList.remove("now");    //  按钮删除类名 now。
                }
                ols[this.index].style.opacity = "1";    //  按钮对应的当前（索引）内容显示。
                this.classList.add("now");    //  当前按钮添加类名 now。
            }
        }
    }
    var ban2ul=document.querySelectorAll(".frame2_1_center_xuan_k ul");
    var ban2p=document.querySelectorAll(".frame2_1_center .frame_1_right_top p");
    Tab(ban2p,ban2ul);

    var ban5ul=document.querySelectorAll(".frame5_left_xuan .frame5_left_xuan_k ul");
    var ban5p=document.querySelectorAll(".frame5_left .frame_1_right_top p");
    Tab(ban5p,ban5ul);

    var ban6div=document.querySelectorAll(".frame6_left .frame6_left_content_k .frame6_left_content");
    var ban6p=document.querySelectorAll(".frame6_left .frame_1_right_top p");
    Tab(ban6p,ban6div);

    var ban3img=document.querySelectorAll(".frame3_center_content_bk .frame3_center_content");
    var ban3p=document.querySelectorAll(".frame3_center .frame_1_right_top p");
    Tab2(ban3p,ban3img);


    var ban4img=document.querySelectorAll(".frame4_center_img_k .frame4_img_k");
    var ban4span=document.querySelectorAll(".frame4_center ul li span");
    Tab2(ban4span,ban4img);




    //无缝滚动
    function Roll(lis, box) {    //  lis=滚动的图片，box=包夹图片的大盒子。
        function getStyle(obj, name) {    //  getStyle函数用来获取属性值,obj=对象，name=对象的属性。
            if (obj.currentStyle) {    //  if判断用来兼容各种浏览器！
                return obj.currentStyle[name];
            } else {
                return getComputedStyle(obj, false)[name];
            }
        }
        var len = lis.length;    //  获取到图片的个数（这里图片要复制一遍（2倍）实现无缝滚动）。
        var num = parseInt(getStyle(lis[0], "height"));    //  获取到第一张（每张）图片的宽度（obj=图片，name=宽度），parseInt取整！
        var timer;    //  定时器。
        show();    //  执行函数。
        function show() {
            timer = setInterval(function () {    //  定时器内容。
                if (box.offsetTop >= -len * num) {    //  如果没走到一半的时候（负号表示左走，大于表示绝对值小，没超过一半）。
                    box.style.top = box.offsetTop - 1 + "px";    //  继续走。
                } else {
                    box.style.top = 0 + "px";    //  返回起点。
                }
            }, 90);   //  时间五毫秒。
        }
        //  鼠标移动到盒子的时候关闭定时器。
        box.onmouseover = function () {
            clearInterval(timer);
        };
        //  移走开启。
        box.onmouseout = function () {
            show();
        }
    }

    var aul=document.querySelector(".frame3_left_top  .frame3_left_top_gun_k");
    var aulk=document.querySelectorAll(".frame3_left .frame3_left_top_gun ul");
    Roll(aulk,aul);

    var adiv=document.querySelector(".sponsor .sponsor_k");
    var adivk=document.querySelectorAll(".frame5_right .sponsor");
    Roll(adivk,adiv);


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
