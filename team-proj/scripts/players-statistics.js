//Test

var players = getPlayerData();

var $containerDiv = $("<div>");
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");
var charts = document.getElementById("charts-container");

var btn = document.getElementById("btnStatisticsPleyer");

btn.addEventListener("click", function createOptionsPlayerStatistics() {
    var el = document.getElementById("options-container");
    //clear the options container
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    //clear the chart container
    clearChart();
    $charts.append('<canvas id="myChart" style:"width:100% !important; height:100% !important"> </canvas>');

    var conteiner = document.createElement("div");
    //conteiner.className = "div-container";
    //appends :
    var uniqNamesObject = {};
    players.forEach(p => {
        uniqNamesObject[p.PlayerFullName] = true;
    });

    var uniqNamesArray = Object.keys(uniqNamesObject).sort();

    var list = document.createElement("ul");


    var $choose = $("<button>")
        .addClass("customButtonOptions")
        .addClass("centered")
        .html("Choose a player")
        .on("click", function (e) {
            $img.toggle();
            $list.toggle();
            $label1.toggle();
            $p.toggle();
        });
    var $label1 = $("<h4>");
    var $p = $("<p>");

    var $img = $("<img>").attr("id", "playerImage");
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
            $p.show();
            $img.show();
            $list.toggle();

            //img details
            $img.attr("src", "./styles/imgs/Players/" + $target.html() + ".png");

            //graph data
            var dataArray = calculatePlayerData($target.html()).resultArray;
            var values = calculatePlayerData($target.html()).dataObj;
            var labelArray = ["Three point accuracy", "Two point accuracy", "Free throw accuracy"];
            var draw = getCharts;
            var drawObj = getChartsObj;
            drawObj.data.labels = labelArray;
            drawObj.data.datasets[0].data = dataArray;

            //hide old graph
            clearChart();
            $charts.append('<canvas id="myChart" style:"width:100% !important; height:100% !important"> </canvas>');

            //draw new one
            draw(drawObj);

            //adding the non-percentage data to the paragraph
            addNonPercentageValues($p, values);
            
            function addNonPercentageValues(el, dataObj) {
                el.text("Total fouls for the season: " + dataObj.personalFouls + "\n" +
                    "Total rebounds for the season: " + dataObj.rebounds + "\n" +
                    "Total assists for the season: " + dataObj.assists + "\n" +
                    "Total blocks for the season: " + dataObj.blocks + "\n" +
                    "Total steals for the season: " + dataObj.steals);
                var elText = el.text();
                el.html(elText.replace(/\n/g, '<br />'));
            }

        });

        list.appendChild($li.get(0));
    }

    $list = $(list)
        .hide()
        .addClass("player-list");


    conteiner.appendChild($choose.get(0));
    conteiner.appendChild($list.get(0));
    conteiner.appendChild($label1.get(0));
    conteiner.appendChild($p.get(0));
    conteiner.appendChild($img.get(0));
    conteiner.className += " options-container"; // background for the div
    el.appendChild(conteiner);
});

function calculatePlayerData(playerName) {
    var player = players.find(p => p.PlayerFullName === playerName);

    var dataObj = {
        threePointsAccuracy: checkData((player.ThreePointFieldGoalsMade / player.ThreePointFieldGoalsAttempted) * 100),
        twoPointsAccuracy: checkData((player.FieldGoalsMade - player.ThreePointFieldGoalsMade) /
            (player.FieldGoalsAttempted - player.ThreePointFieldGoalsAttempted) * 100),
        freeThrowsAccuracy: checkData((player.FreeThrowsMade / player.FreeThrowsAttempted) * 100),
        personalFouls: player.PersonalFouls,
        rebounds: player.TotalRebounds,
        assists: player.Assists,
        blocks: player.Blocks,
        steals: player.Steals
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
        return data.toFixed(2);
    }

    return {
        resultArray: resultArray,
        dataObj: dataObj
    };
}


//TODO: make the $list scroll top on button click
//TODO: encapsulate the logic in 1 function
//TODO: add a clearChart() on the compare players button
//TODO: make a function from the creating of the non-percentage data
