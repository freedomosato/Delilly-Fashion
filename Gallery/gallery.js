function myLink(){
  let ulEl = document.getElementById("ulEl")
  
  if(ulEl.style.display === "block"){
    ulEl.style.display = "none"
  }
  else{
    ulEl.style.display = "block"
  }
}