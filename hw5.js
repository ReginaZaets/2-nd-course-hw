function min(a, b) {
    return a < b ? a : b;
}

let result = min(8, 4);
let result1 = min(6, 6);

console.log(result);
console.log(result1);

function num(n) {
    if (n % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

function square(c) {
    let result = c ** 2;
    console.log(result);
}

function getSquare(d) {
    return d ** 2;
}


function userAge() {
    let age = prompt('Сколько вам лет?');
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

function multNum(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}

function cube() {
    let num = prompt('Введите число');
    if (isNaN(Number(num))) {
        return "Переданный параметр не является числом";
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

function getAria() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius : 5,
    getAria,
    getPerimeter,
}

const circle2 = {
    radius : 8,
    getAria,
    getPerimeter,
}

circle1.getAria();
circle1.getPerimeter();
circle2.getAria();
circle2.getPerimeter();

function season(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "Неправильный месяц";
    }
}

console.log(season(prompt('Введите номер месяца')));