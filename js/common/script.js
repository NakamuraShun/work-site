$(function ()
{

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
    


});