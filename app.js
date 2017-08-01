var colours = ["#f69238",
                "#009e57",
                "#00aeef",
                "#ee1b2d",
                "#873c96",
                "#ef59a1",
                "#0153a0",
                "#c6870e",
                "#005040",
                "#fbb555",
                "#008b98",
                "#f0563b"]
var buses = ["awapuni",
             "rugby",
             "highbury",
             "takaro",
             "cloverlea",
             "milson",
             "rhodes",
             "roslyn",
             "rangiora",
             "brightwater",
             "fernlea",
             "heights"]
//CLASS
class Bus {
    //the different properties that Bus objects should have
    constructor(name, stops, colour, monFriTimes, friTimes, satTimes, sunTimes) {
        this.name = name;
        this.busStops = stops;

        this.colour = colour;
        this.monFriTimes = monFriTimes;
        this.friTimes = friTimes;
        this.satTimes = satTimes;
        this.sunTimes = sunTimes;
        
        this.routeNameDOM = document.getElementById('route')
        this.busStopsDOM = document.getElementById('stops')
        this.stopDOM = document.getElementById('stops')
        this.monFriDOM = document.getElementById('monFri')
        this.saT = document.getElementById('saturday')
        this.suN = document.getElementById('sunday')
        
    }



    getStops() {
        var html = '<ul>';
        for (var i = 0; i < this.busStops.length; i++) {

            //onclick="                                  awapuni.showTimes(1)                                                 Deaprt MST
            html += "<li class='busStop' onclick='routes[\"" + this.name + "\"].showTimes(" + i + ")'>" + this.busStops[i] + "</li>"
        }
        html += '</ul>'
        return html
    }

    showTimes(index) {
        
        this.routeNameDOM.innerHTML = this.name;
        this.stopDOM.innerHTML = this.busStops[index];
//        //get the correct times. that match this stop. using the index argument
//        //show the time on the webpage.
    }

}


//ROUTES
var routes = {};

for (var i = 0; i < buses.length; i++) {
    var name = buses[i];
    
    var newRoute = new Bus(
    name,
    data.stops[name],
    data.colors[name],
    data.timesMonFri[name],
    data.timesFri[name],
    data.timesSat[name],
    data.timesSun[name],
    );
        routes[name] = newRoute;
}


//JQUERY STUFF
$(document).ready(function () {
var TheSquare = {
    lat: -40.353005,
    lng: 175.610677,
}
//      Map Object
        window.map = new google.maps.Map(document.getElementById('map'), {
            center: TheSquare,
            zoom: 13
        })
        
    $(".stopsMenu").hide();

    $(".bus h2").click(function () {
        $("#" + this.id + "Stops").html(routes[this.id].getStops());
        $("#" + this.id + "Stops").slideToggle();
    })

});
