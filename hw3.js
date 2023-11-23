let password = 'cat';
let passwordUser = prompt ('Введите пароль');

if (passwordUser === password) {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно');
}

let c = 0;
if (c > 0 && c < 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

let d = 120;
let e = 20;
if (d > 100 || e > 100) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

let a = '2';
let b = '3';
alert (Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log ('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log ('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log ('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log ('осень');
        break;
    default:
        console.log ('такого месяца не существует');
        break;
}
