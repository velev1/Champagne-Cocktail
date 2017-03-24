
var btn = document.getElementById("btnStatisticsTeam");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    clearChart();
    
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
    
    let logoCanvas=document.createElement('canvas');
    logoCanvas.setAttribute('id','teamLogo');
    container.appendChild(logoCanvas);
    
    var btnCalculate = document.createElement("input");
    btnCalculate.setAttribute("type", "button");
    btnCalculate.setAttribute("class", "customButton");
    btnCalculate.setAttribute("value", "Calculate");
    btnCalculate.setAttribute("id", "btnCalculateTeamStats");


    container.appendChild(btnCalculate);
    container.appendChild(logoCanvas);


    el.appendChild(container);
    btnCalculate.addEventListener("click", function calc() {
        const labelsTeams = ["two points accuracy","three point accuracy","free throws accuracy","win rate"];
        //var statisticValues = [];
        let win = calculateTeamStatistic.winRate();
        
        let statisticValues = calculateTeamStatistic.shotAccuracy();
        statisticValues.push(win);
        
        console.log(statisticValues);
        drawChart(labelsTeams, statisticValues);
        DrawLogos('Washington');
        // console.log(calculateTeamStatistic.winRate());
    });

    // var bla = calculateTeamStatistic.teamStats();
    // console.log(bla);
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

    select.setAttribute("id", "select-team-names")

    let opt = document.createElement("option");
    opt.setAttribute("value", 0);
    opt.innerHTML = "select team";
    select.appendChild(opt);

    for (let i = 0, len = uniqTeamsArray.length; i < len; i += 1) {
        opt = document.createElement("option");
        opt.setAttribute("value", uniqTeamsArray[i]);
        opt.innerHTML = uniqTeamsArray[i];
        select.appendChild(opt);
    }

    return select;
}
