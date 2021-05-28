function getRandomColor(color) {
    var p = 1,
        temp,
        random = Math.random(),
        result = '#';

    while (p < color.length) {
        temp = parseInt(color.slice(p, p += 2), 16)
        temp += Math.floor((255 - temp) * random);
        result += temp.toString(16).padStart(2, '0');
    }
    return result;
}
function setanim_color(color){
    
    root.style.setProperty('--anim0', getRandomColor(color));
    root.style.setProperty('--anim1', getRandomColor(color));
    root.style.setProperty('--anim2', getRandomColor(color));
    root.style.setProperty('--anim3', getRandomColor(color));
}

function moon(){
    document.getElementById('moon').classList.add('transform')
    document.getElementById('sun').classList.remove('transform')
    document.getElementById('background').style.fill='#bcd1ee';
    lightmode()
}
function sun(){
    document.getElementById('sun').classList.add('transform')
    document.getElementById('moon').classList.remove('transform')
    document.getElementById('background').style.fill='rgb(47, 46, 65)'; 
    darkmode()
}

var root = document.querySelector(':root');
function darkmode(){
    setanim_color('#CCD6F6')
    root.style.setProperty('--primary_color', '#0A192F');
    root.style.setProperty('--primary_second_color', '#112240');
    root.style.setProperty('--scroll_active', '#0f213be0');
    root.style.setProperty('--secondary_color', '#5EF1CF');
    root.style.setProperty('--secondary_color_lower', 'rgb(157, 227, 230)');
    root.style.setProperty('--third_color', '#CCD6F6');
    root.style.setProperty('--fourth_color', '#8892B0');
    root.style.setProperty('--navbar_color', 'rgba(255, 255, 255, 0)');

    update_cloud_values()
    chart.setOption(option);
}
function lightmode(){
    
    root.style.setProperty('--primary_color', '#FFFFFF');
    root.style.setProperty('--primary_second_color', '#FAF8FF');
    root.style.setProperty('--scroll_active', '#0f213bf5');
    root.style.setProperty('--secondary_color', '#854EEE');
    root.style.setProperty('--secondary_color_lower', '#9e73f0');
    root.style.setProperty('--third_color', '#020D3B');
    root.style.setProperty('--fourth_color', '#525360');
    root.style.setProperty('--navbar_color', 'rgba(255, 255, 255, 0)');




    root.style.setProperty('--anim0', '#01071e');
    root.style.setProperty('--anim1', '#010518');
    root.style.setProperty('--anim2', '#020d3b');
    root.style.setProperty('--anim3', '#010929');

    update_cloud_values()
    chart.setOption(option);

}