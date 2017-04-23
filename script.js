let bomb = document.getElementById("btn");
let score = 0;
function hello() {
  document.getElementById("btn").style.left = Math.floor((Math.random()* 900) + 1) +'px';
  document.getElementById("btn").style.top = Math.floor((Math.random()* 600) + 1) +'px';
  bomb.classList.remove("animation");
  void bomb.offsetWidth;
  bomb.classList.add("animation");
  score += 10;
  document.getElementById("count").innerHTML = "score = " + score;

  // compter le nombre de clics dans une session
  if (sessionStorage.clic) {

    sessionStorage.clic = Number(sessionStorage.clic) + 1;

  } else {
    sessionStorage.clic = 1;
  }
  document.getElementById('total').innerHTML = "Tu as fait"  + sessionStorage.clic + "clics dans cette session"
}

// fin


bomb.addEventListener("animationend", function () {
  alert("T'es pas très bon...");
  score =0;
});
