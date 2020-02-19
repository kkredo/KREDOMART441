// having a hard time grasping this stuff, using example code heavily to help understand

var imageTags = ["image1", "image2", "image3", "image4"];
imageTags[0] = dog.jpg;
imageTags[1] = tiger.jpg;
imageTags[2] = gofish.jpg;
imageTags[3] = gofish.jpg;
//maybe I should make the dog.jpg, tiger.... within the array?

// create a variable with the blank image name
var blankImagePath = "images/gofish.jpg";
// create a empty array for the actual images
var actualImages = new Array();

//console log says printBlanks is not defined at onload
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[0]).src= blankImagePath;
        document.getElementById(imageTags[1]).src= blankImagePath;
        document.getElementById(imageTags[2]).src= blankImagePath;
        document.getElementById(imageTags[3]).src= blankImagePath;


    }



}

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["images/dog.jpg", "images/tiger.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 4)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}


//console log says flipImage is not defined
function flipImage(number)
{

    document.getElementById(imageTags[0]).src= actualImages[0];
        // this should be a quick function that just changes
        // the image based on what number was pressed
    document.getElementById(imageTags[1]).src= actualImages[1];

    document.getElementById(imageTags[2]).src= actualImages[2];

    document.getElementById(imageTags[3]).src= actualImages[3];


}
