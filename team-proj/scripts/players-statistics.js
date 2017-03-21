//Test

var players = getPlayerData();

var $containerDiv = $("<div>").addClass("div-container");
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");
var charts = document.getElementById("charts-container");

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
        .addClass("centered")
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


            //testing the draw function - it should delete any graphic before it draws
            //make new canvas and delete the old one everytime a li is clicked and get rid of the ctx from the IIFE
            // while (charts.firstChild) {
            //     charts.removeChild(charts.firstChild);
            // }

            var dataArray = calculatePlayerData($target.html());
            var labelArray = ["Three point accuracy", "Two point accuracy", "Free throw accuracy"];
            var draw = getCharts;
            var drawObj = getChartsObj;
            drawObj.data.labels = labelArray;
            drawObj.data.datasets[0].data = dataArray;

            //show the graph
            draw(drawObj);
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
    el.appendChild(conteiner);
});

function calculatePlayerData(playerName) {
    var player = players.find(p => p.PlayerFullName === playerName);

    var dataObj = {
        threePointsAccuracy: checkData((player.ThreePointFieldGoalsMade / player.ThreePointFieldGoalsAttempted) * 100),
        twoPointsAccuracy: checkData((player.FieldGoalsMade - player.ThreePointFieldGoalsMade) /
            (player.FieldGoalsAttempted - player.ThreePointFieldGoalsAttempted) * 100),
        freeThrowsAccuracy: checkData((player.FreeThrowsMade / player.FreeThrowsAttempted) * 100),
        personalFouls: checkData(player.PersonalFouls),
        rebounds: checkData(player.TotalRebounds),
        assists: checkData(player.Assists),
        blocks: checkData(player.Blocks),
        steals: checkData(player.Steals)
    };

    var resultArray = [];
    for (let i in dataObj) {
        resultArray.push(dataObj[i]);
    }
    resultArray = resultArray.slice(0, 3); // choose only the percent data for the graph

    function checkData(data) {
        if (Number.isNaN(data)) {
            return "No such statistic";
        }
        return data;
    }

    // send to canvas or write canvas below func
    return resultArray;
}


//TODO: delete the canvas before adding mine
//TODO: remove animation from chartsjs
//TODO: research what a string in the dataArray does
//TODO: fix the colors of my graph
//TODO: encapsulate the logic in 1 function
