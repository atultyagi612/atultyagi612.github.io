let anim_up=document.getElementsByClassName('animate_up')
let anim_down=document.getElementsByClassName('animate_down')

function animate_main(){
    let temp=0.2;
    for(let i=0;i<anim_down.length;i++){
        anim_down[i].classList.add('fadeInDown')
        anim_down[i].style.animationDelay=`${temp}s`
        temp=temp+0.2;
    }
    for(let i=0;i<anim_up.length;i++){
        anim_up[i].classList.add('fadeInUp')
        anim_up[i].style.animationDelay=`${temp}s`
        temp=temp+0.2;
    }
}
animate_main()

// on viewPoint animation 

// view port check
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)&&
        rect.top+window.innerHeight/5 < (window.innerHeight || document.documentElement.clientHeight);
}

let down = document.getElementsByClassName('scroll_animation_down')
let up = document.getElementsByClassName('scroll_animation_up')
let left = document.getElementsByClassName('scroll_animation_left')
let right = document.getElementsByClassName('scroll_animation_right')

function visible_none(){
    for(let i=0;i<down.length;i++){
            down[i].style.visibility='hidden'
    }
    for(let i=0;i<up.length;i++){
            up[i].style.visibility='hidden'
    }
    for(let i=0;i<left.length;i++){
            left[i].style.visibility='hidden'
    }
    for(let i=0;i<right.length;i++){
            right[i].style.visibility='hidden'
    }
}
visible_none()
function view(){

    for(let i=0;i<down.length;i++){
        if(isElementInViewport(down[i])){
            down[i].classList.add('fadeInDown')
            down[i].style.visibility='visible'
        }
    }
    for(let i=0;i<up.length;i++){
        if(isElementInViewport(up[i])){
            up[i].classList.add('fadeInUp')
            up[i].style.visibility='visible'
        }
    }
    for(let i=0;i<left.length;i++){
        if(isElementInViewport(left[i])){
            left[i].classList.add('fadeInLeft')
            left[i].style.visibility='visible'
        }
    }
    for(let i=0;i<right.length;i++){
        if(isElementInViewport(right[i])){
        right[i].classList.add('fadeInRight')
        right[i].style.visibility='visible'
        }
    }
}
 document.addEventListener('scroll', view);




 


