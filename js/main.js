var images = [
    "./photo/1.jpg",
    "./photo/2.jpg",
    "./photo/3.jpg",
    "./photo/4.jpg",
  ],
  arrowLeft = document.querySelector(".fa-circle-arrow-left"),
  arrowRight = document.querySelector(".fa-circle-arrow-right"),
  section = document.body,
  pre = 0,
  curr = 1,
  nex = 2,
  cartona;
document.getElementById("previous").src = images[pre];
document.getElementById("current").src = images[curr];
document.getElementById("next").src = images[nex];
(function indicators() {
  cartona = "";
  for (let iterator = 0; iterator < images.length; iterator++) {
    cartona += `<button id ="butt${iterator}"></button>`;
  }
  document.getElementById("indicator").innerHTML = cartona;
  for (let iterator = 0; iterator < images.length; iterator++) {
    document
      .getElementById(`butt${iterator}`)
      .addEventListener("click", function () {
        curr = iterator;
        pre = iterator - 1;
        nex = iterator + 1;
        if (pre < 0) {
          pre = images.length - 1;
        }
        if (nex > images.length - 1) {
          nex = 0;
        }
        document.getElementById("previous").src = images[pre++];
        document.getElementById("current").src = images[curr++];
        document.getElementById("next").src = images[nex++];
        if (curr < 0) {
          curr = images.length - 1;
        } else if (curr > images.length - 1) {
          curr = 0;
        }
      });
  }
})();
arrowRight.addEventListener("click", right);
function right() {
  if (pre == images.length - 1) {
    pre = 0;
    document.getElementById("previous").src = images[pre];
  } else {
    document.getElementById("previous").src = images[++pre];
  }
  if (curr == images.length - 1) {
    curr = 0;
    document.getElementById("current").src = images[curr];
  } else {
    document.getElementById("current").src = images[++curr];
  }
  if (nex == images.length - 1) {
    nex = 0;
    document.getElementById("next").src = images[nex];
  } else {
    document.getElementById("next").src = images[++nex];
  }
}
arrowLeft.addEventListener("click", left);
function left() {
  if (pre == 0) {
    pre = images.length - 1;
    document.getElementById("previous").src = images[pre];
  } else {
    document.getElementById("previous").src = images[--pre];
  }
  if (curr == 0) {
    curr = images.length - 1;
    document.getElementById("current").src = images[curr];
  } else {
    document.getElementById("current").src = images[--curr];
  }
  if (nex == 0) {
    nex = images.length - 1;
    document.getElementById("next").src = images[nex];
  } else {
    document.getElementById("next").src = images[--nex];
  }
}
section.addEventListener("keyup",function (e){
  if (e.key== '37') {
  left()
}
else if (e.key == '39') {
right()}

})
setInterval(left, 1000);