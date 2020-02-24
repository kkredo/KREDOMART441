var imageNames = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "images/gofish.jpg";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration goes here
var player = {"firstname":"", "lastname":"", "age":0, "score":0};



var actualImages = new Array();

function printBlanks()
{

    createRandomImageArray();

    for(var i = 0; i < imageNames.length; i++)
    {

        document.getElementById(imageNames[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    // array for actual images
    var actualImagePath = ["images/dog.jpg", "images/tiger.jpg", "images/horse.jpg", "images/lion.jpg", "images/trout.jpg"];
  //makes sure they are only added twice
    var count = [0,0,0,0,0];

    while(actualImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{

    // make second image show
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0) // makes the first image appear
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];

    }


    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 700); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;

        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end.html";
        }
    }
}

function imagesDisappear() //added firstNumber and secondNumber to this and it went from type error to undefined
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }


}
