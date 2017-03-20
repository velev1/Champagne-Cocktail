//Test

var players = getPlayerData();

var $containerDiv = $("<div>").addClass("div-container");
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");

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

//before adding my div, clear the options container
//$options.append($containerDiv);


//TODO: add the css for $charts and $options in a seperate file
//TODO: encapsulate the logic in 1 function
//TODO: clear the $options and $chart when the Player-Statistics button is clicked again
