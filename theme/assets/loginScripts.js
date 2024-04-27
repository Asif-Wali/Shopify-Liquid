/*Switching Tabs from loginViaPass to loginVia OTP IN large Screen*/

const loginViaOTP = document.querySelector(".loginViaOTP");
const loginViaPassword = document.querySelector(".loginViaPassword");
const loginViaOTPInfo = document.querySelector(".actionInfo2OTP");
const loginViaPasswordInfo = document.querySelector(".actionInfo2Pass");

const switchToLoginPass = () => {
  loginViaOTP.style.display = "none";
  loginViaOTPInfo.style.display = "none";

  loginViaPassword.style.display = "block";
  loginViaPasswordInfo.style.display = "block";
};

const switchToLoginOTP = () => {
  loginViaPassword.style.display = "none";
  loginViaPasswordInfo.style.display = "none";

  loginViaOTP.style.display = "block";
  loginViaOTPInfo.style.display = "block";
};

/*Switching Tabs from loginViaPass to loginVia OTP IN large Screen*/

const loginViaOTPMobile = document.querySelector(".loginViaOTPMobile");
const loginViaPasswordMobile = document.querySelector(
  ".loginViaPasswordMobile"
);
const loginViaOTPInfoMobile = document.querySelector(".actionInfo2OTPMobile");
const loginViaPasswordInfoMobile = document.querySelector(
  ".actionInfo2PassMobile"
);

const switchToLoginPassMobile = () => {
  loginViaOTPMobile.style.display = "none";
  loginViaOTPInfoMobile.style.display = "none";

  loginViaPasswordMobile.style.display = "block";
  loginViaPasswordInfoMobile.style.display = "block";
};

const switchToLoginOTPMobile = () => {
  loginViaPasswordMobile.style.display = "none";
  loginViaPasswordInfoMobile.style.display = "none";

  loginViaOTPMobile.style.display = "block";
  loginViaOTPInfoMobile.style.display = "block";
};

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

/*-------     Creating Login OTP Verification Overlay for Large screen    --------*/
const openLoginModal = document.querySelector(".openLoginModal");
const loginOtpBox = document.querySelector(".loginOtpBox");
openLoginModal.addEventListener("click", () => {
  openModal(loginOtpBox);
});

const closeLoginModal = document.querySelector(".closeLoginModal");
closeLoginModal.addEventListener("click", () => {
  closeModal(loginOtpBox);
});

const loginResend = document.querySelector(".loginResend");
loginResend.addEventListener("click", () => {
  closeModal(loginOtpBox);
});

closeModalOnClickOutside(loginOtpBox);

/* Login Otp Modal Overlay for small screens */
const openloginModalSmall = document.querySelector(".openloginModalSmall");
openloginModalSmall.addEventListener("click", () => {
  openModal(loginOtpBox);
});
