$(function() {
    $(".tabs-content").not(":first").hide()
    $(".tabs-head .tab").on("click", function() {
        $(".tabs-head .tab").removeClass("active").eq($(this).index()).addClass("active")
        $(".tabs-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active")
})