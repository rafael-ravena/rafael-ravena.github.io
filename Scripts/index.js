$(document).ready(function () {
    $(document).on("mousemove", function (event) {
        mousePos.X = event.pageX;
        ParallaxSections();
    }).on("scroll", function () {
        ParallaxSections();
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
    SetBackground();
    ShowAge();
});
var mousePos = { X: 0, Y: 0 };
var docWidth = $(window).width();
var docHeight = $(window).height();
var bg = ["/Content/images/goals.jpg",
    "/Content/images/study.jpg",
    "/Content/images/xperience.jpg",
    "/Content/images/skills.jpg"];

function ParallaxSections() {
    $("body").css("background-position", GetMouseX() + GetMouseY());
}

function GetMouseX() {
    // var factor = ((docWidth - mousePos.X));
    // return (-docWidth / 4) + (factor / 30) + "px ";
    return "center ";
}

function GetMouseY() {
    var docOffsetY = $(document).scrollTop();
    return (-docHeight / 50) + (-docOffsetY / 15) + "px";
}

function SetBackground() {
    const bgCopy = bg.slice();
    bgCopy.push(...bgCopy);
    bgCopy.push(...bgCopy);
    var bgIndex = Math.floor(Math.random() * bgCopy.length);
    $("body").css("background-image", "url('" + bgCopy[bgIndex] + "')");
    ParallaxSections();
}

function ShowAge() {
    var birthDate = new Date(1981, 6, 9);
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(age);
    $("[data-behavior~='display-age']").text(age);
}