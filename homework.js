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
