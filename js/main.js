var image = 0;
var slideImage = 1;
var slide = document.getElementsByClassName("monSlide");
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
    if (n > slide.length) {slideImage = 1}
    if (n < 1) {slideImage = slide.length} ;
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideImage-1].style.display = "block";
}
