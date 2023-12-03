let numbers = [1, 5, 4, 10, 0, 3];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if(numbers[i] === 10) {
        break;
    }
}

let numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

let num = [1, 3, 5, 10, 20];
let arrNum = num.join(' ');
console.log(arrNum);

let arr = [];
for (let d = 0; d < 3; d++) {
    let inArr = [];
    for (let f = 0; f < 3; f++) {
        inArr.push(1);
    }
    arr.push(inArr);
}
console.log(arr); 

let nums = [1, 1, 1];
nums.push(2, 2, 2);
console.log(nums);

let a = [9, 8, 7, 'a', 6, 5];
a.sort();
a.pop();
console.log(a);

const ar = [9, 8, 7, 6, 5];
const user = Number(prompt('Угадай число'));
if (ar.includes(user)) {
    alert ('Угадал');
} else {
    alert ('Не угадал');
}

const string = 'abcdef';
const str = string.split('').reverse().join('');
console.log(str);

const pro = [
    [1, 2, 3],
    [4, 5, 6],
]
const arrPro = pro.flat();
console.log(arrPro);

const pr = [2, 3, 5, 6, 7, 10];
for (let h = 0; h < pr.length - 1; h++) {
console.log(pr[h] + pr[h + 1]);
}

function square(numSquare) {
    return numSquare.map((a) => a * 2);
}

function getLengthWords(string) {
    return string.map((words) => words.length);
}

function filterPositive(array) {
    let result = [];
    for (let r = 0; r < array.length; r++) {
        if (array[r] < 0) {
            result.push(array[r]);
        }
    }
    return result;
}