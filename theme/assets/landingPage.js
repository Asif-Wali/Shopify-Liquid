const loadingFade = () => {
  const loadingBg = document.querySelector(".loadingBg");
  const loadingIconBox = document.querySelector(".iconBox");
  const loadingLogoBox = document.querySelector(".logoBox");

  loadingBg.style.opacity = "0";
  loadingIconBox.style.opacity = "0";
  loadingLogoBox.style.opacity = "0";
};

const loadingRemove = () => {
  const loadingBox = document.querySelector(".loadingPage");
  const landingBox = document.querySelector(".landingPage");
  loadingBox.style.display = "none";
  landingBox.style.display = "block";
};

const firstVisit = sessionStorage.getItem("visited");
if (firstVisit === null) {
  window.setInterval(loadingFade, 3800);
  window.setInterval(loadingRemove, 4000);
  sessionStorage.setItem("visited", 1);
} else {
  loadingRemove();
}

function goToHomePage() {
  window.location.href = "../Homepage.html";
}

function goToCustomPage() {
  window.location.href = "../customPage.html";
}
