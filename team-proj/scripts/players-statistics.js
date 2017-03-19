//Test

var players = getPlayerData();

var $containerDiv = $("<div>").addClass("div-container");
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");

//$containerDiv.hide(); // working so far

$playerButton.on("click", function (e) {
    while($options.children().length > 0) {
        $options.remove($options.first());
    }
    fillAndAppendDiv();






    //Show $charts


    // if ($charts.css("opacity") == 0.8) { //close
    //     $charts.animate({
    //         opacity: "0"
    //     }, 500);
    //     $containerDiv.hide();
    // }
    // else { //open
    //     $charts.animate({
    //         opacity: "0.8"
    //     }, 500);
    //     $containerDiv.show();
    // }
    // if ($options.css("opacity") == 0.8) { //close
    //     $options.animate({
    //         opacity: "0"
    //     }, 500);
    //     $containerDiv.hide();
    // }
    // else {
    //     $options.animate({ //open
    //         opacity: "0.8"
    //     }, 500);
    //     if ($options.children().length <= 0) {  
    //         fillAndAppendDiv();
    //     }
    //     else {
    //         $options.find(".div-container").empty(); // working so far
    //         fillAndAppendDiv();
    //     }
    //     $containerDiv.show();
    // }
});





function fillAndAppendDiv() {
    var uniqNamesObject = {};
    players.forEach(p => {
        uniqNamesObject[p.PlayerFullName] = true;
    });

    var uniqNamesArray = Object.keys(uniqNamesObject).sort();


    var $list = $("<ul>")
        // .css("list-style-type", "none")
        // .css("overflow", "scroll")
        // .css("height", "50%")
        // .css("margin", "5px 35px")
        .hide()
        .addClass("player-list");

    var $li;
    var $label1 = $("<h4>"); // WARNING: changes size a bit

    var $choose = $("<button>")
        .addClass("customButton")
        .html("Choose a player")
        .css("margin", "10px 35px")
        .on("click", function(e) {
            $list.toggle();
            $label1.toggle();
        });

    uniqNamesArray.forEach(name => {
        $li = $("<li>").addClass("player");
        $li.html(name);
        $li.on("mouseover", function(e) {
            var $target = $(e.target);
            $target.addClass("hovered-player");
        });
        $li.on("mouseout", function(e) {
            var $target = $(e.target);
            $target.removeClass("hovered-player");
        });
        $li.on("click", function(e) {
            var $target = $(e.target);
            $label1.html("Selected player: " + $target.html());
            $label1.show();
            $list.toggle();
        });
        $list.append($li);
    });

    $containerDiv.append($choose);
    $containerDiv.append($list);
    $containerDiv.append($label1);
    $containerDiv.addClass("test");
    $options.append($containerDiv);
}
//before adding my div, clear the options container
//$options.append($containerDiv);


//TODO: add the css for $charts and $options in a seperate file
//TODO: encapsulate the logic in 1 function
//TODO: clear the $options and $chart when the Player-Statistics button is clicked again