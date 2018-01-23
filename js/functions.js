var br = {
    addEL: function(e, type, fun) {
        if (e.addEventListener) {
            e.addEventListener(type, fun, false);
        } else if (e.attachEvent) {
            e.attachEvent('on' + type, fun);
        } else {
            e['on' + type] = fun;
        }
    },

    show: function(e, cl) {
        var btn = document.getElementById(e),
            bd = document.body || document.getElementsByTagName('body')[0];

        br.addEL(btn, 'click', function() {
            if (bd.className !== cl) {
                bd.className = cl;
            } else {
                bd.className = null;
            }
        })
    }
}

br.show('search-toggle', 'search-show');

br.show('wechat-toggle', 'wechat-show');

/*建站时间*/
function show_date_time(){window.setTimeout("show_date_time()",1e3);var BirthDay=new Date("2015/06/06"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=Math.floor(e_hrsold),e_minsold=60*(e_hrsold-hrsold),minsold=Math.floor(60*(e_hrsold-hrsold)),seconds=Math.floor(60*(e_minsold-minsold));span_dt_dt.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";}
show_date_time();

var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e){
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]); //text(a[Math.floor(Math.random()*a.length)]); //text("+1s");
		a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index":99999,
            "top":y-20,
            "left":x,
            "position":"absolute",
            "color":"#0c0"
        });
        $("body").append($i);
        $i.animate(
            {"top":y-180,"opacity":0},
            1500,
            function(){$i.remove();}
        );
    });
});

 <!--百度统计-->

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?66a88d229a267d166842ac455f89ee20";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

<!--百度推送-->

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

  