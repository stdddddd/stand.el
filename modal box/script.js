var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("popup")[0];


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  body.style = "overflow: hidden;";
}

span.onclick = function() {
  modal.style.display = "none";
  body.style = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style = "none";
  }
}


console.log("Добро пожаловать!");