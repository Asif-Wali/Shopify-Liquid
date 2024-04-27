// footerToggle
{
  function toggleShopNav() {
    let shopNav = document.getElementById("shopNav");

    let showAccordian;
    shopNav.classList.contains("hidden")
      ? (showAccordian = true)
      : (showAccordian = false);

    if (showAccordian) {
      shopNav.classList.remove("hidden");
      shopNav.classList.add("block");
      let button = document.getElementById("ShopNavToggle");
      button.innerText = "-";
    } else {
      shopNav.classList.remove("block");
      shopNav.classList.add("hidden");
      let button = document.getElementById("ShopNavToggle");
      button.innerText = "+";
    }
  }

  let ShopNavButton = document.getElementById("ShopNavToggle");
  ShopNavButton.addEventListener("click", toggleShopNav);

  function toggleAboutNav() {
    let AboutNav = document.getElementById("aboutNav");
    let showAccordian;
    AboutNav.classList.contains("hidden")
      ? (showAccordian = true)
      : (showAccordian = false);

    if (showAccordian) {
      AboutNav.classList.remove("hidden");
      AboutNav.classList.add("block");
      let button = document.getElementById("AboutNavToggle");
      button.innerText = "-";
    } else {
      AboutNav.classList.remove("block");
      AboutNav.classList.add("hidden");
      let button = document.getElementById("AboutNavToggle");
      button.innerText = "+";
    }
  }
  let AboutNavButton = document.getElementById("AboutNavToggle");
  AboutNavButton.addEventListener("click", toggleAboutNav);

  function toggleQuickNav() {
    let quickNav = document.getElementById("quickNav");
    let showAccordian;
    quickNav.classList.contains("hidden")
      ? (showAccordian = true)
      : (showAccordian = false);

    if (showAccordian) {
      quickNav.classList.remove("hidden");
      quickNav.classList.add("block");
      let button = document.getElementById("QuickNavToggle");
      button.innerText = "-";
    } else {
      quickNav.classList.remove("block");
      quickNav.classList.add("hidden");
      let button = document.getElementById("QuickNavToggle");
      button.innerText = "+";
    }
  }
  let QuickNavButton = document.getElementById("QuickNavToggle");
  QuickNavButton.addEventListener("click", toggleQuickNav);

  function toggleTouchNav() {
    let touchNav = document.getElementById("touchNav");
    let showAccordian;
    touchNav.classList.contains("hidden")
      ? (showAccordian = true)
      : (showAccordian = false);

    if (showAccordian) {
      touchNav.classList.remove("hidden");
      touchNav.classList.add("block");
      let button = document.getElementById("TouchNavToggle");
      button.innerText = "-";
    } else {
      touchNav.classList.remove("block");
      touchNav.classList.add("hidden");
      let button = document.getElementById("TouchNavToggle");
      button.innerText = "+";
    }
  }
  let TouchNavButton = document.getElementById("TouchNavToggle");
  TouchNavButton.addEventListener("click", toggleTouchNav);
}
