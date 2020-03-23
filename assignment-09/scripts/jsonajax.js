$(document).ready(function () {
           $("button").click(function () {
               $("#warbaitInformation").load("data/data.json", function(responseText){
                   var warbait = JSON.parse(responseText);
                   $("#warbaitInformation").html("Manufacturer: " + warbait.manufacturer
               + "<br>Model:" + warbait.model + "<br>Colors Available:" + "<br>" + warbait.colors[0] + "<br>" + warbait.colors[1] + "<br>"  + warbait.colors[2] + "<br>" +  warbait.colors[3] + "<br>" + "<br>Sizes Available:<br>" +
               warbait.sizes[0] + "<br>" + warbait.sizes[1] + "<br>" + warbait.sizes[2] + "<br>" + warbait.sizes[3] + "<br>" + warbait.sizes[4] + "<br>" + warbait.sizes[5] + "<br>" + warbait.sizes[6]);
             });
           });
       });


// leaving this example here, might use it later
      /* function fadeText()
       {
           $("#bikeInformation").fadeOut("slow").fadeIn("slow");
       }
       */
