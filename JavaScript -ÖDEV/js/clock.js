let userName=prompt("Adınızı giriniz:")

function showTime(){
    const today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("MyClock").innerHTML =`${hours}:${min}:${sec}`;
    setTimeout(showTime,1000);
}

function checkTime(i){
    if(i<10){`${i}=0+${i}`}
    return i;
}

showTime()