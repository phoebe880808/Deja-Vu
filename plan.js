$(function () {
    $('body').append('<a href="#" id="gotop"></a>');
    // 將超連結透過id指派給變數fixedTop
    var fixedTop = $('#gotop');
    // on()=>當。。。事件發生時
    fixedTop.on('click', function () {
        // 捲動畫面回到最上面=>scrollTop:'0'
        $('html,body').animate({ scrollTop: '0' }, 500);
    });
    // 載入、捲動、調整視窗大小
    $(window).on('load scroll resize', function () {
        // 預設出現TOP值
        var showTop = 100;
        if ($(window).scrollTop() > showTop) {
            // 捲動高度超過100時出現
            fixedTop.fadeIn('normal');
        } else {
            // 捲動高度低於100時隱藏
            fixedTop.fadeOut('normal');
        }
    });
})