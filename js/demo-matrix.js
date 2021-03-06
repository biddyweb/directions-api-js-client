$(document).ready(function (e) {
    jQuery.support.cors = true;

    $('#search_button').click(function () {

        // create main GraphHopper Matrix object which handles the API requests
        var ghm = new GraphHopperMatrix({"key": "YOUR_KEY",
            "vehicle": "car"});

        // possible out_array options are: weights, distances, times, paths
        ghm.addOutArray("distances");
        ghm.addOutArray("times");

        $('.point').each(function (idx, div) {
            // parse the input strings and adds it as from_point and to_point
            ghm.addPoint(new GHInput($(div).val()));

            // To create an NxM matrix you can simply use the other methods e.g.
            // ghm.addFromPoint(new GHInput(someCoordinateString))
            // or
            // ghm.addToPoint(new GHInput(someCoordinateString))
        });

        ghm.doRequest(function (json) {
            if (json.message) {
                var str = "An error occured: " + json.message;
                if (json.hints)
                    str += json.hints;

                $("#response").text(str);
            } else {
                var outHtml = "Distances in meters: <br/>" + ghm.toHtmlTable(json.distances);
                outHtml += "<br/><br/>Times in seconds: <br/>" + ghm.toHtmlTable(json.times);
                $("#response").html(outHtml);
            }
        });

        return false;
    });
});
