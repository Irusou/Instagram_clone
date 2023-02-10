function init() {
  const btLogo = document.getElementById("btLogo");
  const btHome = document.getElementById("btHome");

  btLogo.addEventListener("click", function (evt) {
    redirectHome();
  });

  btHome.addEventListener("click", function (evt) {
    redirectHome();
  });
}

redirectHome = function () {
  alert("redirect to home page");
};

window.onload = init;
