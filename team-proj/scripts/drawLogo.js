
function drawLogos(team) {
    let currentCanvas = document.getElementById('teamLogo');
    let currentContext = currentCanvas.getContext('2d');
    let teamImg = document.getElementById("teamsImg");
    let teams = [{
            team: 'New Orleans',
            row: 0,
            col: 0
        },
        {
            team: 'Golden State',
            col: 0,
            row: 2
        },
        {
            team: 'Charlotte',
            row: 0,
            col: 1
        },
        {
            team: 'Washington',
            row: 0,
            col: 3
        },
        {
            team: 'Philadelphia',
            row: 0,
            col: 4
        },
        {
            team: 'San Antonio',
            row: 0,
            col: 5
        },
        {
            team: 'Miami',
            row: 0,
            col: 6
        },
        {
            team: 'LA Lakers',
            row: 1,
            col: 1
        },
        {
            team: 'Portland',
            col: 1,
            row: 2
        },
        {
            team: 'Memphis',
            row: 1,
            col: 3
        },
        {
            team: 'Dallas',
            row: 1,
            col: 4
        },
        {
            team: 'Boston',
            row: 1,
            col: 5
        },
        {
            team: 'Milwaukee',
            row: 2,
            col: 1
        },
        {
            team: 'Indiana',
            row: 2,
            col: 2
        },
        {
            team: 'Chicago',
            row: 2,
            col: 4
        },
        {
            team: 'New York',
            row: 2,
            col: 5
        },
        {
            team: 'LA Clippers',
            col: 2,
            row: 6
        },
        {
            team: 'Cleveland',
            col: 3,
            row: 0
        },
        {
            team: 'Houston',
            row: 3,
            col: 1
        },
        {
            team: 'Toronto',
            row: 3,
            col: 6
        },
        {
            team: 'Orlando',
            row: 4,
            col: 0
        },
        {
            team: 'Minnesota',
            row: 4,
            col: 1
        },
        {
            team: 'Brooklyn',
            row: 4,
            col: 3
        },
        {
            team: 'Atlanta',
            row: 4,
            col: 4
        }
    ];
    if (team === undefined) {
        let teamNames = [];
        teams.forEach(team => {
            teamNames.push(team.team);
        })
    };
    let col = 0;
    let row = 0;
    for (let i = 0; i < teams.length; i += 1) {
        if (teams[i].team === team) {
            col = teams[i].col;
            row = teams[i].row;
            break;
        }
    }
    let rowsInImage = 5;
    let colsInImage = 7;
    let loopTicks = 0;
    let ticksPerFrame = 20;
    let drawBeginX = 0;
    let drawBeginY = 0;
    currentCanvas.width = teamImg.width / colsInImage;
    currentCanvas.height = teamImg.height / rowsInImage;

    function DrawCurrentTeamLogo(row, col) {
        currentContext.drawImage(
            teamImg,
            col * teamImg.width / colsInImage,
            (row * teamImg.height - row * 30) / rowsInImage,
            teamImg.width / colsInImage,
            teamImg.height / rowsInImage,
            drawBeginX,
            drawBeginY,
            teamImg.width / colsInImage,
            teamImg.height / rowsInImage)
    }
    DrawCurrentTeamLogo(row, col);
}