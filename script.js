

let canvas = document.getElementById('creativeCoding');

let ctx = canvas.getContext("2d");
dpi = window.devicePixelRatio;



function fix_dpi() {
    let style = {
        height(){
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);

        },
        width(){
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        }
    }
    canvas.setAttribute('width', style.width()* dpi);
    canvas.setAttribute('height', style.height()* dpi);

}

function draw(){
    let canvas = document.getElementById('creativeCoding');
    if (canvas.getContext){
        fix_dpi();
        let ctx= canvas.getContext('2d');

        //big red sq
        ctx.fillStyle = 'red';
        ctx.fillRect(300, 200, 400, 400); 
        ctx.lineWidth = 15;
        ctx.strokeRect(300, 200, 400, 400); 

        
        //small black under red
        ctx.fillStyle= 'black';
        ctx.fillRect(292.5, 607, 175, 100);

        //one of the two white fill
        ctx.lineWidth = 17;
        ctx.strokeRect(467.5, 607, 232, 100);

        //one of the two white fill
        ctx.lineWidth = 17;
        ctx.strokeRect(700, 607, 232, 100);

        //under yellow on the right
        ctx.lineWidth = 17;
        ctx.strokeRect(705, 423, 120, 175);

        //under yellow on the left
        ctx.lineWidth = 18;
        ctx.strokeRect(831, 423, 100, 175);

        //yellow next to red
        ctx.fillStyle= 'yellow';
        ctx.fillRect(714, 200, 225, 212);
        ctx.lineWidth = 16;
        ctx.strokeRect(713, 200, 219, 212);

        // botton part
        ctx.lineWidth = 15;
        ctx.strokeRect(300, 708, 170, 85);

        ctx.lineWidth = 17;
        ctx.strokeRect(466, 707, 236, 85);

        ctx.fillStyle = 'yellow';
        ctx.fillRect(214, 714, 80, 180)

        ctx.fillStyle = 'black';
        ctx.fillRect(464, 800, 247, 85);

        ctx.lineWidth = 17;
        ctx.strokeRect(466, 707, 236, 85);

        //big blue
        ctx.lineWidth = 22;
        ctx.strokeRect(700, 707, 227, 177);
        ctx.fillStyle='blue';
        ctx.fillRect(705, 707, 223, 175);





        
        
       




    }
}