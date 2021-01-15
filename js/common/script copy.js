/*====================================================================================
 // NAME SPACE
====================================================================================*/
var STAGE_SCRIPT = STAGE_SCRIPT || {};
STAGE_SCRIPT.SCRIPTS = {};


/*====================================================================================
 // SCRIPTS
====================================================================================*/
/* ----------------------------------------------------------------------------------------------------
// initialize
---------------------------------------------------------------------------------------------------- */
(function ($)
{
    /* Navigation
    -------------------------------------------------------------------- */
    var mobileMenu = {
        build: function ()
        {
            $('.js-subNavTrigger').on('click', function ()
            {
                $(this).toggleClass('is-active');
                $(this).next().stop(true, false).slideToggle(300);
            });
        },
        destroy: function ()
        {
            $('.js-subNavTrigger').off('click');
            $('.js-subNavTrigger').next().removeAttr('style');
            $('.js-subNavTrigger').removeClass('is-active');
        }
    }

    var iOsMenu = {
        build: function ()
        {
            $('.js-subNavTrigger').on('click', function ()
            {
                $(this).toggleClass('is-active');
                if ($(this).next().css('display') == 'none')
                {
                    $(this).parent().addClass('is-active');
                    $(this).next().slideDown(300);
                } else
                {
                    $(this).parent().removeClass('is-active');
                    $(this).next().slideUp(300);
                }
            });
        }
    }

    var pcMenu = {
        build: function ()
        {
            $('.gNav__lnk--main,.gNav__txt--item,.gNav__lnk--item,.sNav__txt--item,.sNav__lnk--item').parent().on('mouseenter', function ()
            {
                $(this).addClass('is-active');
            }).on('mouseleave', function ()
            {
                $(this).removeClass('is-active');
            });

            $('.js-subNavTrigger').parent('.sNav__item').on('mouseenter', function ()
            {
                $(this).children('.subNav--child').slideDown(300);
            }).on('mouseleave', function ()
            {
                $(this).children('.subNav--child').stop(true, false).slideUp(300);
            });

            $('.js-subNavTrigger').parent('.gNav__item').on('mouseenter', function ()
            {
                $(this).children('.subNav').slideDown(300);
            }).on('mouseleave', function ()
            {
                $(this).children('.subNav').stop(true, false).slideUp(300);
            });
        },
        destroy: function ()
        {
            $('.gNav__lnk--main,.gNav__txt--item,.gNav__lnk--item,.sNav__txt--item,.sNav__lnk--item').parent().off('mouseenter mouseleave');
            $('.js-subNavTrigger').parent('.sNav__item').off('mouseenter mouseleave');
            $('.js-subNavTrigger').parent('.gNav__item').off('mouseenter mouseleave');
            $('.js-subNavTrigger').next().removeAttr('style');
            $('.js-subNavTrigger').removeClass('is-active');
        }
    }

    var footerMobileMenu = {
        build: function ()
        {
            $('.js-fNavTrigger').on('click', function ()
            {
                $(this).next().stop(true, false).slideToggle();
                $(this).toggleClass('is-active');
            });
        },
        destroy: function ()
        {
            $('.js-fNavTrigger').off('click');
        },
    }

    var footerPCMenu = {
        build: function ()
        {
            $('.fNav__lnk--content,.fNav__lnk--child').on('mouseenter', function ()
            {
                $(this).addClass('is-active');
            }).on('mouseleave', function ()
            {
                $(this).removeClass('is-active');
            });
        },
        destroy: function ()
        {
            $('.fNav__lnk--content,.fNav__lnk--child').off('mouseenter mouseleave');
            $('.fNav__lnk--content,.fNav__lnk--child').removeClass('is-active');
        }
    }


    /* Class
        -------------------------------------------------------------------- */
    var setClass = (function ()
    {
        function flgSp(e)
        {
            e.classList.add('flgSp');
        }
        function flgTab(e)
        {
            e.classList.add('flgTab');
        }
        function flgPc(e)
        {
            e.classList.add('flgPc');
        }
        function flgiOs(e)
        {
            e.classList.add('flgiOs');
        }

        function headerFixed()
        {
            var headerHeight = $('.l-header').outerHeight();
            var scrollTop = $(window).scrollTop();

            var init = function ()
            {
                if (scrollTop > headerHeight)
                {
                    $('.l-header').addClass('is-fixed');
                } else
                {
                    $('.l-header').removeClass('is-fixed');
                }
            }

            init();
            $(window).on('load.headerFixed scroll.headerFixed', function ()
            {
                scrollTop = $(this).scrollTop();

                init();
            });
        }

        return {
            flgSp: flgSp,
            flgTab: flgTab,
            flgPc: flgPc,
            flgiOs: flgiOs,
            headerFixed: headerFixed
        }
    })();

    var deliteClass = (function ()
    {
        function flgSp(e)
        {
            e.classList.remove('flgSp');
        }
        function flgTab(e)
        {
            e.classList.remove('flgTab');
        }
        function flgPc(e)
        {
            e.classList.remove('flgPc');
        }

        function headerFixed()
        {
            $('.l-header').removeClass('is-fixed');
            $(window).off('.headerFixed');
        }

        return {
            flgSp: flgSp,
            flgTab: flgTab,
            flgPc: flgPc,
            headerFixed: headerFixed
        }
    })();


    /* Build
        -------------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', function ()
    {
        var obj = document.body;
        var mqlSp = STAGE_SCRIPT.COMMON.bpSp;
        var mqlTab = STAGE_SCRIPT.COMMON.bpTab;
        var mqlSpToTab = STAGE_SCRIPT.COMMON.bpSpToTab;
        var mqlPc = STAGE_SCRIPT.COMMON.bpPc;

        var checkBreakPoint = {
            Sp: function (mqlSp)
            {
                if (mqlSp.matches)
                {
                    setClass.flgSp(obj);
                    footerMobileMenu.build();
                } else
                {
                    deliteClass.flgSp(obj);
                    footerMobileMenu.destroy();
                }
            },
            Tab: function (mqlTab)
            {
                if (mqlTab.matches)
                {
                    setClass.flgTab(obj);
                } else
                {
                    deliteClass.flgTab(obj);
                }
            },
            SpToTab: function (mqlSpToTab)
            {
                if (mqlSpToTab.matches)
                {
                    mobileMenu.build();
                } else
                {
                    mobileMenu.destroy();
                }
            },
            Pc: function (mqlPc)
            {
                if (mqlPc.matches)
                {
                    pcMenu.build();
                    footerPCMenu.build();
                    setClass.flgPc(obj);
                    setClass.headerFixed();
                } else
                {
                    pcMenu.destroy();
                    footerPCMenu.destroy();
                    deliteClass.flgPc(obj);
                    deliteClass.headerFixed();
                }
            },
            iOs: function ()
            {
                setClass.flgiOs(obj);
            }
        }

        if (STAGE_SCRIPT.COMMON.COMMON_FUNC.user_agent() != 'tab')
        {
            // breakPoint
            mqlSp.addListener(checkBreakPoint.Sp);
            mqlTab.addListener(checkBreakPoint.Tab);
            mqlSpToTab.addListener(checkBreakPoint.SpToTab);
            mqlPc.addListener(checkBreakPoint.Pc);

            // init
            checkBreakPoint.Sp(mqlSp);
            checkBreakPoint.Tab(mqlTab);
            checkBreakPoint.SpToTab(mqlSpToTab);
            checkBreakPoint.Pc(mqlPc);
        } else
        {
            checkBreakPoint.iOs();
            iOsMenu.build();
        }
    });


    /* ----------------------------------------------------------------------------------------------------
    // loader
    ---------------------------------------------------------------------------------------------------- */
    $(window).on('load', function ()
    {

        // init
        STAGE_SCRIPT.COMMON.LOADER.close();
    });


    /* ----------------------------------------------------------------------------------------------------
    // humberger menu
    ---------------------------------------------------------------------------------------------------- */
    //mark
    $(function ()
    {
        // variables
        var scrollpos;

        function addFixed()
        {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fix').css({
                'top': -scrollpos
            });
        }

        function removeFixed()
        {
            $('body').removeClass('is-fix').css({
                'top': 0
            });
            window.scrollTo(0, scrollpos);
        }

        function nav()
        {
            if (!$('body').is('.is-fix'))
            {
                $('.mark').addClass('is-active');
                addFixed();

                //Case: sNav indivisual action
                $('.l-header').on('transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd', function ()
                {
                    $('.sNav').delay(100).queue(function ()
                    {
                        $(this).addClass('is-active').dequeue();
                    });
                    $(this).off('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend');
                });
            } else
            {
                $('.mark').removeClass('is-active');
                removeFixed();
                $('.sNav').removeClass('is-active');
            }
        }

        // internal links click
        $('.gNav a').on('click', function ()
        {
            var flg = $(this).attr('href');

            var hrefArr = flg.split('/');
            var dirHref = hrefArr[hrefArr.length - 2];

            var locArr = location.pathname.split('/');
            var dirLoc = locArr[locArr.length - 2];
            if (flg.indexOf('#') != -1 && !$('body').hasClass('flgPc') && dirHref == dirLoc)
            {
                $('.mark').removeClass('is-active');
                removeFixed();
            }

        });

        // globalnav__bg click
        $('.globalNav__bg').on('click', function ()
        {
            $('.mark').removeClass('is-active');
            removeFixed();
        });

        // build
        $('.l-mark').on('click', function ()
        {
            nav();

            return false;
        });

    });


    /* ----------------------------------------------------------------------------------------------------
    // link
    ---------------------------------------------------------------------------------------------------- */
    $(function ()
    {
        $('.js-lnkBox').on('hover', function ()
        {
            $(this).toggleClass('is-active');
        });
    });


    /* ----------------------------------------------------------------------------------------------------
    // tab
    ---------------------------------------------------------------------------------------------------- */
    $(function ()
    {
        $('.js-tabMenu .js-tabMenu__link').on('click', function ()
        {
            var index = $(this).index('.js-tabMenu .js-tabMenu__link');
            if ($(this).hasClass('is-active'))
            {
                return false;
            } else
            {
                $('.js-tabMenu__link').removeClass('is-active');
                $('.js-tabMenu__link').eq(index).addClass('is-active');
            }


            $.when(
                $('.js-tabContent').removeClass('is-active')
            ).done(function ()
            {
                $('.js-tabContent').eq(index).addClass('is-active');
            });
        });
    });


    /* ----------------------------------------------------------------------------------------------------
    // changeDeviceImg
    ---------------------------------------------------------------------------------------------------- */
    $(function ()
    {
        var $elem = $('.changeDeviceImg');

        function changeImg()
        {
            $elem.each(function ()
            {
                if (STAGE_SCRIPT.COMMON.COMMON_FUNC.window_width() <= STAGE_SCRIPT.COMMON.spWidth)
                {
                    $(this).attr('src', $(this).attr('src').replace('pc', 'sp'));
                } else
                {
                    $(this).attr('src', $(this).attr('src').replace('sp', 'pc'));
                }
            });
        }

        changeImg();

        var resizeTime;
        $(window).on('resize', function ()
        {
            clearTimeout(resizeTime);
            resizeTime = setTimeout(function ()
            {
                changeImg();
            }, 100);
        });
    });


    /* ----------------------------------------------------------------------------------------------------
    // scrollin
    ---------------------------------------------------------------------------------------------------- */
    function scrollin()
    {
        $('.js-scrollin').each(function ()
        {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (scroll > elemPos - window_innerHeight)
            {
                $(this).addClass('is-scrollin');
            }
        });
    }


    /* ----------------------------------------------------------------------------------------------------
    // anchor link
    ---------------------------------------------------------------------------------------------------- */
    $(window).on('load', function ()
    {
        var settings = {
            heightSp: STAGE_SCRIPT.COMMON.headerHeightSp,       // sp height
            heightTab: STAGE_SCRIPT.COMMON.headerHeightTab,      // tab height
            heightPc: STAGE_SCRIPT.COMMON.headerHeightPc,       // pc height
            heightPcFixed: STAGE_SCRIPT.COMMON.headerHeightpcFixed,  // pc height is-fixed
            breakPoint: STAGE_SCRIPT.COMMON.pcWidth,              // break point
            $elmHeader: $('.l-header'),                           // header element
            moveY: 0,                                        // translateY animation
            notList: '.notAnchor,.colorBox,.modal',            // exclude Class
            fixSp: true,
            fixPc: true,
            fixTab: true,
            variableHeader: true,
            $elmAnchor: $('a[href*="#"]'),
            killFlg: $('body').is('.js-killSpace'),
            animation: 'easeInOutQuart'                          // default [linear or swing]
        };

        var heightSetting = function ()
        {
            var newHeight = new Object;

            newHeight.Sp = (settings.fixSp) ? settings.heightSp : 0;
            newHeight.Tab = (settings.fixTab) ? settings.heightPc : 0;
            newHeight.Pc = (settings.fixPc) ? settings.heightPc : 0;
            newHeight.variable = function (e)
            {
                var headerHeight = settings.$elmHeader.outerHeight();
                var pos = e.offset().top;

                var variableHeight = (pos > headerHeight) ? settings.heightPcFixed : settings.heightPc;

                return variableHeight;
            }

            return newHeight;
        }

        var calculateHeader = function (e)
        {
            var height = 0;
            var h = (settings.variableHeader)
                ? (STAGE_SCRIPT.COMMON.COMMON_FUNC.window_width() < settings.breakPoint) ? heightSetting().Sp : heightSetting().variable(e)
                : (STAGE_SCRIPT.COMMON.COMMON_FUNC.window_width() < settings.breakPoint) ? heightSetting().Sp : heightSetting().Pc;


            if (settings.killFlg)
            {
                height = 0;
            } else
            {
                if (settings.moveY > 0)
                {
                    height = h - settings.moveY;
                } else
                {
                    height = h;
                }
            }

            return height;
        }

        var getLocationDirectoryName = function ()
        {
            var dirArr = location.href.split("/");
            var dir = dirArr[dirArr.length - 2];

            return dir;
        }


        /**
         * ===================================================================================
         * = external links
         * ===================================================================================
         */
        if (localStorage.getItem('anchor') != -1)
        {
            var externalTargetElement = function ()
            {
                var id = localStorage.getItem('anchor');
                var target = $('#' + id);

                return target;
            }

            if (externalTargetElement().length)
            {
                var obj = externalTargetElement();
                var pos = externalTargetElement().offset().top - calculateHeader(obj);
                $("html, body").animate({ scrollTop: pos }, 10);
            }
        }

        /* use parameter anchor */
        if (STAGE_SCRIPT.COMMON.COMMON_FUNC.getParam('anchor'))
        {
            var obj = $('#' + STAGE_SCRIPT.COMMON.COMMON_FUNC.getParam('anchor'));
            var pos = obj.offset().top - calculateHeader(obj);
            $("html, body").animate({ scrollTop: pos }, 10);
        }


        /**
         * ===================================================================================
         * = internal links
         * ===================================================================================
         */
        settings.$elmAnchor.not(settings.notList).on('click', function ()
        {
            var href = $(this).attr('href');
            var idArr = href.split('#');

            var getIdName = function ()
            {
                var id = idArr[idArr.length - 1];

                return id;
            }

            var locationDirectory = function ()
            {
                var newDir = idArr[idArr.length - 2];

                return newDir;
            }

            var getHrefdirectoryName = function ()
            {
                var linkArr = href.split('/');
                var linkDir = linkArr[linkArr.length - 2];

                return linkDir;
            }

            var internalTargetElement = function ()
            {
                var target = $('#' + getIdName());

                return target;
            }


            if (getLocationDirectoryName() == getHrefdirectoryName() || getHrefdirectoryName() == undefined)
            {
                var obj = internalTargetElement();
                var pos = internalTargetElement().offset().top - calculateHeader(obj);
                $("html, body").animate({
                    scrollTop: pos
                }, 600, settings.animation);
                return false;
            } else
            {
                localStorage.setItem('anchor', getIdName());
                if (event.ctrlKey || event.metaKey)
                {
                    window.open(locationDirectory(), '_blank');
                    return false;
                } else
                {
                    location.href = locationDirectory();
                    return false;
                }
            }
        });


        /**
         * ===================================================================================
         * = initialize
         * ===================================================================================
         */
        localStorage.removeItem('anchor');

    });



    /*====================================================================================
     // ADD SCRIPTS
    ====================================================================================*/
    /* ----------------------------------------------------------------------------------------------------
    // scripts name
    ---------------------------------------------------------------------------------------------------- */
    /* comment lv-1
        -------------------------------------------------------------------- */

    // comment lv-2


})(jQuery);