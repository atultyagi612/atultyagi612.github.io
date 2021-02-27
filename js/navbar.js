let naavside = () => {
    let sideview = document.querySelector('.sideview');
    let nav = document.querySelector('.navlinks');
    let navlinks = document.querySelectorAll('.navlinks li')
    sideview.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
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
naavside();


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
            const sectionTop = sections[i].offsetTop;
            const sectionHeight = sections[i].clientHeight;
            if(pageYOffset >=(sectionTop-550)){
                current=sections[i].getAttribute('id');
                
            }
        
    }
    navlinks.forEach(li=>{
        li.classList.remove('active-container');
        if(li.classList.contains(current)){
            li.classList.add('active-container')
        }
    })
});