 // расчет стоимсоти проектов
 const getPrice = function (hourTime, isImportantProject) {
    let fixPrice = 1500;  // Фиксированная ставка, руб/час
    
    if (isImportantProject) {
      hourTime /= 2;
      fixPrice *= 2.5;
    }
    if (hourTime > 150) {
      fixPrice -= 250;
    }
    return hourTime * fixPrice; 
  }
 
 function getProfitableProject (hourTime, profit) {
  // расчет расходов проекта
  let expensesImportantProject = getPrice(hourTime, true) - profit; // расходы срочного проекта
  let expensesProject = getPrice(hourTime, false);  // расходы обычного пректа
  
  // сравнение проектов
  let result;
  if (expensesImportantProject > expensesProject) {
    result = `Выгодней обычный проект. Потратишь на него ${expensesProject}`;
  } else {
    result = `Выгодней срочный проект. Потратишь на него ${expensesImportantProject}`;
  } 
  return result;
}
console.log(getProfitableProject(200, 50000));

/* Техническое задание
Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.
Функция принимает на вход два параметра:
- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.
Названия параметров могут быть любыми.
Внутри функции надо сравнить два проекта: срочный и обычный.
Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.
Функция getProfitableProject должна возвращать строку:
- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.*/