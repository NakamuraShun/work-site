/*====================================================================================
 // NAME SPACE
====================================================================================*/
var STAGE_SCRIPT = STAGE_SCRIPT || {};
STAGE_SCRIPT.COMMON = {};


/* breakpoint
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.ssWidth = 375;
STAGE_SCRIPT.COMMON.smWidth = 576;
STAGE_SCRIPT.COMMON.mdWidth = 768;
STAGE_SCRIPT.COMMON.lgWidth = 992;
STAGE_SCRIPT.COMMON.llWidth = 1025;
STAGE_SCRIPT.COMMON.xlWidth = 1200;


/* device width
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.spWidth = STAGE_SCRIPT.COMMON.mdWidth - 1;
STAGE_SCRIPT.COMMON.tabWidth_min = STAGE_SCRIPT.COMMON.mdWidth;
STAGE_SCRIPT.COMMON.tabWidth_max = STAGE_SCRIPT.COMMON.llWidth - 1;
STAGE_SCRIPT.COMMON.pcWidth = STAGE_SCRIPT.COMMON.llWidth;


/* MediaQueryList
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.bpSp = window.matchMedia('(max-width: ' + STAGE_SCRIPT.COMMON.spWidth + 'px)');
STAGE_SCRIPT.COMMON.bpTab = window.matchMedia('(min-width: ' + STAGE_SCRIPT.COMMON.tabWidth_min + 'px) and (max-width: ' + STAGE_SCRIPT.COMMON.tabWidth_max + 'px)');
STAGE_SCRIPT.COMMON.bpSpToTab = window.matchMedia('(max-width: ' + STAGE_SCRIPT.COMMON.tabWidth_max + 'px)');
STAGE_SCRIPT.COMMON.bpPc = window.matchMedia('(min-width: ' + STAGE_SCRIPT.COMMON.pcWidth + 'px)');


/* headerHeight
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.headerHeightSp = 60;
STAGE_SCRIPT.COMMON.headerHeightTab = 60;
STAGE_SCRIPT.COMMON.headerHeightPc = 110;
STAGE_SCRIPT.COMMON.headerHeightpcFixed = 80;


/* common function
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.COMMON_FUNC = {
    window_width: function ()
    {
        return window.innerWidth;
    },
    user_agent: function ()
    {
        var ua = navigator.userAgent;
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
        {
            // スマートフォン用コード
            var uaFlg = 'sp';
        } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0)
        {
            // タブレット用コード
            var uaFlg = 'tab';
        } else
        {
            // PC用コード
            var uaFlg = 'pc';
        }

        return uaFlg;
    },
    getParam: function (name, url)
    {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
};


/* loader
-------------------------------------------------------------------- */
STAGE_SCRIPT.COMMON.LOADER = {
    close: function ()
    {
        $('.l-loader').delay(300).fadeOut(600);
    }
};



