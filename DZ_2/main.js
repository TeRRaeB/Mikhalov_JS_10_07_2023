/*
Напишіть скрипт, який рахує кількість секунд за годину.
    Запросити у користувача кількість годин
    Порахувати скільки секунд у цій кількості годин
    Записати обчислене значення у змінну
    Вивести цю змінну користувачу в alert
*/

let hours = parseInt(prompt("Введите кол-во часов", 5));
let second = hours * 3600;
alert(`Получается ${second} секунд.`);