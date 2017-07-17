var image = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("monSlide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    image++;
    if (image > x.length) {image = 1}
    x[image-1].style.display = "block";
    setTimeout(carousel, 2000);
}
