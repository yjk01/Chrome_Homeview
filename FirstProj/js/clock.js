const clock = document.querySelector("h2#clock");

 function getDate()
 {
    const date = new Date();

    const hour = date.getHours().toString().padStart(2,"0");
    const min = date.getMinutes().toString().padStart(2,"0");
    const sec = date.getSeconds().toString().padStart(2,"0");

    

    // console.log(`${hour}:${min}:${sec}`);

    
    clock.innerText = `${hour}:${min}:${sec}`;
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
 }

 getDate();
 setInterval(getDate,1000);