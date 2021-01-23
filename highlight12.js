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



