$(function () {
    //首页轮播
    var swiper = new Swiper('.swiper-container', {
        //设置slider容器能够同时显示的slides数量
        slidesPerView: 1,
        //在slide之间设置距离
        spaceBetween: 30,
        // 自动播放
        autoplay:true,
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
    $(".location_header").on(
        {
            mouseenter: function () {
                $(".city_big_div").css('display', 'block');
            },
            mouseleave: function () {
                $(".city_big_div").css('display', 'none');
            }
        }
    );
});