let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let weight = 0;  // Сбрасываемый вес в граммах
let realWeight = 0; // Реальный вес после тренировок в граммах
let days = 0;

while (initialWeight > targetWeight) {
  weight = initialWeight / 100 * 5;
  realWeight = initialWeight - weight;
  initialWeight = realWeight;
  days ++;
  // console.log(realWeight);
  
  if (realWeight < targetWeight) {
    break;  
  } 
}
    console.log('Количество дней тренировок и диеты: ' + days);
// Программа окончена
