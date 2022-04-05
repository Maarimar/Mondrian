

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

        // botton part////////
        ctx.lineWidth = 15;
        ctx.strokeRect(250, 708, 215, 85);
        ctx.lineWidth = 17;
        ctx.strokeRect(466, 707, 236, 85);

    

        ctx.fillStyle = 'yellow';
        ctx.fillRect(214, 714, 80, 200)
        ctx.lineWidth = 16;
        ctx.strokeRect(210, 708, 80, 200);
        ctx.clearRect(200, 700, 20, 200);
        ctx.clearRect(200, 900, 100, 20);

        ctx.fillStyle = 'black';
        ctx.fillRect(464, 800, 247, 85);

        ctx.lineWidth = 17;
        ctx.strokeRect(470, 707, 300, 85);

        //big blue
        ctx.lineWidth = 22;
        ctx.strokeRect(702, 707, 227, 168);
        ctx.fillStyle='blue';
        ctx.fillRect(708, 715, 215, 155);

        //small red
        ctx.fillStyle = 'red';
        ctx.fillRect(940, 712, 50, 200)
        ctx.lineWidth = 15;
        ctx.strokeRect(945, 706, 50, 200);
        ctx.clearRect(936, 898, 80, 20);
        ctx.clearRect(988,698, 15, 200);

        ////yellowtop///

        ctx.fillStyle= 'yellow';
        ctx.fillRect(714, 108, 225, 80);
        ctx.lineWidth = 16;
        ctx.strokeRect(713, 110, 219, 80);
        ctx.clearRect(700, 102, 270, 20);
       

// lines -----------

ctx.beginPath();
ctx.moveTo(220, 200);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineWidth = 20;
ctx.lineTo(400, 130);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(466.5, 800);
ctx.lineWidth = 20;
ctx.lineTo(466.5, 900);
ctx.stroke();





    }
}