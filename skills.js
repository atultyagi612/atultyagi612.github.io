function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)&&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
let bar =document.querySelector('.bar');

function myFunction(id) {
    var element = document.getElementById(id);
    element.classList.add("animate-progress-line");
  }
function myFunction1(id) {
    var element = document.getElementById(id);
    element.classList.add("animate-info-span");
  }

document.addEventListener('scroll', function (e) {
    if(isElementInViewport(bar)){
        myFunction('python');
        myFunction1('info1');
        myFunction('java');
        myFunction1('info2');
        myFunction('C-C-Plus-Plus');
        myFunction1('info3');
        myFunction('html-css');
        myFunction1('info4');
        myFunction('javascript');
        myFunction1('info5');

    }
});



 
         