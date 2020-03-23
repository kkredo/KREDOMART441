$(document).ready(function () {
           $("button").click(function () {
               $("#warbaitInformation").load("data/warbaitInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#warbaitInformation").fadeOut("slow").fadeIn("slow");
       }
