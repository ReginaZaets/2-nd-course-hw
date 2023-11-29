let i = 0;
while (i < 2) {
    console.log ('Привет!');
    i++;
}

let j = 1;
while (j <= 5) {
    console.log (j);
    j++;
}

for (a = 7; a <= 22; a++) {
    console.log (a);
}

const obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
};
for (let key in obj) {
    console.log (`${key} - зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

let friday= 1
for (c = friday; c <= 31; c+=7) {
    console.log (`Сегодня пятница, ${c}-е число. Необходимо подготовить отчет`)
}