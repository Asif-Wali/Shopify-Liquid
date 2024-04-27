document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".backButton");
  const nextButtons = [document.getElementById("nextButton1")];

  const timelessSlider = document.getElementById("timelessSlider");
  const animation = document.getElementById("animation");
  const footer = document.getElementById("footer");
  const defaultNavbar = document.getElementById("defaultNavbar");
  const cartNavbar = document.getElementById("cartNavbar");

  const showHeaderSidebar = document.getElementById("showHeaderSidebar");
  showHeaderSidebar.addEventListener("click", () => {
    document
      .querySelector(".cartSectionLg > div:nth-child(1)")
      .classList.remove("active");
  });

  const closeHeaderSidebar = document.getElementById("closeHeaderSidebar");
  closeHeaderSidebar.addEventListener("click", () => {
    document
      .querySelector(".cartSectionLg > div:nth-child(1)")
      .classList.add("active");
  });

  const stepperContainer = document.querySelector(
    ".cartSectionLg > div:nth-child(1)"
  );

  const steps = document.querySelectorAll(".step");
  const stepContents = document.querySelectorAll(".cartSectionLg > .cartStep");

  let currentStep = 1;

  function showStep(stepNumber) {
    stepContents.forEach((stepContent) => {
      stepContent.style.display = "none";
    });
    steps.forEach((step, index) => {
      if (index === stepNumber - 1) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
    stepContents[stepNumber - 1].style.display = "block";

    /*Setting the display of navbar, footer after going to second step */
    if (stepNumber === 1) {
      backButton.style.display = "none";
      timelessSlider.style.display = "block";
      animation.style.display = "block";
      footer.style.display = "block";
      defaultNavbar.style.display = "block";
      cartNavbar.style.display = "none";

      stepperContainer.style.top = "113.5px";
    } else {
      backButton.style.display = "inline-block";
      timelessSlider.style.display = "none";
      animation.style.display = "none";
      footer.style.display = "none";
      defaultNavbar.style.display = "none";
      cartNavbar.style.display = "block";

      stepperContainer.style.top = "81px";
    }

    // Add completed class to the previous step's bullet point
    if (stepNumber > 1) {
      steps[stepNumber - 2].classList.add("completed");
      // Change color of completed step's bullet point
      steps[stepNumber - 2]
        .querySelector(".bulletDot")
        .classList.add("completed");
    }
  }

  function goToNextStep() {
    currentStep++;
    // Remove active class from all steps' bullet dots
    document.querySelectorAll(".bulletDot").forEach((bulletDot) => {
      bulletDot.classList.remove("active");
    });
    // Add active class to the bullet dot of the current step
    steps[currentStep - 1].querySelector(".bulletDot").classList.add("active");
    showStep(currentStep);
    window.scrollTo({
      top: 0,
    });
  }

  function goToPreviousStep() {
    if (currentStep > 1) {
      // Remove completed class from all steps ahead of the current step
      for (let i = currentStep - 1; i < steps.length; i++) {
        steps[i].classList.remove("completed");
      }

      // Remove active class from all steps' bullet dots
      document.querySelectorAll(".bulletDot").forEach((bulletDot) => {
        bulletDot.classList.remove("active");
      });

      // Update current step
      currentStep--;

      // Add active class to the bullet dot of the current step
      steps[currentStep - 1]
        .querySelector(".bulletDot")
        .classList.add("active");

      // Update bullet dot classes
      updateBulletDotClasses();

      showStep(currentStep);
    }
  }

  function updateBulletDotClasses() {
    steps.forEach((step, index) => {
      if (index < currentStep - 1) {
        step.querySelector(".bulletDot").classList.add("completed");
        step.querySelector(".bulletDot").classList.remove("active");
      } else if (index === currentStep - 1) {
        step.querySelector(".bulletDot").classList.add("active");
        step.querySelector(".bulletDot").classList.remove("completed");
      } else {
        step.querySelector(".bulletDot").classList.remove("completed");
        step.querySelector(".bulletDot").classList.remove("active");
      }
    });
  }

  backButton.addEventListener("click", function (event) {
    event.preventDefault();
    goToPreviousStep();
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      goToNextStep();
    });
  });

  showStep(currentStep);
});

// function to updata cart

const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Hi , I am making a fetch request from Cart Page");

    // Submit form with ajax
    await fetch("/cart/add", {
      method: "post",
      body: new FormData(form),
    });
    const messageElement = document.createElement("p");
    messageElement.style.color = "green";
    messageElement.textContent = "Sample Added";
    messageElement.style.marginLeft = "auto";
    messageElement.style.marginLeft = "right";
    event.target.appendChild(messageElement);
  });
});
