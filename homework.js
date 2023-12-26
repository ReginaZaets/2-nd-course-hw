function season() {
    let month = Number(prompt('Введите номер месяца'));
    if (month >= 3 && month <= 5) {
        return alert('Весна');
    } else if (month >= 6 && month <= 8) {
        return alert('Лето');
    } else if (month >= 9 && month <= 11) {
        return alert('Осень');
    } else if (month == 12 || month <= 2) {
        return alert('Зима');
    } else {
        return alert('Неправильный месяц');
    }
}
const game2 = () => {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let answerOne = prompt('Чему равнялся первый элемент массива?');
    let answerTwo = prompt('Чему равнялся последний элемент массива?');
    if (answerOne.toLowerCase() === fruits[0].toLowerCase() && answerTwo.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert('Поздравляем! Вы угадали оба слова!');
    } else if (answerOne.toLowerCase() === fruits[0].toLowerCase() || answerTwo.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
        } else {
        alert('Вы не угадали ни одного слова');
    }
}