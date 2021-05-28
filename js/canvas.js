const canvas =document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particleArray;
var style = getComputedStyle(document.body)

// mouse position 
let mouse={
    x:null,
    y:null,
    radius:(canvas.height/80)*(canvas.width/80)
}
// window.addEventListener('mousemove',

// function(event){
//     mouse.x=event.x;
//     mouse.y=event.y;

// }
// );

// create particl 
class Particle{
    constructor(x,y,directionx,directiony , size , color){
        this.x=x;
        this.y=y;
        this.directionx=directionx;
        this.directiony=directiony;
        this.size=size;
        this.color=color;
    }

    // draw each particle 
    draw(){
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.size , 0 , Math.PI*2 , false);
        ctx.fillStyle=style.getPropertyValue('--particle_color')
        
        ctx.fill();
    }
    // check mouse adn aprticle position 
    update(){
        if(this.x > canvas.width || this.x<0){
            this.directionx= -this.directionx;
        }
        if(this.y>canvas.height || this.y<0){
            this.directiony = -this.directiony;
        }

        // collision detection  
        let dx=this.x;
        let dy=this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if(distance<mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size*10){
                this.x+=10;
            }
            if(mouse.x > this.x && this.x > this.size * 10){
                this.x -=10;
            }
            if(mouse.y < this.y && this.y < canvas.height){
                this.y +=10;
            }
            if(mouse.y > this.y && this.y > this.size*10){
                this.y-=10;
            }

        }
        // movie aprticel 
        this.x +=this.directionx;
        this.y +=this.directiony;
        // draw 
        this.draw();
    }
}

// create paricel array 
function init(){
    particleArray=[];
    let numberofParticel = (canvas.height*canvas.width)/9000;
    for(let i=0;i<numberofParticel/5;i++){
        let size = (Math.random()*5);
        let x =(Math.random() *((innerWidth-size*2)-(size*2))+size*2 );
        let y =(Math.random() *((innerHeight-size*2)-(size*2))+size*2 );

        let directionx=(Math.random() *5)-2.5;
        let directiony=(Math.random() *5)-2.5;
        let color = '#dbcfcf8';

        particleArray.push(new Particle(x,y , directionx , directiony , size , color));

    }
}

function connect(){
    let opacity=1;
    for(let a=0;a<particleArray.length;a++){
        for(let b=0;b<particleArray.length ; b++){
            let distance =((particleArray[a].x - particleArray[b].x) *(particleArray[a].x - particleArray[b].x))+
            ((particleArray[a].y - particleArray[b].y) *(particleArray[a].y - particleArray[b].y));

            if(distance<(canvas.width/7)*(canvas.height/7)){
                // opacityvalue=1-(distance/2000000000);
                // ctx.strokeStyle='rgba(140,85,31,'+ opacityvalue + ')';
                ctx.strokeStyle=style.getPropertyValue('--particel_secondary_color');
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x , particleArray[a].y);
                ctx.lineTo(particleArray[b].x , particleArray[b].y);
                ctx.stroke();

            }
        }
    }
}

// loop of Animation 
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth , innerHeight);

    for(let i=0 ; i<particleArray.length ; i++ ){
        particleArray[i].update();
    }
    connect();
}

window.addEventListener('resize',
function(){
    canvas.width=innerWidth;
    canvas.height=this.innerHeight;
    mouse.radius=((canvas.height/80)*(canvas.height/80));
    init();
}
)



init();
animate();

