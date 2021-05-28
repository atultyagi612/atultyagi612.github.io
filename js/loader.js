let st = document.getElementsByClassName('loading_animation')[0].children[0].children
let is_anim_load=0
let anim_done=0
function def() {
    for (let i = 0; i < st.length; i++) {
        st[i].style.opacity = '0'
        st[i].style.transition = 'all 1s ease-out;';
    }
}
function def2() {
    // def()
    for (let i = 0; i < st.length; i++) {
        setTimeout(function () {
            st[i].style.opacity = '1'
            is_anim_load=i*25+100;
        }, i * 25); 
    }
    setTimeout(function () {
        if(anim_done==0){
            onload_animation()
            anim_done=1;
        }
    }
    ,st.length*40
    )
    
}
def2();

function onload_animation(){    
    anim_done = 1;
    if(is_anim_load>st.length*25){
        setTimeout(function () {
        document.getElementsByClassName('loading_animation')[0].style.height='0px';
        setTimeout(function () {
        document.getElementsByClassName('loading')[0].style.display='none'
        document.getElementsByClassName('mainpage')[0].style.display='block'
        onload_this()
    }, 500);
}, 250);
    }
    else{
        setTimeout(function () {
            onload_animation()
        }, 250);
    }
}