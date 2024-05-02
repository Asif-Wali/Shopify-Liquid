/* ----------- Logic for opening, Closing and Closing on clicked outside for Dailog Modals ------------- */
function openModal(modal) {
  modal.showModal();
  modal.style.display = "flex";
}

function closeModal(modal) {
  modal.close();
  modal.style.display = "none";
}

function closeModalOnClickOutside(modal) {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal(modal);
    }
  });
}

/*-------     Creating Register OTP Verification Overlay for Large screen    --------*/
const openRegisterModal = document.querySelector(".openRegisterModal");
const registerOtpBox = document.querySelector(".registerOtpBox");

openRegisterModal.addEventListener("click", () => {
  openModal(registerOtpBox);
});

const closeRegisterModal = document.querySelector(".closeRegisterModal");
closeRegisterModal.addEventListener("click", () => {
  closeModal(registerOtpBox);
});

const registerResend = document.querySelector(".registerResend");
registerResend.addEventListener("click", () => {
  closeModal(registerOtpBox);
});

closeModalOnClickOutside(registerOtpBox);

/* Register Otp Modal Overlay for small screens */
const openRegisterModalSmall = document.querySelector(
  ".openRegisterModalSmall"
);
openRegisterModalSmall.addEventListener("click", () => {
  openModal(registerOtpBox);
});

/*  Creating createAccount Modal for large and small screen with same button*/
const registerVerify = document.querySelector(".registerVerify");
const createAccountModal = document.querySelector(".createAccountModal");
const formContainer = document.querySelector(".formContainer");
const mobileViewFormContainer = document.querySelector(
  ".mobileViewFormContainer"
);

registerVerify.addEventListener("click", () => {
  closeModal(registerOtpBox);
  //openModal(createAccountModal);
  if (window.innerWidth <= 599) {
    mobileViewFormContainer.style.display = "none";
    formContainer.style.display = "none";
    createAccountModal.style.display = "flex";
  } else {
    formContainer.style.display = "none";
    mobileViewFormContainer.style.display = "none";
    createAccountModal.style.display = "flex";
  }
});

const accountModalClose = document.querySelector(".accountModalClose");
accountModalClose.addEventListener("click", () => {
  //closeModal(createAccountModal);
  if (window.innerWidth <= 599) {
    createAccountModal.style.display = "none";
    mobileViewFormContainer.style.display = "block";
  } else {
    createAccountModal.style.display = "none";
    formContainer.style.display = "block";
  }
});

//closeModalOnClickOutside(createAccountModal);

/*-----Successfull Lottie file Dialog modal-----*/
const successfullLottieFileModal = document.querySelector(
  ".successfullLottieFileModal"
);
const successfullLottieFileModalMobile = document.querySelector(
  ".successfullLottieFileModalMobile"
);

// Function to open the success modal
function openSuccessModal() {
  const modal =
    window.innerWidth <= 599
      ? successfullLottieFileModalMobile
      : successfullLottieFileModal;
  openModal(modal);
}

// Function to close the success modal
function closeSuccessModal() {
  const modal =
    window.innerWidth <= 599
      ? successfullLottieFileModalMobile
      : successfullLottieFileModal;
  closeModal(modal);
}

// Function to redirect the user to another page
function redirectToHomePage() {
  // Redirect the user to the home page
  window.location.href = "/"; // Replace "/" with the actual URL of the page you want to redirect to
}

// Function to display validation errors
function displayErrors(errors) {
  // Loop through each error and render it next to the corresponding form field
  for (const field in errors) {
    const errorElement = document.createElement("div");
    errorElement.textContent = errors[field];
    errorElement.classList.add("error-message");

    // Find the form field corresponding to the error and append the error message
    const formField = document.querySelector(`[name="customer[${field}]"]`);
    if (formField) {
      formField.insertAdjacentElement("afterend", errorElement);
    }
  }
}

// Form submission handling code (placed separately)
// Select the form by its class name
const createCustomerForm = document.querySelector(".createAccountModal form");

// Event listener for form submission
createCustomerForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Clear any existing error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  // Get form data
  const formData = new FormData(this);

  // Validation rules (you may adjust these as per your requirements)
  const errors = {};
  if (!formData.get("customer[first_name]")) {
    errors.first_name = "First name is required.";
  }
  if (!formData.get("customer[last_name]")) {
    errors.last_name = "Last name is required.";
  }
  if (!formData.get("customer[email]")) {
    errors.email = "Email is required.";
  }
  if (!formData.get("customer[phone]")) {
    errors.email = "Number is required.";
  }
  if (!formData.get("customer[password]")) {
    errors.password = "Password is required.";
  }
  if (
    formData.get("customer[password]") !==
    formData.get("customer[password_confirmation]")
  ) {
    errors.password_confirmation = "Passwords do not match.";
  }

  // Check if there are any validation errors
  if (Object.keys(errors).length > 0) {
    // Display validation errors if any
    displayErrors(errors);
  } else {
    // If no validation errors, submit the form
    this.submit();
    // Open the success modal
    openSuccessModal();

    // Close the success modal after a delay (adjust the delay as needed)
    setTimeout(() => {
      closeSuccessModal();
      // Redirect the user to the home page after closing the modal
      redirectToHomePage();
    }, 5000); // Close modal and redirect after 5 seconds (5000 milliseconds)
  }
});

/* Checking strength of password */
document.getElementById("password").addEventListener("input", function () {
  let password = this.value;
  let strengthText = document.getElementById("password-strength");

  // Your password strength calculation logic here
  let strength = calculatePasswordStrength(password);

  // Update the password strength indicator
  strengthText.textContent = "Password Strength: " + strength;
});
function calculatePasswordStrength(password) {
  // Initialize a score for the password strength
  let score = 0;

  // Add points based on password length
  if (password.length >= 8) {
    score += 2;
  } else if (password.length >= 6) {
    score += 1;
  }

  // Add points for each character type present in the password
  const characterTypes = {
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    numeric: /[0-9]/,
    special: /[^a-zA-Z0-9]/,
  };

  for (const type in characterTypes) {
    if (characterTypes[type].test(password)) {
      score += 1;
    }
  }

  // Determine the strength level based on the score
  let strength;
  if (score >= 6) {
    strength = "Strong";
  } else if (score >= 3) {
    strength = "Medium";
  } else if (score >= 1) {
    strength = "Weak";
  } else {
    strength = "No Password";
  }

  return strength;
}
