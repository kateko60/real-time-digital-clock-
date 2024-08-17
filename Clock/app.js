document.addEventListener('DOMContentLoaded', function(){
    //defining the variables that are to be replaced
    let Hours = document.getElementById("Hrs");
    let Minutes = document.getElementById("Min");
    let Seconds = document.getElementById("Sec");

    //making sure the times counts real-time
    setInterval(() => {
        //Defining the date
    const date = new Date();

    //getting the hours, mitues and seconds form the date
    Hours.textContent = date.getHours();
    Minutes.textContent = date.getMinutes();
    Seconds.textContent = date.getSeconds();
    }, 1000);
   
})