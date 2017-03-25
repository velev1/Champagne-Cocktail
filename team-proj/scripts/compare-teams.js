var btn = document.getElementById("btnCompareTeams");

btn.addEventListener("click", function createOptionsCompareTeams() {
    var el = document.getElementById("options-container");
    //clear the options container
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    //clear the chart container
    var charts = document.getElementById("charts-container");
    clearChart();

    var container = document.createElement("div");
    container.setAttribute("class","options-container");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "First team:";
    container.appendChild(titleAside);

    var teams = teamData();

    var firstTeamSelect = createSelectTeamNames();
    firstTeamSelect.setAttribute("id", "first-team-select");
    container.appendChild(firstTeamSelect);
    

    var secondTeamSelect = createSelectTeamNames();
    secondTeamSelect.setAttribute("id", "second-team-select");
    
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Second team:";
    container.appendChild(titleAside);
    container.appendChild(secondTeamSelect);

    

    el.appendChild(container);

 
});









