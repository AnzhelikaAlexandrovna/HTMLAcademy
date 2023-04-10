const expectedUsers = 1000;

const usersByDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);

// Суммируем посещаемость
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}

// Рассчитываем среднее значение посещаемости
const averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

// Сортируем массив
for (let i = 0; i < usersByDay.length - 1; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      usersByDay[j] = usersByDay[i];
      usersByDay[i] = minValue;
    }
  }
}

// Рассчитываем медиану
let median;
if (usersByDay.length % 2 !== 0) {
  const medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
} else {
  const leftIndex = usersByDay.length / 2 - 1;
  const rightIndex = usersByDay.length / 2;
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}

console.log('Медианная посещаемость: ' + median);

if (median / averageUsers < 0.9) {
  console.log('Есть подозрения в подтасовках!');  
} else {
    console.log('Подозрений в подтасовках нет!');  
}
// Программа окончена