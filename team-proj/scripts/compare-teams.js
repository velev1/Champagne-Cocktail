var btn = document.getElementById("btnCompareTeams");
btn.addEventListener("click", function createOptionsCompareTeams() {
    var el = document.getElementById("options-container");

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    clearChart();

    var container = document.createElement("div");
    container.setAttribute("class","options-container");
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "First team:";
    container.appendChild(titleAside);

    var messageFirstTeam = document.createElement("label");
    messageFirstTeam.innerHTML = "Please select a team.";
    messageFirstTeam.setAttribute("class", "hidden-message");
    messageFirstTeam.classList.add("warning");

    messageFirstTeam.setAttribute("id", "message-not-selected-first-team");
    container.appendChild(messageFirstTeam);

    var teams = teamData();

    var firstTeamSelect = createSelectTeamNames();
    firstTeamSelect.setAttribute("id", "first-team-select");
    container.appendChild(firstTeamSelect);
    
    var secondTeamSelect = createSelectTeamNames();
    secondTeamSelect.setAttribute("id", "second-team-select");
    
    var titleAside = document.createElement("h4");
    titleAside.innerHTML = "Second team:";
    container.appendChild(titleAside);

    var messageSecondTeam = document.createElement("label");
    messageSecondTeam.innerHTML = "Please select a team.";
    messageSecondTeam.setAttribute("class", "hidden-message");
    messageSecondTeam.classList.add("warning");

    messageSecondTeam.setAttribute("id", "message-not-selected-second-team");
    container.appendChild(messageSecondTeam);

    container.appendChild(secondTeamSelect);
    
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
        const labelsTeams = ["two points accuracy", "three point accuracy", "free throws accuracy", "win rate"];

        let firstSelection = firstTeamSelect.options[firstTeamSelect.selectedIndex].value;
        let secondSelection = secondTeamSelect.options[secondTeamSelect.selectedIndex].value;
        

        if (firstSelection === "not selected") {
            messageFirstTeam.classList.remove("hidden-message");
        }else if(secondSelection === "not selected") {
            messageSecondTeam.classList.remove("hidden-message");
        }else{

            if (messageFirstTeam.classList.length === 1) {
                messageFirstTeam.classList.add("hidden-message")
            }

            if (messageSecondTeam.classList.length === 1) {
                messageSecondTeam.classList.add("hidden-message")
            }

            var firstTeamName = $(firstTeamSelect).find(":selected").text();
            var secondTeamName = $(secondTeamSelect).find(":selected").text();

            var firstTeamId = "first-team-select";
            var secondTeamId = "second-team-select";

            let firstTeamWin = calculateTeamStatistic.winRate(firstTeamId);
            let secondTeamWin = calculateTeamStatistic.winRate(secondTeamId);
            let statisticValues = calculateTeamStatistic.shotAccuracy(firstTeamId);
            let statisticValues2 = calculateTeamStatistic.shotAccuracy(secondTeamId);
            statisticValues.push(firstTeamWin);
            statisticValues2.push(secondTeamWin);

            var draw = getCharts;
            var drawObj = {
                type: 'bar',
                data: {
                    labels: labelsTeams,
                    datasets: [
                        {
                            label: firstTeamName,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            data: statisticValues,
                            borderWidth: 1
                        },
                        {
                            label: secondTeamName,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            data: statisticValues2,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false 
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                max: 100, 
                                min: 0, 
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
        }
    });
});
















