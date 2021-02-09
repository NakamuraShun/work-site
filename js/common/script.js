$(function ()
{
    
/* scrollResize globalNav
-------------------------------------------------------------------- */
    
    /*

SPナビ実装後に再調整 heightの調整必要あり?

    $(window).on('scroll', function ()
    {
        let scrollTopDis = $(window).scrollTop();
        if (scrollTopDis > 200)
        {
            $(".gNavPcSub").addClass("gNavPcSub--scroll");
        } else
        {
            $(".gNavPcSub").removeClass("gNavPcSub--scroll");
        }
    });

    */
    
    /* open mega Menu
    -------------------------------------------------------------------- */
    $(".js-megaNavTrigger").on({
        'mouseenter': function ()
        {
            $(this).find(".megaMenu").stop().slideDown(200);
        },
        'mouseleave': function ()
        {
            $(this).find(".megaMenu").stop().slideUp(200);
        }
    });


    /* humberger menu
-------------------------------------------------------------------- */
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

    // hamburger click
    $('.hamburger').on('click', function ()
    {
        if (!$('body').is('.is-fix'))
        {
            $('.mark').addClass('is-active');
            addFixed();
        } else
        {
            $('.mark').removeClass('is-active');
            $('.sNav').removeClass('is-active');
            removeFixed();
        }

        return false;
    });

    // globalnav__bg click
    $('.globalNavSP__bg').on('click', function ()
    {
        $('.mark').removeClass('is-active');
        removeFixed();
    });


/* Navigation
-------------------------------------------------------------------- */
    $('.js-toggleNavTrigger').on('click', function ()
    {
        $(this).toggleClass('is-active');
        $(this).next().stop().slideToggle(300);

        return false;

    });


    /* slick.js
    -------------------------------------------------------------------- */
    $('.caseSlide').slick({
        dots: true,
        infinite: true, //ループ
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


/* ScrollTop
-------------------------------------------------------------------- */
    $('.js-scrollTopTrigger').on('click', function ()
    {
        $('body, html').animate({ scrollTop: 0 }, 400);
        return false;
    });



    /* direction filtering
    -------------------------------------------------------------------- */
    $(".js-directionFiltering").click(function ()
    {

        //tags
        $(".js-directionFiltering").each(function ()
        {
            if ($(this).hasClass("directionTag-active"))
            {
                $(this).removeClass("directionTag-active");
            }
        });
        $(this).addClass("directionTag-active");

        //クリックしたtag取得
        let searchTag = $(this).attr("value");

        //各itemを非表示 → 条件判定 → 表示
        $(".js-directionTarget").each(function ()
        {
            $(this).animate(
                //① ゆっくり透過してから隠す
                { "opacity": 0 }, 200, function ()
            {
                $(this).hide();
                //② 判定してからゆっくり要素を表示
                if ($(this).hasClass(searchTag) || searchTag == "all")
                {
                    $(this).show();
                    $(this).animate({ "opacity": 1 }, 200);
                }
            });
        });

        return false;

    });



/* :hover invalid, when use touchdevise
-------------------------------------------------------------------- */
    var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (touch)
    {
        try
        {
            for (var si in document.styleSheets)
            {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--)
                {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover'))
                    {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) { }
    }


});