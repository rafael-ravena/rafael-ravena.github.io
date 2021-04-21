$(document).ready(function() {
    if (docWidth > mediaBreakpoint) {
        ParallaxSections();
        ParallaxThem()
    }
    $(document).on("mousemove", function (event) {
        mousePos.X = event.pageX;
        mousePos.Y = event.pageY;
        if (docWidth > mediaBreakpoint) {
            ParallaxSections();
        }
    }).on("scroll", function () {
        if (docWidth > mediaBreakpoint) {
            ParallaxThem();
        }
    }).on("click", "#Lang-selector > .inner-wrapper > a", function (e) {
        e.preventDefault();
        e.stopPropagation();
        nextLocation = window.location.origin;
        nextLocation += "/" + $(this).attr("href");
        if (window.location.hash) {
            nextLocation += window.location.hash;
        }
        window.location.href = nextLocation;
    });
});
var mediaBreakpoint = 799.99;
var mousePos = { X: 0, Y: 0 };
var docWidth = $(window).width();
var docHeight = $(window).height();

function ParallaxThem() {
    ParallaxContent("#Objetivo");
    ParallaxContent("#Qualificacoes");
    ParallaxContent("#Formacao");
    ParallaxContent("#Cursos");
    ParallaxContent("#Idiomas");
}

function ParallaxContent(element) {
    var docOffsetY = $(document).scrollTop();
    var elementOffsetY = $(element).offset().top;
    var sectionFactor = (docHeight / 20) + (docOffsetY - elementOffsetY) / 5
    $(element).children(".holder").css("margin-top", sectionFactor + "px");
}

function ParallaxSections() {
    $("section").css("background-position", GetMouseX() + GetMouseY());
}

function GetMouseX() {
    var factor = ((docWidth - mousePos.X) / 2);
    return (-docWidth / 50) + (factor / 30) + "px ";
}

function GetMouseY() {
    var factor = ((docHeight - mousePos.Y) / 2);
    return (-docHeight / 50) + (factor / 30) + "px";
}

