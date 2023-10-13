let container = document.querySelector(".container");
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let mon = months[d.getMonth()];
let day = weekday[d.getDay()];
let date = String(d.getDate()).padStart("2", "0");
let year = d.getFullYear();
let h = String(d.getHours()).padStart("2", "0")
let m = String(d.getMinutes()).padStart("2", "0")
let s = String(d.getSeconds()).padStart("2", "0")
let time = `${h}:${m}:${s}`;
let div = document.createElement("div");
div.classList.add("calender")
div.innerHTML = `
<h2>${mon}</h2>
<h3>${day}</h3>
<h1>${date}</h1>
<h3>${year}</h3>
<h4>${time}</h4>`;
container.appendChild(div)
let watch = div.querySelector("h4");
function updateTime(){
    s++;
    if(s===60){
        m++;
        s=0;
        if(m===60){
            h++;
            m=0;
            if(h==24){
                h=0
            }
        }
    }
    h = String(h).padStart("2", "0")
    m = String(m).padStart("2", "0")
    s = String(s).padStart("2", "0")
    time = `${h}:${m}:${s}`;
    watch.innerText = time;
}
setInterval(updateTime, 1000);
