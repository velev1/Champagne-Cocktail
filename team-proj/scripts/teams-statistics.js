
var btn = document.getElementById("btnStatisticsTeam");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    clearChart();

    var container = document.createElement("div");
    container.setAttribute("class", "options-container");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Team statistics";
    container.appendChild(titleAside);
    var message = document.createElement("label");
    message.innerHTML = "Please select a team.";
    message.setAttribute("class", "hidden-message");
    message.classList.add("warning");

    message.setAttribute("id", "message-not-selected-team");
    container.appendChild(message);

    var div = document.createElement("div");
    var lblTeamName = document.createElement("label");
    lblTeamName.innerHTML = "Team name:";
    div.appendChild(lblTeamName);

    var selectTeams = createSelectTeamNames();
    selectTeams.setAttribute("id", "select-team-names");
    div.appendChild(selectTeams);
    container.appendChild(div);

    var btnCalculate = document.createElement("input");
    btnCalculate.setAttribute("type", "button");
    btnCalculate.setAttribute("class", "customButtonOptions");
    btnCalculate.setAttribute("value", "Calculate");
    btnCalculate.setAttribute("id", "btnCalculateTeamStats");

    var btnContainer = document.createElement("div");
    btnContainer.appendChild(btnCalculate);

    container.appendChild(btnContainer);
    // container.appendChild(logoCanvas);

    el.appendChild(container);
    btnCalculate.addEventListener("click", function calc() {
        var labelsTeams = ["two points accuracy", "three point accuracy", "free throws accuracy", "win rate"];

        var id = "select-team-names";

        var win = calculateTeamStatistic.winRate(id);
        var statisticValues = calculateTeamStatistic.shotAccuracy(id);
        statisticValues.push(win);
        var teamName = selectTeams.options[selectTeams.selectedIndex].value;

        if (teamName === "not selected") {
            clearChart();
            $("#teamLogo").remove();
            $("#lebelHolder").remove();
            message.classList.remove("hidden-message");
        } else {

            if (message.classList.length === 1) {
                message.classList.add("hidden-message");
            }

            if (document.contains(document.getElementById("teamLogo"))) {
                document.getElementById("teamLogo").remove();
            }

            var logoCanvas = document.createElement('canvas');
            logoCanvas.setAttribute('id', 'teamLogo');
            container.appendChild(logoCanvas);
            drawChart(labelsTeams, statisticValues);
            drawLogos(teamName);

            var stats = calculateTeamStatistic.detailedStatistics(id);

            //div - flex
            //div1  div2
            //lebels div1 
            //lebels div2 (values)
            setStatisticLabels(id);

        }
    });

    function setStatisticLabels(id) {

        if (document.contains(document.getElementById("lebelHolder"))) {
            document.getElementById("lebelHolder").remove();
        }

        var divStatisticsText = document.createElement("div");
        divStatisticsText.setAttribute("id", "lebelHolder");

        
        var leftDiv = document.createElement("div");
        var lblPersonalFoulsText = document.createElement("label");
        lblPersonalFoulsText.innerHTML = "Personal fouls: ";
        var lblReboundsText = document.createElement("label");
        lblReboundsText.innerHTML = "Rebounds: ";
        var lblAssistsText = document.createElement("label");
        lblAssistsText.innerHTML = "Assists: ";
        var lblBlocksText = document.createElement("label");
        lblBlocksText.innerHTML = "Blocks: ";
        var lblStealsText = document.createElement("label");
        lblStealsText.innerHTML = "Steals: ";

        leftDiv.appendChild(lblPersonalFoulsText);
        leftDiv.appendChild(lblReboundsText);
        leftDiv.appendChild(lblAssistsText);
        leftDiv.appendChild(lblBlocksText);
        leftDiv.appendChild(lblStealsText);

        

        divStatisticsText.appendChild(leftDiv);

        var rightDiv = document.createElement("div");
         var lblPersonalFoulsValue = document.createElement("label");
        lblPersonalFoulsValue.innerHTML = calculateTeamStatistic.detailedStatistics(id).personalFouls;
        var lblReboundsValue = document.createElement("label");
        lblReboundsValue.innerHTML = calculateTeamStatistic.detailedStatistics(id).rebounds;
        var lblAssistsValue = document.createElement("label");
        lblAssistsValue.innerHTML = calculateTeamStatistic.detailedStatistics(id).assists;
        var lblBlocksValue = document.createElement("label");
        lblBlocksValue.innerHTML = calculateTeamStatistic.detailedStatistics(id).blocks;
        var lblStealsValue = document.createElement("label");
        lblStealsValue.innerHTML = calculateTeamStatistic.detailedStatistics(id).steals;

        rightDiv.appendChild(lblPersonalFoulsValue);
        rightDiv.appendChild(lblReboundsValue);
        rightDiv.appendChild(lblAssistsValue);
        rightDiv.appendChild(lblBlocksValue);
        rightDiv.appendChild(lblStealsValue);
        
        divStatisticsText.appendChild(rightDiv);
        container.appendChild(divStatisticsText);
        


    }
});

function createSelectTeamNames() {
    var teams = teamData();
    var uniqTeams = {};

    teams.forEach(t => {
        uniqTeams[t.teamHostName] = true;
        uniqTeams[t.teamGuestName] = true;
    });

    var uniqTeamsArray = Object.keys(uniqTeams).sort();

    var select = document.createElement("select");
    var opt = document.createElement("option");
    opt.setAttribute("value", "not selected");
    opt.innerHTML = "select team";
    select.appendChild(opt);

    for (var i = 0, len = uniqTeamsArray.length; i < len; i += 1) {
        opt = document.createElement("option");
        opt.setAttribute("value", uniqTeamsArray[i]);
        opt.innerHTML = uniqTeamsArray[i];
        select.appendChild(opt);
    }

    return select;
}

