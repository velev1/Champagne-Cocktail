//Test

var players = getPlayerData();

var $containerDiv = $("<div>").addClass("div-container");
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");

//$containerDiv.hide(); // working so far

$playerButton.on("click", function (e) {
    // while (!$options.has("div")) {
    //     //$options.remove($options.first()); // ne gurmi
    //     $options.first().remove();
    // }
    // fillAndAppendDiv();

    newFunc();






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





function fillAndAppendDiv() { // not working
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
        .on("click", function (e) {
            $list.toggle();
            $label1.toggle();
        });

    uniqNamesArray.forEach(name => {
        $li = $("<li>").addClass("player");
        $li.html(name);
        $li.on("mouseover", function (e) {
            var $target = $(e.target);
            $target.addClass("hovered-player");
        });
        $li.on("mouseout", function (e) {
            var $target = $(e.target);
            $target.removeClass("hovered-player");
        });
        $li.on("click", function (e) {
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


function newFunc() {
    var btn = document.getElementById("btnStatisticsPleyer");
    btn.addEventListener("click", function createOptionsPlayerStatistics() {
        var el = document.getElementById("options-container");
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }

        var conteiner = document.createElement("div");
        conteiner.className = "div-container";
        //appends :
        var uniqNamesObject = {};
        players.forEach(p => {
            uniqNamesObject[p.PlayerFullName] = true;
        });

        var uniqNamesArray = Object.keys(uniqNamesObject).sort();

        var list = document.createElement("ul");


        var $choose = $("<button>")
            .addClass("customButton")
            .html("Choose a player")
            .css("margin", "10px 35px")
            .on("click", function (e) {
                $list.toggle();
                $label1.toggle();
            });
        var $label1 = $("<h4>");

        var $list;
        var $li;
        for (let i = 0, len = uniqNamesArray.length; i < len; i += 1) {
            var li = document.createElement("li");
            li.innerHTML = uniqNamesArray[i];

            $li = $(li).addClass("player");
            $li.on("mouseover", function (e) {
                var $target = $(e.target);
                $target.addClass("hovered-player");
            });
            $li.on("mouseout", function (e) {
                var $target = $(e.target);
                $target.removeClass("hovered-player");
            });
            $li.on("click", function (e) {
                var $target = $(e.target);
                $label1.html("Selected player: " + $target.html());
                $label1.show();
                $list.toggle();
            });

            list.appendChild($li.get(0));
        }

        $list = $(list)
            .hide()
            .addClass("player-list");

        conteiner.appendChild($choose.get(0));
        conteiner.appendChild($list.get(0));
        conteiner.appendChild($label1.get(0));
        conteiner.className += " test"; // background for the div
        //conteiner.className = "test";
        el.appendChild(conteiner);
    });
}
//before adding my div, clear the options container
//$options.append($containerDiv);


//TODO: add the css for $charts and $options in a seperate file
//TODO: encapsulate the logic in 1 function
//TODO: clear the $options and $chart when the Player-Statistics button is clicked again
