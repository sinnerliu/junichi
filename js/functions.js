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