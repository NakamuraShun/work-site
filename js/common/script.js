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
    $('.js-subNavTrigger').on('click', function ()
    {
        $(this).toggleClass('is-active');
        $(this).next().stop(true, false).slideToggle(300);

        return false;

    });


});