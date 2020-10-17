'use scrict';
let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    income: [],
    saving: false,
};

let expensesKey = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesValue = +prompt('Во сколько обойдется?', '');

appData["expenses"][expensesKey] = expensesValue;

alert("Бюджет на день = " + appData.budget/30);