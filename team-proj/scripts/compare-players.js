var btn = document.getElementById("btnComparePlayers");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

    var container = document.createElement("div");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Choose players";
    container.appendChild(titleAside);

    var divAsideContainer = document.createElement("div");

    //first player dropdown menu
    var innerDivFirstPlayer=document.createElement("div");
    var lblFirstPlayerName = document.createElement("label");
    lblFirstPlayerName.innerHTML = "First Player name:";
    innerDivFirstPlayer.appendChild(lblFirstPlayerName);
    

    var crrSelectFirstPlayer = createSelectPlayerNames();
    innerDivFirstPlayer.appendChild(crrSelectFirstPlayer);
    divAsideContainer.appendChild(innerDivFirstPlayer);
    container.appendChild(divAsideContainer);

    //second player dropdown menu
    var innerDivSecondPlayer=document.createElement("div");
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

    container.appendChild(btnCalculate);

    el.appendChild(container);
});

function createSelectPlayerNames() {

    var players = getPlayerData();
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