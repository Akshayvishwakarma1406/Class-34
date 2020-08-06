var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballpos = database.ref('Ball/Position');
    ballpos.on("value",readposition);
}

function draw(){
    background("white");
    if(position !== undefined ){
    if(keyDown(LEFT_ARROW)){
        writeposition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+3);
    }
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writeposition(x,y){
    database.ref('Ball/Position').set({x:position.x + x, y : position.y + y});
}