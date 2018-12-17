/*window.onload = function(){

    if(!checkCalc()){
        var style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'css/styles-nocalc.css');
        document.body.appendChild(style);
    }

}

function checkCalc(){
    var div = document.createElement('div');
    div.style.cssText = 'width: calc(100%)';
    return div.style.length > 0;
}*/
 var slideIndex = 1;
      showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}