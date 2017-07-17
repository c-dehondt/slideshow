var image = 0;
var slideImage = 1;
var slide = document.getElementsByClassName("monSlide");
moin(slideImage);
carousel();

function carousel() {
    for (var i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";
    }
    image++;
    if (image > slide.length) {image = 1}
    slide[image-1].style.display = "block";
    setTimeout(carousel, 2000);
}

function plus(n) {
    moin(slideImage += n);
}

function moin(n) {
    var x = document.getElementsByClassName("monSlide");
    if (n > x.length) {slideImage = 1}
    if (n < 1) {slideImage = x.length} ;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideImage-1].style.display = "block";
}
