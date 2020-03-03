var myViewFinderArray = new Array();
var imageNames = ["image1", "image2", "image3", "image4", "image5"];


class ViewFinder
{
    constructor(title, image, description, author, imageYear)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;

    }

    get theTitle()
    {
        return this.title;
    }

    get theImage()
    {
      return this.image;
    }

    get theDescription()
    {
      return this.description;
    }

    get theAuthor()
    {
      return this.author;
    }

    get theImageYear()
    {
      return this.imageYear;
    }


    toString()
    {
      console.log("../"+this.image)
        return "Title: " + this.title + "<br>"
        + "Image: <img src='" + this.image+"'/>" + "<br>" //"Title: " + title + "<br>" +...
        + "Description:" + this.description + "<br>"
        + "Author:" + this.author + "<br>"
        + "Image Year:" + this.imageYear; + "<br>"
    }


}

// function initializeArray()  //do I have to create every single propoerty
{
    var myViewFinder = new ViewFinder("Cowboy with Cattle", "images/image1.jpg", "Cowboy on horseback herding cattle.", "Ben Christensen", "2019"  );
    var myViewFinder1 = new ViewFinder("Kick the Dust Up", "images/image2.jpg", "Cowboy and horse stirring up a dusty trail.", "Ben Christensen", "2019");
    var myViewFinder2 = new ViewFinder("Moonlight", "images/image3.jpg", "A cowboy gazing upon the rising moon", "Ben Christensen", "2019");
    var myViewFinder3 = new ViewFinder("Open Country", "images/image4.jpg", "Wrangler alone in the pasture","Ben Christensen", "2019");
    var myViewFinder4 = new ViewFinder("Full Speed", "images/image5.jpg", "Horse going full speed", "Ben Christensen","2019");


    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}
function accessInformation()
{

    document.getElementById("title").innerHTML = myViewFinderArray[3].toString();
  /*  document.getElementById("description").innerHTML = myViewFinderArray[1].toString();
    document.getElementById("image").innerHTML = myViewFinderArray[2].toString();
    document.getElementById("author").innerHTML = myViewFinderArray[3].toString();
    document.getElementById("imageYear").innerHTML = myViewFinderArray[4].toString();
*/
}

function random_item(items)
{

return myViewFinder[Math.floor(Math.random()*myViewFinder.length)];

}

var myViewFinder = [myViewFinder, myViewFinder1, myViewFinder2, myViewFinder3, myViewFinder4,];
console.log(random_item(myViewFinder));

//createRandomImageArray();
/*
for(var i = 0; i < imageNames.length; i++)
{

    //document.getElementById(imageNames[i]).src= blankImagePath;
}
*/

/*
function createRandomImageArray()
{
  var actualImagePath = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];

  while(actualImages.length < 5)
  {

      var randomNumber = Math.floor(Math.random() * actualImagePath.length)

      if(count[randomNumber] < 2)
      {
          actualImages.push(actualImagePath[randomNumber]);

          count[randomNumber] = count[randomNumber] + 1;
}
}
}
*/

var myViewFinder = myViewFinder[Math.floor(Math.random() * myViewFinder.length)]
