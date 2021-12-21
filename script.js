
/*month-info*/ 
const date = new Date();
const year = date.getFullYear();

const months = [
    `Январь`,
    `Февраль`,
    `Март`,
    `Апрель`,
    `Май`,
    `Июнь`,
    `Июль`,
    `Август`,
    `Сентябрь`,
    `Октябрь`,
    `Ноябрь`,
    `Декабрь`,
];

document.querySelector(`.text`).innerHTML = months[date.getMonth()] + ` ` + year;


