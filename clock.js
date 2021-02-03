function digitalClock() {
    let date = new Date();
    let hours= date.getHours();
    let minutes =date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate = "AM 😰";






    /*statement for am or pm*/
    if(hours === 0){
        hours = 12;
    }
    if(hours>12){
        hours = hours - 12;
        timeFormate="PM 💙";
    }






    /*Using ternary operator*/

    hours = hours<10 ? "0"+ hours: hours;
    minutes = minutes<10 ? "0"+ minutes: minutes;
    seconds = seconds<10 ? "0"+ seconds: seconds;








    /*id or class selection for output*/

    let finalHour= `${hours}:`;
    let finalminuite= `${minutes}:`;
    let finalseconds= `${seconds}`;

    document.getElementById("hour").innerText = finalHour;
    document.getElementById("minutes").innerText = finalminuite;
    document.getElementById("seconds").innerText = finalseconds;

    document.querySelector("small").innerText = timeFormate;



    /*for refreshing after 1 second*/
    setInterval(digitalClock,1000);
};

digitalClock();