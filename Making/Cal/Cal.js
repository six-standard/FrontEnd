const date = new Date();
const firstdate = new Date((date.getFullYear())+'-'+(Number(date.getMonth())+1)+'-1').getDay();
const caption = document.querySelector("caption");
const url = "https://cors-anywhere.herokuapp.com/https://dsmhs.djsch.kr/scheduleH/list.do?m=0203&s=dsmhs";
caption.innerText = (Number(date.getMonth())+1) + "월 학사일정";
let days = [];
for(let i = 0; i<=34; i++) { days[i] = document.querySelector("#d" + i); }

switch(date.getMonth()+1) {
    case 2:
        for(let i = 1; i<=28; i++) { days[i-1+firstdate].innerText = i+1; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
        for(let i = 1; i<=30; i++) { days[i-1+firstdate].innerText = i; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
    default:
        for(let i = 1; i<=31; i++) { days[i-1+firstdate].innerText = i; if(date.getDate()==i) days[i-1+firstdate].className="today"; }
      break;
}

fetch(url)
 .then((response) => response.text())
 .then(data => {
    const cal = data.split("</tr>")
    console.log(cal);
 })
