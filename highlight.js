function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)&&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
};

let bar1 =[document.querySelector('#id-1'),
document.querySelector('#Skills-id'),
document.querySelector('#project-list-link'),
document.querySelector('#facebook-id')];

highlight= document.querySelectorAll('.navlinks>li>a');

myFunction_add('home-id');
function myFunction_add(id) {
    var element = document.getElementById(id);
    element.classList.add("active-container");
  }

document.addEventListener('scroll', function (e) {
    for(let i=0;i<bar1.length;i++){
        if(isElementInViewport(bar1[i])){  
            remove_all()
            myFunction_add(highlight[i].id)
        }
    }
});

function remove_all(){
    for(let i=0;i<highlight.length;i++){
         var element = document.getElementById(highlight[i].id);
         element.classList.remove("active-container");
}}


// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }