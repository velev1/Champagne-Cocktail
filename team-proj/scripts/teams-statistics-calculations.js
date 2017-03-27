//add event to button calculate

// -	Win rate for the season for each team separately 
// -	Accuracy of three points 
// -	Accuracy of two points 

// -	Free throws accuracy 



var calculateTeamStatistic = (function () {

    //TODO add parameter to the function id.
    var teamStats = function (id) {
        var data = teamData();
        var filteredArrbyName = [];

        let sel = document.getElementById(id);

        let teamName = sel.options[sel.selectedIndex].value;

        for (let i = 0, len = data.length; i < len; i += 1) {
            if (data[i].teamGuestName === teamName) {
                filteredArrbyName.push(data[i]);
            }
            if (data[i].teamHostName === teamName) {
                filteredArrbyName.push(data[i]);
            }
        }

        return filteredArrbyName;
    }

    //Win rate for the season for each team separately 
    // All wins devided 

    var winRate = function (id) {
        let rate;
        //let teamMatchesContainer = [];

        let matchesOftheTeam = teamStats(id);
        let wins = 0;

        let len = matchesOftheTeam.length;
        let sel = document.getElementById(id);

        let teamName = sel.options[sel.selectedIndex].value;
        for (let i = 0; i < len; i += 1) {

            if (matchesOftheTeam[i].teamGuestName === teamName) {

                if (matchesOftheTeam[i].finalPointsGuest > matchesOftheTeam[i].finalPointsHost) {
                    wins += 1;
                }
            }

            if (matchesOftheTeam[i].teamHostName === teamName) {

                if (matchesOftheTeam[i].finalPointsHost > matchesOftheTeam[i].finalPointsGuest) {
                    wins += 1;
                }
            }
        }

        rate = (wins / matchesOftheTeam.length) * 100;
        return rate.toFixed(2);
    }

    var shotAccuracy = function (id) {
        let matchesOftheTeam = teamStats(id);

        let accuracy = [0, 0, 0];

        let finalPoint = 0;
        let allShotsAttempt = 0;

        let threePointsAttempt = 0;
        let twoPointsAttempt = 0;
        let freeTA = 0;
        let threePoints = 0;
        let twoPoints = 0;
        let freeThrows = 0;
        //TODO select by something else not by id
        let sel = document.getElementById(id);
        let teamName = sel.options[sel.selectedIndex].value;


        for (let i = 0, len = matchesOftheTeam.length; i < len; i += 1) {

            //like host
            if (matchesOftheTeam[i].teamHostName === teamName) {
                //atempts
                allShotsAttempt += matchesOftheTeam[i].fgAttHost;
                threePointsAttempt += matchesOftheTeam[i].threePointAttemptHost;
                freeTA += matchesOftheTeam[i].freeThrowsAttemptHost;
                //success
                finalPoint += matchesOftheTeam[i].finalPointsHost;
                threePoints += matchesOftheTeam[i].threePointMadeHost;
                freeThrows += matchesOftheTeam[i].freeThrowsMadeHost;
            }
            //like guest
            if (matchesOftheTeam[i].teamGuestName === teamName) {
                //atempts
                allShotsAttempt += matchesOftheTeam[i].fgAttGuest;
                threePointsAttempt += matchesOftheTeam[i].threePointAttemptGuest;
                freeTA += matchesOftheTeam[i].freeThrowsAttemptGuest;
                //success
                finalPoint += matchesOftheTeam[i].finalPointsGuest;
                threePoints += matchesOftheTeam[i].threePointMadeGuest;
                freeThrows += matchesOftheTeam[i].freeThrowsMadeGuest;
            }
        }

        twoPointsAttempt = allShotsAttempt - threePointsAttempt;
        twoPoints = (finalPoint - (threePoints * 3)) / 2;
        console.log("twoPointsAttempt " + twoPointsAttempt);
        console.log("twoPoints " + twoPoints);
        console.log("final p " + finalPoint);
        console.log("threePoints " + threePoints);


        //zero devision deffence
        if (twoPointsAttempt !== 0) {
            accuracy[0] = ((twoPoints / twoPointsAttempt) * 100).toFixed(2);
        }
        if (threePointsAttempt !== 0) {
            accuracy[1] = ((threePoints / threePointsAttempt) * 100).toFixed(2);
        }
        if (freeTA !== 0) {
            accuracy[2] = ((freeThrows / freeTA) * 100).toFixed(2);
        }


        return accuracy;
    }

    var detailedStatistics = function (id) {

        let matchesOftheTeam = teamStats(id);
        let len = matchesOftheTeam.length;
        let sel = document.getElementById(id);

        let teamName = sel.options[sel.selectedIndex].value;
        // let personalFouls = 0;
        // let assists = 0;
        // let personalFouls = 0;
        let statisticHolder = {
            personalFouls: 0,
            rebounds : 0,
            assists: 0,
            blocks: 0,
            steals: 0
        }

        for (let i = 0; i < len; i += 1) {
            //host
            if (matchesOftheTeam[i].teamHostName === teamName) {
                statisticHolder.personalFouls += matchesOftheTeam[i].personalFoulsHost;
                statisticHolder.rebounds += matchesOftheTeam[i].reboundsHost;
                statisticHolder.assists += matchesOftheTeam[i].assistsHost;
                statisticHolder.blocks += matchesOftheTeam[i].blocksHost;
                statisticHolder.steals += matchesOftheTeam[i].assistsHost;
            }
            //guest
            if (matchesOftheTeam[i].teamGuestName === teamName) {
                statisticHolder.personalFouls += matchesOftheTeam[i].personalFoulsGuest;
                statisticHolder.rebounds += matchesOftheTeam[i].reboundsGuest;
                statisticHolder.assists += matchesOftheTeam[i].assistsGuest;
                statisticHolder.blocks += matchesOftheTeam[i].blocksGuest;
                statisticHolder.steals += matchesOftheTeam[i].assistsGuest;
            }
        }


        return statisticHolder;
    }
    // -	Personal fouls for the season 
    // -	Rebounds per game
    // -	Assists per game
    // -	Blocks per game
    // -	Steals per game

    return {
        teamStats: teamStats,
        winRate: winRate,
        shotAccuracy: shotAccuracy,
        detailedStatistics: detailedStatistics
    };

})();



