const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let day=document.getElementById("date");

function start(){
    let date=new Date()
    day.innerHTML = dayNames[date.getDay()];
}
start();