var wrapper = document.querySelector(".nav-wrapper");
var nav = priorityNav.init({
    mainNavWrapper: ".js-header-nav", // mainnav wrapper selector (must be direct parent from mainNav)
    mainNav: ".header__nav-list", // mainnav selector. (must be inline-block)
    navDropdownLabel: 'More <span class="header__nav-caret"></span>',
    navDropdownClassName: "header__nav-submenu", // class used for the dropdown.
    navDropdownToggleClassName: "header__nav-toggle", // class used for the dropdown toggle.
    breakPoint: 1023
});




$(function() {

    $("[data-fancybox]").fancybox({
        autoFocus: false,
        touch: false,
    });
    
    var stickyOffset = $('.header__top').height();
    $(window).scroll(function(){
        var sticky = $('.js-sticky-header'),
            scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


    $('.lazyload').lazy();

    $('.js-header-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-header-nav').toggleClass('active');
    });
    
    $('.js-cardpage-favorite').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.js-footer-toggle').on('click', function(){
        var parent = $(this).closest('.footer__navs-group-title');
        parent.toggleClass('active');
        parent.siblings('.footer__navs-list').slideToggle(200);
    });

    $('.js-catalog-filter-open').on('click', function(){
        $('.js-catalog-filter').slideToggle(200);
    });

});