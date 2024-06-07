$(document).ready(function () {
    $("#container").jCarouselLite({
        auto: 0.0001,	//多久時間輪播
        scroll: 1,	//一次輪播的張數
        visible: 3,	//一次看到幾張圖
        speed: 3000,	//輪播的速度
    });
});