let elemnt = () => {
          
    let element = document.getElementsByClassName('rubberBand')

    for (let i = 0; i < element.length; i++) {
        element[i].style.animation = `rubberBand 1s`;
        element[i].addEventListener('mouseover', () => {
            if (element[i].style.animation) {
                element[i].style.animation = '';
            }
            else {
                element[i].style.animation = `rubberBand 1s`;
            }

        }, false);
        element[i].addEventListener('mouseout', () => {
                element[i].style.animation = `rubberBand 1s`;
        }, false);
        element[i].addEventListener('click', () => {
                element[i].style.animation = `rubberBand 1s`;
        }, false);

    }
}
elemnt();
// color-trans 20s infinite ${i/9}s
