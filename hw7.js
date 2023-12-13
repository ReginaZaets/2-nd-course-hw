const str = 'js';
str = str.toUpperCase();
console.log(str);

function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startWith(str.toLowerCase()));
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function num(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(num(0, 10));

function getNum(n) {
    let arr = [];
    for (let i = 0; i < n/2; i++) {
        result.push(Math.floor(Math.random * n));
    }
    return result;
}

function numb(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

let currentDate = new Date();
console.log(currentDate);

let myDate = new Date();
let hour = myDate.getHours();
myDate.setDate(73);
console.log(myDate);

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let date = new Date();
let fullDate = "дата: " + date.getDate() + " " + months[date.getMonth()] +
" " + date.getFullYear() + " - это " + days[date.getDay()];

console.log(fullDate);

let hours = myDate.getHours(); 
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds(); 

console.log("время: " + hour + ":" + minute + ":" + second);
