let qualificationDistance = 200; // Квалификационное значение
let attempts = [120, 150, 160, 201, 203, 180, 202]; // Длины прыжков
let qualified = false; // Квалификация
let averageBest = 0; // Лучшие прыжки

for (let i = 0; i <= attempts.length - 2; i++) {
  let maxValue = attempts[i]; // Максимальная величина
  
  for (let j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] > attempts[i]) {
      maxValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = attempts[j];
      attempts[j] = swap;
      // console.log(attempts);
    }  
  }
}
console.log(attempts);
averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;

if (averageBest > qualificationDistance) {
  qualified = true;
} else {
  qualified = false;
}
/* Техническое задание
Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.
В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.
Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.
Квалификационное значение хранится в переменной qualificationDistance.
Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.
*/