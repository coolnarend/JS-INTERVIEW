$(document).ready(function () {
    var count = 0;
    $(".bigWord").on("click", function () {
        count++;
        if (count % 2 == 0) {
            $(".defn").removeClass("myReply");
        }else{
        $(".defn").removeClass("myReply");
        $(this).children().addClass("myReply");
        }
    });
    $(".bigWord").on("dblclick", function () {
        $(".defn").removeClass("myReply");

    });
});
