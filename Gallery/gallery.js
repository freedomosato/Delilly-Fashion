  let ulEl = document.querySelector("#ulElement")
  console.log(ulEl)
function myLinks(){
  
  if(ulEl.style.display === "block"){
    ulEl.style.display = "none"
  }
  else{
    ulEl.style.display = "block"
  }
}