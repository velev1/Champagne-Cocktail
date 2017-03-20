
var btn = document.getElementById("btnStatisticsTeam");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

    var container = document.createElement("div");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Team statistics";
    container.appendChild(titleAside);

    var div = document.createElement("div");


    var lblTeamName = document.createElement("label");
    lblTeamName.innerHTML = "Team name:";
    div.appendChild(lblTeamName);

    var crrSelect = createSelectTeamNames();
    div.appendChild(crrSelect);
    container.appendChild(div);

    var btnCalculate = document.createElement("input");
    btnCalculate.setAttribute("type", "button");
    btnCalculate.setAttribute("class", "customButton");
    btnCalculate.setAttribute("value", "Calculate");

    container.appendChild(btnCalculate);

    el.appendChild(container);
});

function createSelectTeamNames() {

    var teams = teamData();
    var uniqTeams = {};
    teams.forEach(t => {
        uniqTeams[t.Teams] = true;
    });
    var uniqTeamsArray = Object.keys(uniqTeams).sort();
    
    var select = document.createElement("select");

     let opt = document.createElement("option");
        opt.setAttribute("value", 0);
        opt.innerHTML = "select team";
        select.appendChild(opt);

    for (let i = 0, len = uniqTeamsArray.length; i < len; i += 1) {
        opt = document.createElement("option");
        opt.setAttribute("value", (i + 1));
        opt.innerHTML = uniqTeamsArray[i];
        select.appendChild(opt);
    }

    return select;
}