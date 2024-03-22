//  Preloader
jQuery(window).on("load", function () {
    $("#preloader").fadeOut(500)
    $("#main-wrapper").addClass("show")
});

(function ($) {
    "use strict"

    //to keep the current page active
    $(function () {
        for (
            var lc = window.location,
            o = $(".settings-menu a, .menu a")
                .filter(function () {
                    return this.href == lc
                })
                .addClass("active")
                .parent()
                .addClass("active");
            ;

        ) {
            // console.log(o)
            if (!o.is("li")) break
            o = o.parent().addClass("show").parent().addClass("active")
        }
    })

    $('.content-body').css({ 'min-height': (($(window).height())) + 50 + 'px' })
})(jQuery);


// Dark light toggle switch
window.addEventListener('load', function () {
    let onpageLoad = localStorage.getItem("theme") || "light"; // Default to "light" if no theme is set
    let element = document.body;

    if (onpageLoad) {
        element.classList.add(onpageLoad);
    }

    let themeElement = document.getElementById("theme");
    if (themeElement) {
        themeElement.textContent = onpageLoad;
    }
});

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");

    if (theme && theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}