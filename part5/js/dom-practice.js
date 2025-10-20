function oldSchoolClick() {
  alert("I have been clicked");
}

window.addEventListener("DOMContentLoaded", () => {
  const btn2 = document.getElementById("btn2");
  btn2.onclick = function () {
    alert("I have been clicked");
  };

  function step3Handler() {
    alert("I have been clicked");
  }
  const btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", step3Handler);

  const btn4 = document.getElementById("btn4");
  btn4.addEventListener("click", function () {
    alert("I have been clicked");
  });

  const btn5 = document.getElementById("btn5");
  btn5.addEventListener("click", function () {
    alert("I have been clicked (script in head using defer)");
  });
});
