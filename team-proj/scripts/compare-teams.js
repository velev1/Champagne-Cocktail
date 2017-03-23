var btn = document.getElementById("btnCompareTeams");
var $charts = $("#charts-container");
var $options = $("#options-container");
var charts = document.getElementById("charts-container");

btn.addEventListener("click", function () {
    var el = document.getElementById("options-container");
    //clear the options container
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    //clear the chart container
    clearChart();

    var $container = $("<div>");
    var teams = teamData();

    var $firstLabel = $("<h4>").text("First team: ");
    var $secondLabel = $("<h4>").text("Second team: ");
    var $firstMenu = $("<select>");
    var $secondMenu = $("<select>");

    // Calculate the data
    // var $calculate = $("<button>")
    //     .text("Calculate")
    //     .addClass("customButton")
    //     .css("display", "block") // TODO: add the display block in the css file
    //     .on("click", function () {
    //         var firstTeamName = $firstMenu.find(":selected").text();
    //         var firstTeamDataObj = calculatePlayerData(firstTeamName);
    //         console.log(firstTeamDataObj);

    //     });

    //get all unique names
    var uniqTeamNamesObj = {};
    teams.forEach(t => {
        uniqTeamNamesObj[t.teamGuestName] = true;
        uniqTeamNamesObj[t.teamHostName] = true;
    });
    var uniqTeamNamesArray = Object.keys(uniqTeamNamesObj).sort();

    //set the team names in both menus
    $firstMenu.append($("<option>").text("Select Team"));
    $secondMenu.append($("<option>").text("Select Team"));
    uniqTeamNamesArray.forEach(name => {
        var $opt1 = $("<option>");
        var $opt2 = $("<option>");
        $opt1.text(name);
        $opt2.text(name);
        $firstMenu.append($opt1);
        $secondMenu.append($opt2);
    });

    $options.append($firstLabel);
    $options.append($firstMenu);
    $options.append($secondLabel);
    $options.append($secondMenu);
    $options.append($calculate);
});

// Calculate the data
// function calculateTeamData(teamName) {
//     var teamMatches = teams.filter(t => {
//         if (t.teamGuestName === teamName || t.teamHostName === teamName) {
//             return t;
//         }
//     });

//     var dataObj = {
//         threePointsAccuracy: checkData(getStat(threePointsMade)),
        
//     };

//     function checkData(data) {
//         if (Number.isNaN(data)) {
//             return "No such statistic";
//         }
//         return data.toFixed(2);
//     }

//     function getStat(stat) {
//         var result = 0;
//         teamMatches.forEach(t => {
//             if (teamName === t.teamHostName) {
//                 result += t[stat + "Host"];
//             }
//             else if (teamName === t.teamGuestName) {
//                 result += t[stat + "Guest"];
//             }
//         });
//         return result;
//     }
//     return dataObj;
// }








// KRISI

// var compareTeamsButton = document.getElementById("btnCompareTeams");

// compareTeamsButton.onclick = 
//     function ShowCompareTeamsOptions(){
//         //Adding a div element to the aside element when clicking Compare teams button
//         var div = document.createElement('div');
//         var divElement;
//         var docFragment = document.createDocumentFragment();

//         divElement = div.cloneNode(true);
//         divElement.className += " test"; //this is for styling; check options.css
//         divElement.innerHTML = "Choose teams:";
//         docFragment.appendChild(divElement);

//         var aside = document.getElementById("options-container");
//         aside.appendChild(docFragment);
//     }