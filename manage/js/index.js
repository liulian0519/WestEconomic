$(function() {
    $('.d-firstNav').click(function(e) {
        dropSwift($(this));
        e.stopPropagation();
    });
    function dropSwift(dom) {
        if ($(dom.next()).is(":hidden")) {
            $(".spantop").text("");
        };
        //点击当前元素，收起或者伸展下一级菜单
        dom.next().slideToggle();
        if ($(dom.next()).is(":visible")) {
            $(".spantop").text("");
        };

    }
});

var tabFir=document.getElementById("tabFir");
var oLis=tabFir.getElementsByTagName("li");
var oDivs=tabFir.getElementsByTagName("div");
function changeTab(n) { /*n是当前点击的索引*/
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className=null;
        oDivs[i].className=null;

    }
    oLis[n].className="select";
    oDivs[n].className="select";
}
for (var i = 0; i < oLis.length; i++) {
    oLis[i].onclick = (function (i) {
        return function () {
            changeTab(i);
        }
    }) (i);
}