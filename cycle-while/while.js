let initialWeight = 6000; // Исходный вес в граммах
const targetWeight = 5000; // Желанный вес в граммах
let weight = 0;  // Сбрасываемый вес в граммах
let days = 0;

while (initialWeight > targetWeight) {
  weight = initialWeight / 100 * 5;
  initialWeight = initialWeight - weight;
  days ++;
}

console.log('Количество дней тренировок и диеты: ' + days);
// Программа окончена
