canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "black";
WidthLine= 3;
radius= 40;
var last_x, last_y, current_x, current_y ;
var mouseEvent= "empty";

canvas.addEventListener("mousedown", MYmouseDown);
canvas.addEventListener("mousemove", MYmouseMove);
canvas.addEventListener("mouseup", MYmouseUp);
canvas.addEventListener("mouseleave", MYmouseLeave);

function MYmouseDown(e) {
    color= document.getElementById("colour").value;
    lineWidth= document.getElementById("width_input").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mousedown";
}

function MYmouseUp() {
    mouseEvent= "mouseup";
}

function MYmouseLeave() {
    mouseEvent= "mouseleave"
}

function MYmouseMove(e) {

    current_y= e.clientY - canvas.offsetTop;
    current_x= e.clientX - canvas.offsetLeft;
    if (mouseEvent== "mousedown") {
        ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= WidthLine;
    ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
    ctx.stroke();
    }
    last_x= current_x;
    last_y= current_y;
}

function ClearCanv() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

