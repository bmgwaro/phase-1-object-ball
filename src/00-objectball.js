function gameObject() {
  const homeData = {
    team: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Allan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },

      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },

      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },

      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },

      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  };

  const awayData = {
    team: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Aiden": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },

      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },

      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },

      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },

      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  };

  return {
    home: homeData,
    away: awayData,
  };
}
debugger;

function numPointScored(playerName) {
    const data=gameObject();
    if(data.home.players[playerName]){
        return data.home.players[playerName].points;
    }
    else if(data.away.players[playerName]){
        return data.away.players[playerName].points;
    }
    else{
        return "Player not found";
    }
}

debugger;

function shoeSize(playerName){
    if(gameObject().home.players[playerName]){
        return gameObject().home.players[playerName].shoe;
    }
    else if(gameObject().away.players[playerName]){
        return gameObject().away.players[playerName].shoe;
    }
    else{
        return "Player not found";
    }
}
debugger;

function teamColors(teamName){
    if(teamName===gameObject().home.team){
        return gameObject().home.colors;
    }
    else if(teamName===gameObject().away.team){
        return gameObject().away.colors;
    }
    else{
        return "Team not found";
    }
}
debugger;

function teamNames(team){
    const game=gameObject();
    const homeTeamName=game.home.team;
    const awayTeamName=game.away.team;
    return [homeTeamName, awayTeamName]
}
debugger;

function playerNumbers(teamName){
    const jersey=gameObject();
    let numbers=[];
    if(jersey.home.team === teamName){
        for(let player in jersey.home.players){
            numbers.push(jersey.home.players[player].number)
        }
    }
    else if(jersey.away.team === teamName){
        for(let player in jersey.away.players){
            numbers.push(jersey.away.players[player].number)
        }
    }
    return numbers;
}
debugger;

function playerStats(playerName){
    if(gameObject().home.players[playerName]){
        return gameObject().home.players[playerName]
    }
    else if(gameObject().away.players[playerName]){
        return gameObject().away.players[playerName]
    }
    else{
        return "Player not found";
    }
}
debugger;

function bigShoeRebounds(){
    const biggestShoe=gameObject();
    let biggestShoePlayer=null;
    let biggestShoeSize=0;
    Object.values(biggestShoe.home.players).forEach(player => {
        if(player.shoe > biggestShoeSize){
            biggestShoeSize=player.shoe;
            biggestShoePlayer=player;
        }
    })

    Object.values(biggestShoe.away.players).forEach(player => {
        if(player.shoe > biggestShoeSize){
            biggestShoeSize=player.shoe;
            biggestShoePlayer=player;
        }
    })

    if(biggestShoePlayer){
        return biggestShoePlayer.rebounds;
    }
}
debugger;

function mostPointsScored(){
    const gameData=gameObject();
    let mostPointsPlayer=null;
    let maxPoints=0;
    Object.values(gameData.home.players).forEach(player => {
        if(player.points > maxPoints){
            maxPoints=player.points;
            mostPointsPlayer=player;
        }
    })

    Object.values(gameData.away.players).forEach(player => {
        if(player.points > maxPoints){
            maxPoints=player.points;
            mostPointsPlayer=player;
        }
    })

    if(mostPointsPlayer){
        return mostPointsPlayer;
    }
}
debugger;