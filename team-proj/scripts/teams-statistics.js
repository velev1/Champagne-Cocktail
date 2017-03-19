
var btn = document.getElementById("btnStatisticsTeam");
 btn.addEventListener("click", function createOptionsTeamsStatistics(){
    var el = document.getElementById("options-container");


    var select = document.createElement("select");
    for (let i = 0; i < 10; i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", "team");
        opt.innerHTML = 'team';
        select.appendChild(opt);
    }
    el.appendChild(select);
    var teams = getTeamData();
    console.log(teams.length);
 });
