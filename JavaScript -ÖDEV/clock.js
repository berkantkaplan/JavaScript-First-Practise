let myName = prompt('Adınızı giriniz:');
document.getElementById("myName").innerHTML = myName

function showTime() {
  const date = new Date();
  let day = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  setTimeout(showTime, 1000);

  switch (day) {
      case 1:
          day= "Pazartesi";
          break;
      case 2:
          day= "Salı";
          break;
      case 3:
          day= "Çarşamba";
          break;
      case 4:
          day= "Perşembe";
          break;
      case 5:
          day= "Cuma";
          break;
      case 6:
          day= "Cumartesi";
          break;
      case 7:
          day= "Pazar";
          break;
}

document.getElementById('myClock').innerHTML =  `${h}:${m}:${s}    ${day}`       
}

showTime();

function checkTime(i) {
if (i < 10) {i = "0" + i};  
return i;
}
      