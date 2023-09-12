function myLink(){
  let ulEl = document.getElementById("ulEl")
  
  if(ulEl.style.display === "block"){
    ulEl.style.display = "none"
  }
  else{
    ulEl.style.display = "block"
  }
}

let dateEl = document.getElementById("date")
let timeEl = document.getElementById("time")

function digitalDate(){
let a = new Date();
let d = a.getDay();
let dt= a.getDate();
let mt= a.getMonth();
let y = a.getFullYear();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let ampm = "AM"
  /** 
  Day and Date
  */
  let arrayDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  let arrayMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  let arrayDate = arrayDay[d]
  let arrayDate2 = arrayMonth[mt]
  if(dt<10){
    dt = "0" + dt
  }
  if(mt<10){
    mt = "0" + mt
  }
  
  dateEl.innerHTML = arrayDate + " " + dt + " " + arrayDate2 + ", " + y

  if(h>12){
    h = h - 12
    ampm = "PM"
  }
  if(h<10){
    h = "0" + h
  }
  if(m<10){
    m = "0" + m
  }
  if(s<10){
    s = "0" + s
  }
  timeEl.innerHTML = h + " : " + m + " : " + s + " " + ampm
}
setInterval(digitalDate, 100)










