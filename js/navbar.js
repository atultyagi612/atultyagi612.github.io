let scroll = 1
let mobile=0
function blurelements(){
    let temp=document.getElementsByClassName('mainpage ')[0].children
    for(let i=2;i<temp.length;i++){
        temp[i].style.transition = 'filter 1s ease-out;';
    }
    for(let i=2;i<temp.length;i++){
        temp[i].style.filter="blur(5px)"
    }

}
function removeBlur(){
    let temp=document.getElementsByClassName('mainpage ')[0].children
    for(let i=2;i<temp.length;i++){
        temp[i].style.removeProperty('filter')
    }

}
let naavside = () => {
    let sideview = document.querySelector('.sideview');
    let nav = document.querySelector('.navlinks');
    let navlinks = document.querySelectorAll('.navlinks li')
    sideview.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        document.getElementsByClassName('navlinks')[0].style.top=`${document.getElementsByTagName('nav')[0].clientHeight}px`
        mobile=1
        if(scroll==1){
            console.log('done')
            document.body.style.overflowY='hidden'
            scroll = 0;
            blurelements()
        }
        else{
            document.body.style.overflowY='scroll'
            scroll=1;
            removeBlur()
            
        }
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkslide 1s ease forwards ${index / 7}s`;
            }

        });
        sideview.classList.toggle('toggle');
    });
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if(scroll==1 && mobile==1){
            console.log('done')
            document.body.style.overflowY='hidden'
            scroll = 0;
            dblurelements()
        }
        else{
            document.body.style.overflowY='scroll'
            scroll=1;
            removeBlur()
        }
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkslide 1s ease forwards ${index / 7}s`;
            }

        });
        sideview.classList.toggle('toggle');
    });
    
}
// naavside();


window.addEventListener('scroll',function () {
    let header =document.querySelector('nav');
    header.classList.toggle('scroll-active',window.scrollY > 0);
})


const sections = document.querySelectorAll('body>div')[1].children;
const navlinks=document.querySelectorAll('.navlinks li a');

window.addEventListener('scroll',()=>{

    let current="";
    let prev=""
    for(let i=0;i<sections.length;i++){
        if(sections[i].id!="hidden_blog"){
            const sectionTop = sections[i].offsetTop;
            const sectionHeight = sections[i].clientHeight;
            if(pageYOffset >=(sectionTop-550)){
                current=sections[i].getAttribute('id');  
            }
    }
}
    navlinks.forEach(li=>{
        li.classList.remove('active-container');
        if(li.classList.contains(current)){
            li.classList.add('active-container')
        }
    })
});

function Close_hidden_nav(){
    document.getElementsByClassName('hidden_nav')[0].style.visibility= 'hidden'
    document.getElementsByClassName('hidden_nav')[0].style.opacity='0'
    document.body.style.overflowY='scroll'
}
function show_hidden_nav(){
    
    document.getElementsByClassName('hidden_nav')[0].style.visibility= 'visible'
    document.getElementsByClassName('hidden_nav')[0].style.opacity='1'
    document.body.style.overflowY='hidden'
    
}