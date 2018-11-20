var council = document.getElementById("council"),normal = document.getElementById("normal");
var nav = document.getElementById("nav_bar");
var button = nav.getElementsByTagName("li");
var aList = nav.getElementsByTagName("a");
var head = document.getElementById("head");
council.onclick=function () {
    document.documentElement.scrollTop = 700;
    document.body.scrollTop = 700;
};
normal.onclick=function () {
    document.documentElement.scrollTop = 1700;
    document.body.scrollTop = 1700;
};
function Over(){
    var curTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(curTop>150){
        head.style.top="0px";
        nav.style.top = "60px";
    }else{
        head.style.top = "160px";
        nav.style.top = "220px"
    }
    window.setTimeout("Over()",10);
}
Over();
button[5].onclick=function () {
    var duration = 500,interval = 5,target = document.documentElement.scrollTop||document.body.scrollTop;
    var step = (target/duration)*interval;
    var timer1 = window.setInterval(function(){
        var  curTop  = document.documentElement.scrollTop||document.body.scrollTop;
        if (curTop===0){
            window.clearInterval(timer1);
            return;
        }
        curTop-=step;
        document.documentElement.scrollTop = curTop;
        document.body.scrollTop = curTop;
    },interval);
};
    var curLight = aList[0],curLarge = button[1];
    function Light(){
        var curTop = document.body.scrollTop||document.documentElement.scrollTop;
        curLight.className ="",curLarge.className = "";
        if (curTop < 450) {
            curLight = aList[0],curLarge = button[1];
        }else if (curTop < 1200) {
            curLight = aList[1],curLarge = button[2];
        } else if (curTop < 1800) {
            curLight = aList[2],curLarge = button[3];
        } else {
            curLight = aList[3],curLarge = button[4];
        }
        curLight.className="light";
        curLarge.className="large";
        window.setTimeout("Light()",10);
    }
    Light();