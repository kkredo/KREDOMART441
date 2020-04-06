var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 5;
var score = 0;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(200,200,50,50,"#fd6a02");
    square2 = new Square(400,400,100,100,"red");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });

function setup2()
{
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  rectangle1 = new Rectangle(600,500,15,25,"#f0f0ff");
  rectangle2 = new Rectangle(375,275,25,20,"red");
  rectangle3 = new Rectangle(475,175,60,50,"black");
  rectangle4 = new Rectangle(300,100,15,40,"purple");
  $.getJSON("data/rectangles.json", function(data) {
      for(var i = 0; i < data.rectangles.length; i++)
      {
          squareArray.push(new Rectangle(data.rectangles[i].x,data.rectangles[i].y, data.rectangles[i].h, data.rectangles[i].w, data.rectangles[i].color));
      }
      drawRectangle();
  });
}

}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }

        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawSquare();

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, 6, 50);
    ctx.fillText("Score: " + score, 6, 20);


}

function drawRectangle()
{
  ctx.clearRect(0,0,800,800);
  ctx.fillStyle = rectangle1.mainColor;
  ctx.fillRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
  ctx.fillStyle = rectangle2.mainColor;
  ctx.fillRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);
  for(var i = 0; i < rectangleArray.length; i++)
  {
      ctx.fillStyle = rectangleArray[i].mainColor;
      ctx.fillRect(rectangleArray[i].x, rectangleArray[i].y, rectangleArray[i].width, rectangleArray[i].height);
  }

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
