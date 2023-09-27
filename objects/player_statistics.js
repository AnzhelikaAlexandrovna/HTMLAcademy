const firstFootballer = {
    name: 'maradona',
    goals: 7,
    passes: 1
  };
  
  const secondFootballer = {
    name: 'messi',
    goals: 5,
    passes: 2
  };
  
  const thirdFootballer = {
    name: 'pele',
    goals: 3,
    passes: 3
  };
  
  const footballer = [firstFootballer, secondFootballer, thirdFootballer]
  
  const getStatistics = function (players) {
    for (let i = 0; i < players.length; i++) {
      players[i].coefficient = players[i].goals * 2 + players[i].passes;
      players[i].percent = Math.round(players[i].goals / (players[0].goals + players[1].goals + players[2].goals) * 100);
    };
  
    return players;
  }; 
  
  getStatistics(footballer);  
  
  /* Техническое задание
  Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.
  Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).
  Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).
  Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.
  Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.*/
  