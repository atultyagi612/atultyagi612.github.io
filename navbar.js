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
    console.log(sideview)
    console.log(nav)
    console.log(navlinks)
    
}
naavside();


window.addEventListener('scroll',function () {
    let header =document.querySelector('nav');
    header.classList.toggle('scroll-active',window.scrollY > 0);
})