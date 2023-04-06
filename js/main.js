$(function() {
    $(".sidemenu-bg").on("click", function() {
        var toggleBtn = $(".navbar-toggle").css("display");
        if (toggleBtn != "none") {
            $(".navbar-toggle:visible").trigger("click");
        }
    });
})