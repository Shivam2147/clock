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
    switch(day2.getDay())
    {
      case 1: week.innerHTML = 'MONDAY';
      break;
      case 2: week.innerHTML = 'TUESDAY';
      break;
      case 3: week.innerHTML = 'WEDNESDAY';
      break;

      case 4: week.innerHTML = 'THURSDAY';
      break;
      case 5: week.innerHTML = 'FRIDAY';
      break;
      case 6: week.innerHTML = 'SATURDAY';
      break;
      case 7: week.innerHTML = 'SUNDAY';
      break;

    }
    sec.innerHTML = day2.getSeconds();
    main.style.backgroundColor = getRandomHexColor()
  }, 1000);