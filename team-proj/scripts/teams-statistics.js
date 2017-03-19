
var btn = document.getElementById("btnStatisticsTeam");
btn.addEventListener("click", function createOptionsTeamsStatistics() {
    var el = document.getElementById("options-container");
    console.log(el.firstChild);
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
    

    var conteiner = document.createElement("div");
  
    var select = document.createElement("select");
    for (let i = 0; i < 10; i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", "team");
        opt.innerHTML = 'team';
        select.appendChild(opt);
    }
    container.appendChild(select);
    el.appendChild(container);
    var teams = getTeamData();
    console.log(teams.length);
});
