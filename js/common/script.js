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

/* slick.js
-------------------------------------------------------------------- */
    $('.columnSlide').slick({
        dots: true,
        infinite: true, //ループ
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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



    //pc
// $('.gNav__lnk--main,.gNav__txt--item,.gNav__lnk--item,.sNav__txt--item,.sNav__lnk--item').parent().on('mouseenter', function ()
//         {
//             $(this).addClass('is-active');
//         }).on('mouseleave', function ()
//         {
//             $(this).removeClass('is-active');
//         });

//         $('.js-subNavTrigger').parent('.sNav__item').on('mouseenter', function ()
//         {
//             $(this).children('.subNav--child').slideDown(300);
//         }).on('mouseleave', function ()
//         {
//             $(this).children('.subNav--child').stop(true, false).slideUp(300);
//         });

//         $('.js-subNavTrigger').parent('.gNav__item').on('mouseenter', function ()
//         {
//             $(this).children('.subNav').slideDown(300);
//         }).on('mouseleave', function ()
//         {
//             $(this).children('.subNav').stop(true, false).slideUp(300);
//         });
    
//  $('.gNav__lnk--main,.gNav__txt--item,.gNav__lnk--item,.sNav__txt--item,.sNav__lnk--item').parent().off('mouseenter mouseleave');
//         $('.js-subNavTrigger').parent('.sNav__item').off('mouseenter mouseleave');
//         $('.js-subNavTrigger').parent('.gNav__item').off('mouseenter mouseleave');
//         $('.js-subNavTrigger').next().removeAttr('style');
//         $('.js-subNavTrigger').removeClass('is-active');
    



/* ScrollTop
-------------------------------------------------------------------- */
    $('.js-scrollTopTrigger').on('click', function ()
    {
        $('body, html').animate({ scrollTop: 0 }, 400);
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