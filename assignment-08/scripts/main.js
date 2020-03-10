var horseSelector = "#horse"; // # means that this is unique unlike a . in css where it can be applied to many
var dogSelector = "#dog";
var lionSelector = "#lion";
var troutSelector ="#trout";


var allHorses = new Array();

class HorseInfo{ //creating my class
    constructor(selector, imagePath) // these are the objects
    {
      this.selector = selector; //sets the selector   selector comes from class but this. allows us to get properties
      this.imagePath = imagePath; // sets image path
    }

    get theSelector(){  // get grabs the selector and returns it to function initializeArray
        return this.selector;
    }

    get theImagePath(){  //get grabs selector and returns it to the function initializeArray
        return this.imagePath;
    }
}

function initializeArray()
{
  var horse = new HorseInfo("#horse", "images/horse.jpg"); // setting var to class, calling the selector, and image path
  allHorses.push(horse); //pushing the info

  var dog = new HorseInfo("#horse", "images/dog.jpg"); // doing the same but for dog now, It is horse still because of #, these do not change
  //this does not change because selector and class is defined above, can only have one
  allHorses.push(dog);

  var lion = new HorseInfo("#horse", "images/lion.jpg");
  allHorses.push(lion);

  var trout = new HorseInfo("#trout", "images/trout.jpg");
  allHorses.push(trout);

}

$(document).ready(function(){ //not sure what this actually means


    $("button").click(function(){ //function for onclick event
//$(allHorses[0].theSelector).src = allHorses[0].theImagePath;
$(allHorses[2].theSelector).attr("src", allHorses[2].theImagePath); //calling allHorses and establishing 0 for horse image, using attribute because src didnt work
//after attr calling the path of what image we want
        setInterval(moveSquare, 1000); //sets how many times the square moves
        $(allHorses[2].theSelector).fadeOut().fadeIn(); //used chaining here to join the fade in and out
    });
});


function moveSquare() //when adding stuff to functions add all values within the curly brackets
{
  $("#rectangle").animate({left:900}).animate({top:100}).animate({left:20}).animate({top:600});
  $("#square3").animate({left:2000}).animate({top:200}).animate({left:10}).animate({top:300});
  $("#square2").animate({left:400}).animate({top:300}).animate({left:2}).animate({top:400});
  $("#square1").animate({left:1050}).animate({top:700}).animate({left:0}).animate({top:600});
}

document.write("<img src = \"" + Math.floor(1 + Math.random() * 4) + ".jpg\" />");

//class to hold the picture information, an object array, and then display the information out of the array
//do i need an array for the imageName
// call images with Math.Random?
