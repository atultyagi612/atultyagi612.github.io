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


const sections = document.querySelectorAll('body>div');
const navlinks=document.querySelectorAll('.navlinks li a');

window.addEventListener('scroll',()=>{

    let current="";
    let prev=""
    sections.forEach( section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
         if(pageYOffset >=(sectionTop-550)){
             current=section.getAttribute('id');
            
         }
    })
    navlinks.forEach(li=>{
        li.classList.remove('active-container');
        if(li.classList.contains(current)){
            li.classList.add('active-container')
        }
    })
});