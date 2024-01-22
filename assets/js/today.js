const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let day=document.getElementById("date");

let monday = document.getElementById("Monday");
let tuesday = document.getElementById("Tuesday");
let wednesday = document.getElementById("Wednesday");
let thursday = document.getElementById("Thursday");
let friday = document.getElementById("Friday");

let mondayd = document.getElementById("mondayd");
let tuesdayd = document.getElementById("tuesdayd");
let wednesdayd = document.getElementById("wednesdayd");
let thursdayd = document.getElementById("thursdayd");
let fridayd = document.getElementById("fridayd");

function start(){
    let date=new Date()
    daynum=date.getDay();
    day.innerHTML = dayNames[date.getDay()];
    switch (daynum) {
        case 1:
            monday.style.background = ("linear-gradient(#1e0000 0%, #7e4046 54%), var(--bs-body-color)");
            mondayd.style.background = ("#391214");
            break;
        case 2:
            tuesday.style.background = ("linear-gradient(#1e0000 0%, #7e4046 54%), var(--bs-body-color)");
            tuesdayd.style.background = ("#391214");
            break;
        case 3:
            wednesday.style.background = ("linear-gradient(#1e0000 0%, #7e4046 54%), var(--bs-body-color)");
            wednesdayd.style.background = ("#391214");
            break;
        case 4:
            thursday.style.background = ("linear-gradient(#1e0000 0%, #7e4046 54%), var(--bs-body-color)");
            thursdayd.style.background = ("#391214");
            break;
        case 5:
            friday.style.background = ("linear-gradient(#1e0000 0%, #7e4046 54%), var(--bs-body-color)");
            fridayd.style.background = ("#391214");
            break;
    }
}
start();