$(function ()
{

/* slick.js
-------------------------------------------------------------------- */
    $(".mvSlide").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000, //1枚の画像の表示時間 (2秒後にスライド開始)
        speed: 1000, //次のスライドに切り替わるまでの秒数 (短いと必然的にスライド速度が上がる)
    });

    $('.sampleASlide').slick({
        dots: true,
        infinite: true, //ループ
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
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

    // l-mark click
    $('.l-mark').on('click', function ()
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
    $('.globalNav__bg').on('click', function ()
    {
        $('.mark').removeClass('is-active');
        removeFixed();
    });


/* Navigation
-------------------------------------------------------------------- */
    
    //sp
    $('.js-subNavTrigger').on('click', function ()
    {
        $(this).toggleClass('is-active');
        $(this).next().stop(true, false).slideToggle(300);

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




});