const gameRuleset = {
    diceNumber: 1,
    maxAttempts: 1
  };
  
  const firstCat = {
    name: 'Кекс',
    points: 0
  };
  
  const secondCat = {
    name: 'Рудольф',
    points: 0
  };
  
  const thirdCat = {
    name: 'Рокки',
    points: 0
  };
  
  let cats = [firstCat, secondCat, thirdCat];
  
  // Бросаем кости
  
  const runGame = function (ruleset, players) {
    for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
      for (let i = 0; i < players.length; i++) {
        const throwResult = keks.throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);
        players[i].points += throwResult;
        console.log(players[i].name + ' выбросил ' + players[i].points);
      }
    }
    return players;
  };
  
  // Выбираем победителя
  
  const getWinners = function (players) {
    let winners = [];
    let max = players[0];
  
    for (let i = 0; i < players.length; i++) {
      const currentPlayer = players[i];
      if (currentPlayer.points > max.points) {
        max = currentPlayer;
        winners = [max];
      } else {
        if (currentPlayer.points === max.points) {
          winners.push(currentPlayer);
        }
      }
    }
  
    return winners;
  };
  
  // Если победитель не один а несколько или все
  
  const printWinners = function (players, winners) {
    if (players.length === winners.length) {
      console.log('Все коты как на подбор!');
      return;
    }
  
    /*let message = 'Победил';    
    
    if (winners.length > 1) {       
        message = message + 'и';     
    }
    message += ' ';*/
    
    let message = `Победил${winners.length > 1 ? 'и' : ''} `;       
    // Упрощенное написание условия выше (?-if, :-else),
    // Вся строка оборачивается в `апостроф`, а не в 'кавычки' 
  
    message += ' с количеством очков: ' + winners[0].points;
  
    console.log(message);
  };
  
  cats = runGame(gameRuleset, cats);
  const tops = getWinners(cats);
  printWinners(cats, tops);
  