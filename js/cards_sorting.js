let cards=document.getElementsByClassName('card')

function disableAll(){
    for(let i=0;i<cards.length;i++){
        cards[i].classList.remove('active')
        cards[i].classList.add('out')
        setTimeout(function() {
            cards[i].classList.add('disable')
        }, 300);
    }
}

function removeStyle(){

    const temp = document.getElementsByClassName('types_of_sub_proj')[0].children
    for(let i=0;i<temp.length;i++){
        temp[i].classList.remove('active-container')
    }
}

function EnableAll(th){
    removeStyle()
    th.classList.add('active-container')
    for(let i=0;i<cards.length;i++){
        cards[i].classList.remove('out')
        cards[i].classList.remove('disable')
        cards[i].classList.add('active')
    }
}

function sort_card(elem,th){
    disableAll();
    removeStyle()
    th.classList.add('active-container')
    setTimeout(function() {
    let temp=document.getElementsByClassName(elem)
    for(let i=0;i<temp.length;i++){
        temp[i].classList.remove('out')
        temp[i].classList.remove('disable')
        temp[i].classList.add('active')
    }
}, 400);
}
// enabel python 
default_sort('python_card');
function default_sort(elem){
    disableAll();
    document.getElementsByClassName('types_of_sub_proj')[0].children[1].classList.add('active-container')
    setTimeout(function() {
    let temp=document.getElementsByClassName(elem)
    for(let i=0;i<temp.length;i++){
        temp[i].classList.remove('out')
        temp[i].classList.remove('disable')
        temp[i].classList.add('active')
    }
}, 400);
}