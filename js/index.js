$(function () {
    //首页轮播
    var swiper = new Swiper('.swiper-container', {
        //设置slider容器能够同时显示的slides数量
        slidesPerView: 1,
        //在slide之间设置距离
        spaceBetween: 30,
        // 自动播放
        autoplay: true,
        // 是否循环播放
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //首页全国悬浮显示,隐藏
    displayBlockOrNone(".location_header",".city_big_div");
    //首页登录悬浮显示，隐藏
    displayBlockOrNone(".right_div_login",".user_login");
});

/**
 * 给选择器添加鼠标移到显示，移出隐藏
 * @param select 选择器
 * @param div 显示隐藏div
 */
function displayBlockOrNone(select, div) {
    $(select).on({
        mouseenter: function () {
            $(div).css('display', 'block');
        },
        mouseleave: function () {
            $(div).css('display', 'none');
        }
    })
}