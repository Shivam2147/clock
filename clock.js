let main = document.getElementById('main')
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('mint')
let week = document.getElementById('week')
let sec = document.getElementById('sec')
function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

  setInterval(() => {
    let options = {
        day: "numeric",
        year: "numeric",
        month: "long",
    }
    let day2 = new Date();
    day.innerHTML = day2.toLocaleDateString("en-IN" ,options);
    hour.innerHTML = day2.getHours();
    min.innerHTML = day2.getMinutes();
    week.innerHTML = day2.getDay();
    sec.innerHTML = day2.getSeconds();
    main.style.backgroundColor = getRandomHexColor()
  }, 1000);