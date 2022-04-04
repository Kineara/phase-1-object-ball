function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assists: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assists: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assists: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15",
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assists: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "5",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assists: "2",
          steals: "4",
          blocks: "11",
          slamDunks: "1",
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assists: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "24",
          rebounds: "4",
          assists: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10",
        },
        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assists: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5",
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assists: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assists: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12",
        },
      },
    },
  };
}

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}
//console.log(homeTeamName());

function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // gameKey == home, away
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // teamName etc
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        debugger;
      }
    }
  }
}

function numPointsScored(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    //returns home, away team objects
    //console.log(game[teamKey]);
    for (let playerKey in game[teamKey].players) {
      //returns list of players from both teams
      //console.log(playerKey);
      if (playerKey === playerName) {
        console.log(game[teamKey].players[playerKey].points)
      }
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (playerKey === playerName) {
        console.log(game[teamKey].players[playerKey].shoe)
      }
    }
  }
}

function teamColors(team) {
  const game = gameObject();

  for (let teamKey in game) {
    if (game[teamKey].teamName === team) {
      console.log(game[teamKey].colors);
    }
  }
}

function teamNames() {
  const game = gameObject();
  const names = []

  for (let teamKey in game) {
    names.push(game[teamKey].teamName)
  }

  console.log(names);
}

function playerNumbers(team) {
  const game = gameObject();
  const playerNumbers = [];

  for (let teamKey in game) {
    if (game[teamKey].teamName === team) {
      for (playerKeys in game[teamKey].players) {
        playerNumbers.push(game[teamKey].players[playerKeys].number)
      }
    }
  }

  console.log(playerNumbers);
}

function playerStats(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (playerKey === playerName) {
        console.log(game[teamKey].players[playerKey])
      }
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let bigfootRebounds = {};
  let shoeSizeTracker = 0;

  //find largest shoe size
  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (game[teamKey].players[playerKey].shoe > shoeSizeTracker) {
        shoeSizeTracker = game[teamKey].players[playerKey].shoe;
        bigfootRebounds = game[teamKey].players[playerKey].rebounds;
      }
    }
  }
  console.log(bigfootRebounds);

}

numPointsScored("Alan Anderson");
shoeSize("Alan Anderson");
teamColors("Charlotte Hornets");
teamNames();
playerNumbers("Brooklyn Nets");
playerStats("Brendan Haywood");
bigShoeRebounds();
