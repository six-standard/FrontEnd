const breakfast = document.querySelector("#breakfast span");
const lunch = document.querySelector("#lunch span");
const dinner = document.querySelector("#dinner span");
const today = document.querySelector("#date");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const days = ["일", "월", "화", "수", "목", "금", "토"];
const date = new Date();
let i;

function getClock(e) {
    const todate = {
      month: date.getMonth(),
      day: date.getDate(),
      week: numToDate(`${date.getDay()}`)
    }
    if(e==undefined) {
      today.innerText = (todate.month+1) + "월 " + todate.day + "일 (" + todate.week + ")";
      getFood(todate);
    } else {
      const day = (`${today.innerText}`.replace('월', "").replace(/일|\)|\(|/g, "").split(" "));
        switch(day[0]) {
          case 2:
            compare(e, day, todate, 28);
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            compare(e, day, todate, 30);
            break;
          default:
            compare(e, day, todate, 31);
            break;
    }
  }
}

function compare(e, day, todate, days) {
  if(e.target.id=="left") { //left (이전)
    if(day[1]>1) {
      if(dateToNum(day[2])-1<0) todate.week = "토";
      else todate.week = numToDate(dateToNum(day[2])-1);
      todate.day = day[1]-1;
      today.innerText = day[0] + "월 " + todate.day + "일 (" + todate.week + ")";
      getFood(todate);
    }
  } else { //right (다음)
    if(Number(day[1])<days-1) {
      if(Number(dateToNum(day[2]))+1>6) todate.week = "일";
      else todate.week = numToDate(Number(dateToNum(day[2]))+1);
      todate.day = Number(day[1])+1;
      today.innerText = day[0] + "월 " + todate.day + "일 (" + todate.week + ")";
      getFood(todate);
    }
  }
}

function getFood(date) { //급식 불러오기 (하루)
    const url = `https://school-api.xyz/api/high/G100000170?allergy=hidden&date=${date.day}`;
    breakfast.innerText = "정보를 불러오고 있습니다..";
    lunch.innerText = "정보를 불러오고 있습니다..";
    dinner.innerText = "정보를 불러오고 있습니다..";
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      breakfast.innerText = `${data.menu[0].breakfast}`.replaceAll(",", '\n');
      lunch.innerText = `${data.menu[0].lunch}`.replaceAll(",", '\n');
      dinner.innerText = `${data.menu[0].dinner}`.replaceAll(",", '\n');
      }
  );
}

function numToDate(e) {
  for(i = 0; i<=6; i++) e = `${e}`.replace(i, days[i]);
  return e;
}

function dateToNum(e) {
  for(i = 0; i<=6; i++) {
    e = e.replace(days[i], `${i}`);
  }
  return e;
}

getClock();
left.addEventListener("click", getClock);
right.addEventListener("click", getClock);