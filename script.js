
$(document).ready(function () {
    $(".nav-links").hide();
    $(".burger").click(function () {
        $(".nav-links").slideToggle();
    });
});

$(document).ready(function () {
    $(".button").click(function () {
        var name = $(this).attr("data-filter");
        if (name == "all") {
            $(".filter").show(500);
        } else {
            $(".filter").not("." + name).hide(500);
            $(".filter").filter("." + name).show(1000);
        }
    });

    $(".navigation a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    });
});





