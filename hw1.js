let a = 10;
alert (a);
a = 20;
alert (a);

const year = 2007;
alert (year);

const jsname = 'Brandan Eich';
alert (jsname);

let num1 = 10;
let num2 =2;
alert (num1 + num2);
alert (num1 - num2);
alert (num1 * num2);
alert (num1 / num2);

let num3 = 2;
let num4 = 5
let result = num3 ** num4;
alert (result);

let i = 9;
let f = 2;
let ii = i % f;
alert (ii);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert (num);

let age = Number (prompt('Сколько вам лет?'));
alert (age);

const user = {
    name : 'Bob',
    age : 20,
    isAdmin : true,
}

user['city of residence'] = "St.Peterburg";

user.age = 25;

delete user['city of residence'];

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (info [info]);

let userName = prompt ('Введите как вас зовут?');
alert (`Привет, ${userName}!`);
