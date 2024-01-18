Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

/*(async () => {
  let response = await fetch("/assets/js/timetable.json");
  let json = await response.json();  
})()
*/

json = {
  "red": {
      "monday":{
          "nachalo": "",
          "corp": "",
          "p1": "",
          "p1c": "",
          "p2": "",
          "p2c": "",
          "p3": "",
          "p3c": "",
          "p4": "",
          "p4c": "",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "tuesday":{
          "nachalo": "08:30",
          "corp": "Уч/Л/Хт",
          "p1": "Математика(Лек)",
          "p1c": "Л-308",
          "p2": "Теория механизмов и машин (лаб.пр)",
          "p2c": "Уч-341",
          "p3": "Математика (Пр)",
          "p3c": "Уч-325",
          "p4": "Физкультура",
          "p4c": "С-зал",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "wednesday":{
          "nachalo": "10:15",
          "corp": "Технологический",
          "p1": "",
          "p1c": "",
          "p2": "Материаловедение (лек)",
          "p2c": "Т-204",
          "p3": "Материаловедение (лек)",
          "p3c": "Т-204",
          "p4": "Материаловедение (лаб)",
          "p4c": "Т-204",
          "p5": "ТКМ (лаб)",
          "p5c": "Т-215",
          "p6": "",
          "p6c": ""
      },
      "thursday":{
          "nachalo": "10:15",
          "corp": "Полигон",
          "p1": "",
          "p1c": "",
          "p2": "Констр. тракторов и а/м (лек)",
          "p2c": "Полигон",
          "p3": "Констр. тракторов и а/м (пр) ",
          "p3c": "Полигон",
          "p4": "Констр. тракторов и а/м (лаб) ",
          "p4c": "Полигон",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "friday":{
          "nachalo": "10:15",
          "corp": "Уч/Л/Хт",
          "p1": "",
          "p1c": "",
          "p2": "Экология (лек)",
          "p2c": "Хт-112",
          "p3": "Психология (пр)",
          "p3c": "Л-303",
          "p4": "Технолог. машин.(лек)",
          "p4c": "Уч-103",
          "p5": "Технолог. машин.(пр)",
          "p5c": "Уч-103",
          "p6": "",
          "p6c": ""
      }
  },
  "blue": {
      "monday":{
          "nachalo": "",
          "corp": "",
          "p1": "",
          "p1c": "",
          "p2": "",
          "p2c": "",
          "p3": "",
          "p3c": "",
          "p4": "",
          "p4c": "",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "tuesday":{
          "nachalo": "08:30",
          "corp": "Уч/Л/Хт",
          "p1": "Теор. механизмов и машин (лек)",
          "p1c": "Л-308",
          "p2": "Теор. механ. и маш. (лаб.пр)",
          "p2c": "Уч-341",
          "p3": "Математика (пр)",
          "p3c": "Уч-325",
          "p4": "Физкультура",
          "p4c": "С-Зал",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "wednesday":{
          "nachalo": "12:15",
          "corp": "Технологический",
          "p1": "",
          "p1c": "",
          "p2": "",
          "p2c": "",
          "p3": "ТКМ (лек)",
          "p3c": "Т-204",
          "p4": "Материаловедение (лаб)",
          "p4c": "Т-204",
          "p5": "ТКМ (лаб)",
          "p5c": "Т-215",
          "p6": "",
          "p6c": ""
      },
      "thursday":{
          "nachalo": "10:15",
          "corp": "Центральный",
          "p1": "",
          "p1c": "",
          "p2": "Сопротивление материалов (лек)",
          "p2c": "Ц-342",
          "p3": "Сопротивление материалов (лек)",
          "p3c": "Ц-342",
          "p4": "Сопротивление материалов (пр)",
          "p4c": "Ц-342",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      },
      "friday":{
          "nachalo": "10:15",
          "corp": "Уч/Л/Хт",
          "p1": "",
          "p1c": "",
          "p2": "Психология (лек)",
          "p2c": "Л-308",
          "p3": "Экология (лаб)",
          "p3c": "Хт-200/5",
          "p4": "Технолог. машин.(лек)",
          "p4c": "Уч-103",
          "p5": "",
          "p5c": "",
          "p6": "",
          "p6c": ""
      }
  }
}

let p11 = document.getElementById("p11");
let p12 = document.getElementById("p12");
let p13 = document.getElementById("p13");
let p14 = document.getElementById("p14");
let p15 = document.getElementById("p15");
let p16 = document.getElementById("p16");

let p21 = document.getElementById("p21");
let p22 = document.getElementById("p22");
let p23 = document.getElementById("p23");
let p24 = document.getElementById("p24");
let p25 = document.getElementById("p25");
let p26 = document.getElementById("p26");

let p31 = document.getElementById("p31");
let p32 = document.getElementById("p32");
let p33 = document.getElementById("p33");
let p34 = document.getElementById("p34");
let p35 = document.getElementById("p35");
let p36 = document.getElementById("p36");

let p41 = document.getElementById("p41");
let p42 = document.getElementById("p42");
let p43 = document.getElementById("p43");
let p44 = document.getElementById("p44");
let p45 = document.getElementById("p45");
let p46 = document.getElementById("p46");

let p51 = document.getElementById("p51");
let p52 = document.getElementById("p52");
let p53 = document.getElementById("p53");
let p54 = document.getElementById("p54");
let p55 = document.getElementById("p55");
let p56 = document.getElementById("p56");

let k11 = document.getElementById("k11");
let k12 = document.getElementById("k12");
let k13 = document.getElementById("k13");
let k14 = document.getElementById("k14");
let k15 = document.getElementById("k15");
let k16 = document.getElementById("k16");

let k21 = document.getElementById("k21");
let k22 = document.getElementById("k22");
let k23 = document.getElementById("k23");
let k24 = document.getElementById("k24");
let k25 = document.getElementById("k25");
let k26 = document.getElementById("k26");

let k31 = document.getElementById("k31");
let k32 = document.getElementById("k32");
let k33 = document.getElementById("k33");
let k34 = document.getElementById("k34");
let k35 = document.getElementById("k35");
let k36 = document.getElementById("k36");

let k41 = document.getElementById("k41");
let k42 = document.getElementById("k42");
let k43 = document.getElementById("k43");
let k44 = document.getElementById("k44");
let k45 = document.getElementById("k45");
let k46 = document.getElementById("k46");

let k51 = document.getElementById("k51");
let k52 = document.getElementById("k52");
let k53 = document.getElementById("k53");
let k54 = document.getElementById("k54");
let k55 = document.getElementById("k55");
let k56 = document.getElementById("k56");

let korpus1 = document.getElementById("korpus1");
let korpus2 = document.getElementById("korpus2");
let korpus3 = document.getElementById("korpus3");
let korpus4 = document.getElementById("korpus4");
let korpus5 = document.getElementById("korpus5");

let nachalo1 = document.getElementById("nachalo1");
let nachalo2 = document.getElementById("nachalo2");
let nachalo3 = document.getElementById("nachalo3");
let nachalo4 = document.getElementById("nachalo4");
let nachalo5 = document.getElementById("nachalo5");

function maketimetable(){
    weeknum = new Date().getWeekNumber();
    if (isEven(weeknum) != true)
        {
        //Красная
        nachalo1.innerHTML = json.red.monday.nachalo
        nachalo2.innerHTML = json.red.tuesday.nachalo
        nachalo3.innerHTML = json.red.wednesday.nachalo
        nachalo4.innerHTML = json.red.thursday.nachalo
        nachalo5.innerHTML = json.red.friday.nachalo

        korpus1.innerHTML = json.red.monday.corp
        korpus2.innerHTML = json.red.tuesday.corp
        korpus3.innerHTML = json.red.wednesday.corp
        korpus4.innerHTML = json.red.thursday.corp
        korpus5.innerHTML = json.red.friday.corp

        p11.innerHTML = json.red.monday.p1;
        p12.innerHTML = json.red.monday.p2;
        p13.innerHTML = json.red.monday.p3;
        p14.innerHTML = json.red.monday.p4;
        p15.innerHTML = json.red.monday.p5;
        p16.innerHTML = json.red.monday.p6;

        p21.innerHTML = json.red.tuesday.p1;
        p22.innerHTML = json.red.tuesday.p2;
        p23.innerHTML = json.red.tuesday.p3;
        p24.innerHTML = json.red.tuesday.p4;
        p25.innerHTML = json.red.tuesday.p5;
        p26.innerHTML = json.red.tuesday.p6;

        p31.innerHTML = json.red.wednesday.p1;
        p32.innerHTML = json.red.wednesday.p2;
        p33.innerHTML = json.red.wednesday.p3;
        p34.innerHTML = json.red.wednesday.p4;
        p35.innerHTML = json.red.wednesday.p5;
        p36.innerHTML = json.red.wednesday.p6;

        p41.innerHTML = json.red.thursday.p1;
        p42.innerHTML = json.red.thursday.p2;
        p43.innerHTML = json.red.thursday.p3;
        p44.innerHTML = json.red.thursday.p4;
        p45.innerHTML = json.red.thursday.p5;
        p46.innerHTML = json.red.thursday.p6;

        p51.innerHTML = json.red.friday.p1;
        p52.innerHTML = json.red.friday.p2;
        p53.innerHTML = json.red.friday.p3;
        p54.innerHTML = json.red.friday.p4;
        p55.innerHTML = json.red.friday.p5;
        p56.innerHTML = json.red.friday.p6;

        k11.innerHTML = json.red.monday.p1c;
        k12.innerHTML = json.red.monday.p2c;
        k13.innerHTML = json.red.monday.p3c;
        k14.innerHTML = json.red.monday.p4c;
        k15.innerHTML = json.red.monday.p5c;
        k16.innerHTML = json.red.monday.p6c;

        k21.innerHTML = json.red.tuesday.p1c;
        k22.innerHTML = json.red.tuesday.p2c;
        k23.innerHTML = json.red.tuesday.p3c;
        k24.innerHTML = json.red.tuesday.p4c;
        k25.innerHTML = json.red.tuesday.p5c;
        k26.innerHTML = json.red.tuesday.p6c;

        k31.innerHTML = json.red.wednesday.p1c;
        k32.innerHTML = json.red.wednesday.p2c;
        k33.innerHTML = json.red.wednesday.p3c;
        k34.innerHTML = json.red.wednesday.p4c;
        k35.innerHTML = json.red.wednesday.p5c;
        k36.innerHTML = json.red.wednesday.p6c;

        k41.innerHTML = json.red.thursday.p1c;
        k42.innerHTML = json.red.thursday.p2c;
        k43.innerHTML = json.red.thursday.p3c;
        k44.innerHTML = json.red.thursday.p4c;
        k45.innerHTML = json.red.thursday.p5c;
        k46.innerHTML = json.red.thursday.p6c;

        k51.innerHTML = json.red.friday.p1c;
        k52.innerHTML = json.red.friday.p2c;
        k53.innerHTML = json.red.friday.p3c;
        k54.innerHTML = json.red.friday.p4c;
        k55.innerHTML = json.red.friday.p5c;
        k56.innerHTML = json.red.friday.p6c;
        }
    else
        {
        //Синяя
        nachalo1.innerHTML = json.blue.monday.nachalo
        nachalo2.innerHTML = json.blue.tuesday.nachalo
        nachalo3.innerHTML = json.blue.wednesday.nachalo
        nachalo4.innerHTML = json.blue.thursday.nachalo
        nachalo5.innerHTML = json.blue.friday.nachalo

        korpus1.innerHTML = json.blue.monday.corp
        korpus2.innerHTML = json.blue.tuesday.corp
        korpus3.innerHTML = json.blue.wednesday.corp
        korpus4.innerHTML = json.blue.thursday.corp
        korpus5.innerHTML = json.blue.friday.corp

        p11.innerHTML = json.blue.monday.p1;
        p12.innerHTML = json.blue.monday.p2;
        p13.innerHTML = json.blue.monday.p3;
        p14.innerHTML = json.blue.monday.p4;
        p15.innerHTML = json.blue.monday.p5;
        p16.innerHTML = json.blue.monday.p6;

        p21.innerHTML = json.blue.tuesday.p1;
        p22.innerHTML = json.blue.tuesday.p2;
        p23.innerHTML = json.blue.tuesday.p3;
        p24.innerHTML = json.blue.tuesday.p4;
        p25.innerHTML = json.blue.tuesday.p5;
        p26.innerHTML = json.blue.tuesday.p6;

        p31.innerHTML = json.blue.wednesday.p1;
        p32.innerHTML = json.blue.wednesday.p2;
        p33.innerHTML = json.blue.wednesday.p3;
        p34.innerHTML = json.blue.wednesday.p4;
        p35.innerHTML = json.blue.wednesday.p5;
        p36.innerHTML = json.blue.wednesday.p6;

        p41.innerHTML = json.blue.thursday.p1;
        p42.innerHTML = json.blue.thursday.p2;
        p43.innerHTML = json.blue.thursday.p3;
        p44.innerHTML = json.blue.thursday.p4;
        p45.innerHTML = json.blue.thursday.p5;
        p46.innerHTML = json.blue.thursday.p6;

        p51.innerHTML = json.blue.friday.p1;
        p52.innerHTML = json.blue.friday.p2;
        p53.innerHTML = json.blue.friday.p3;
        p54.innerHTML = json.blue.friday.p4;
        p55.innerHTML = json.blue.friday.p5;
        p56.innerHTML = json.blue.friday.p6;

        k11.innerHTML = json.blue.monday.p1c;
        k12.innerHTML = json.blue.monday.p2c;
        k13.innerHTML = json.blue.monday.p3c;
        k14.innerHTML = json.blue.monday.p4c;
        k15.innerHTML = json.blue.monday.p5c;
        k16.innerHTML = json.blue.monday.p6c;

        k21.innerHTML = json.blue.tuesday.p1c;
        k22.innerHTML = json.blue.tuesday.p2c;
        k23.innerHTML = json.blue.tuesday.p3c;
        k24.innerHTML = json.blue.tuesday.p4c;
        k25.innerHTML = json.blue.tuesday.p5c;
        k26.innerHTML = json.blue.tuesday.p6c;

        k31.innerHTML = json.blue.wednesday.p1c;
        k32.innerHTML = json.blue.wednesday.p2c;
        k33.innerHTML = json.blue.wednesday.p3c;
        k34.innerHTML = json.blue.wednesday.p4c;
        k35.innerHTML = json.blue.wednesday.p5c;
        k36.innerHTML = json.blue.wednesday.p6c;

        k41.innerHTML = json.blue.thursday.p1c;
        k42.innerHTML = json.blue.thursday.p2c;
        k43.innerHTML = json.blue.thursday.p3c;
        k44.innerHTML = json.blue.thursday.p4c;
        k45.innerHTML = json.blue.thursday.p5c;
        k46.innerHTML = json.blue.thursday.p6c;

        k51.innerHTML = json.blue.friday.p1c;
        k52.innerHTML = json.blue.friday.p2c;
        k53.innerHTML = json.blue.friday.p3c;
        k54.innerHTML = json.blue.friday.p4c;
        k55.innerHTML = json.blue.friday.p5c;
        k56.innerHTML = json.blue.friday.p6c;
        }
}

maketimetable();