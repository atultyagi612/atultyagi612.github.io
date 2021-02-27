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
function myFunction2(id) {
    var element = document.getElementById(id);
    element.classList.add("in-left");
  }

  function ebs(){
    // for(let i=0 ; i<6;i++){
    //   if(isElementInViewport(document.getElementById(`project-list-link${i}`))){
    //     myFunction2(`project-list-link${i}`)
        
    //   }
    // }
    if(isElementInViewport(bar)){
      myFunction('python');
      myFunction1('info1');
      myFunction('java');
      myFunction1('info2');
      myFunction('C-C-Plus-Plus');
      myFunction1('info3');
      myFunction('html-css');
      myFunction1('info4');
      myFunction('nodejs');
      myFunction1('info6');

      // document.removeEventListener("scroll", ebs);

      
  }
  }
document.addEventListener('scroll', ebs);



 
         