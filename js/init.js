jQuery(function($){

    $(".nav dd").on("click",function () {
        var now = $("dl > dd").index(this);
        $("dd").removeClass('select');
        $("dd").eq(now).addClass('select');
        $(".bx").removeClass('select');
        $(".bx").eq(now).addClass('select');
    })

});