var players = getPlayerData();

var $label1 = $("<h4>");
var $label2 = $("<h4>");
var $p1 = $("<p>");
var $p2 = $("<p>");

var btn = document.getElementById("btnComparePlayers");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

    clearChart();

    var container = document.createElement("div");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Choose players";
    container.appendChild(titleAside);

    var divAsideContainer = document.createElement("div");

    //first player dropdown menu
    var innerDivFirstPlayer = document.createElement("div");
    var lblFirstPlayerName = document.createElement("label");
    lblFirstPlayerName.innerHTML = "First Player name:";
    innerDivFirstPlayer.appendChild(lblFirstPlayerName);


    var crrSelectFirstPlayer = createSelectPlayerNames();
    innerDivFirstPlayer.appendChild(crrSelectFirstPlayer);
    divAsideContainer.appendChild(innerDivFirstPlayer);
    container.appendChild(divAsideContainer);

    //second player dropdown menu
    var innerDivSecondPlayer = document.createElement("div");
    var lblSecondPlayerName = document.createElement("label");
    lblSecondPlayerName.innerHTML = "Second Player name:";
    innerDivSecondPlayer.appendChild(lblSecondPlayerName);

    divAsideContainer.appendChild(innerDivSecondPlayer);
    var crrSelectSecondPlayer = createSelectPlayerNames();
    innerDivSecondPlayer.appendChild(crrSelectSecondPlayer);
    container.appendChild(divAsideContainer);

    var btnCalculate = document.createElement("input");
    btnCalculate.setAttribute("type", "button");
    btnCalculate.setAttribute("class", "customButton");
    btnCalculate.setAttribute("value", "Calculate");


    //Ivelin
    btnCalculate.addEventListener("click", function () {
        var firstPlayerName = $(crrSelectFirstPlayer).find(":selected").text();
        var secondPlayerName = $(crrSelectSecondPlayer).find(":selected").text();

        var firstPlayerDataArray = calculatePlayerData(firstPlayerName).resultArray;
        var firstPlayerDataObj = calculatePlayerData(firstPlayerName).dataObj;

        var secondPlayerDataArray = calculatePlayerData(secondPlayerName).resultArray;
        var secondPlayerDataObj = calculatePlayerData(secondPlayerName).dataObj;

        var labelArray = ["Three point accuracy", "Two point accuracy", "Free throw accuracy"];

        var draw = getCharts;
        var drawObj = {
            type: 'bar',
            data: {
                labels: labelArray,
                datasets: [
                    {
                        label: firstPlayerName,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        data: firstPlayerDataArray,
                        borderWidth: 1
                    },
                    {
                        label: secondPlayerName,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        data: secondPlayerDataArray,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: false //added by me
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 100, //added by men
                            min: 0, //added by me
                            beginAtZero: true
                        }
                    }]
                }
            }
        };

        //clear and draw
        clearChart();
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, drawObj);

        //add the non-percentage values to the container
        $label1.text(firstPlayerName);
        $label2.text(secondPlayerName);
        addNonPercentageValues($p1, firstPlayerDataObj);
        addNonPercentageValues($p2, secondPlayerDataObj);

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
    container.appendChild($label1.get(0));
    container.appendChild($p1.get(0));
    container.appendChild($label2.get(0));
    container.appendChild($p2.get(0));
    container.appendChild(btnCalculate);

    //clear the labels and paragraphs if the button is clicked again
    clearText($label1);
    clearText($label2);
    clearText($p1);
    clearText($p2);

    el.appendChild(container);
});

function createSelectPlayerNames() {

    var uniqPlayers = {};
    players.forEach(p => {
        uniqPlayers[p.PlayerFullName] = true;
    });
    var uniqPlayersArray = Object.keys(uniqPlayers).sort();

    var select = document.createElement("select");

    for (let i = 0, len = uniqPlayersArray.length; i < len; i += 1) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);
        opt.innerHTML = uniqPlayersArray[i];
        select.appendChild(opt);
    }

    return select;
}

function clearText(el) {
    if (el.text() !== "") {
        el.text("");
    }
}