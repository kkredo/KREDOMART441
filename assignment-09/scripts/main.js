let warbait = {    //saying let the variable have these values
    "manufacturer" : "WARBAITS",
    "model" : "SlayerHead",
    "colors" : [
        "Dark Dayz",
        "Burnt",
        "Firecracker",
        "DCP"
    ],

    "sizes" : [
        "1/4 oz",
        "3/8 oz",
        "1/2 oz",
        "3/4 oz",
        "1 oz",
        "1 1/2 oz",
        "2 oz"
    ]
}


        $(function () {                     //this function declares then when the click function happens the info is shown
            $("button").click(function () {
                showWarbaitInfo();
            });

        });

        function showWarbaitInfo()  //this function holds the info that the user will see
            {
                $("#warbaitInformation").html("Manufacturer: " + warbait.manufacturer
                + "<br>Model:" + warbait.model + "<br>Available Colors:" + "<br>" + warbait.colors[0] + "<br>" + warbait.colors[1] + "<br>" + warbait.colors[2] + "<br>" + warbait.colors[3] + "<br>" +  "<br>Sizes Available:<br>" +
                warbait.sizes[0] + "<br>" + warbait.sizes[1] + "<br>" + warbait.sizes[2] + "<br>" + warbait.sizes[3] +"<br>" + warbait.sizes[4] + "<br>" + warbait.sizes[5] + "<br>" + warbait.sizes[6] );
            }
