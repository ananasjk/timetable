let weekn = document.getElementById("weekn");

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

function getweekcolor(){
    weeknum = new Date().getWeekNumber();
    if (isEven(weeknum) != true)
        {
        weekn.innerHTML = "Красная";
        weekn.style.color = "red";
        }
    else
        {
        weekn.innerHTML = "Синяя";
        weekn.style.color = "blue";
        }
}
getweekcolor();