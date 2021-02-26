function openMenu() {
    $('.icon-menu').hide();
    $('.icon-close').show();
    $('.header__nav').slideDown(300);
    $('.btnFloating-content').addClass('menu-open');
    $('.main').addClass('menu-open');

}

function closeMenu() {
    $('.icon-menu').show();
    $('.icon-close').hide();
    $('.header__nav').slideUp(300);
    $('.btnFloating-content').removeClass('menu-open');
    $('.main').removeClass('menu-open');
}

function fnProgressBarLoading() {
    NProgress.start();
    window.addEventListener("load", function(event) {
        NProgress.done();
    });
}