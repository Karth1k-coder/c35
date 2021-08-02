var ball;
var database, position
function setup(){
    createCanvas(500,500);
    database= firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition= database.ref("ball/position")
    ballPosition.on("value",readPosition,showError)
    console.log(ballPosition)
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    drawSprites();
}

function changePosition(x,y){
 database.ref('ball/position').set({
    'x': position.x+x,
     'y': position.y+y
 })
}
function readPosition(data){
position=data.val()
ball.x=position.x
ball.y=position.y
}

function showError(){
    console.log("errors")
}