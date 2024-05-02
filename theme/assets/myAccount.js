function showContent(sectionId) {
  // Remove 'active' class from all tabs
  let tabs = document.querySelectorAll(".accountTabs p");
  tabs.forEach((tab) => {
    tab.classList.remove("activeTab");
  });

  // Add 'active' class to the clicked tab
  let selectedTab = document.querySelector(
    `.accountTabs p[data-section="${sectionId}"]`
  );
  selectedTab.classList.add("activeTab");

  // Hide all content sections
  let sections = document.getElementsByClassName("tabContent");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }

  // Show selected content section
  let selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");

  // Show or hide section below parent based on active section
  let youMayLikeSection = document.querySelector(".mayLikeProduct");
  if (sectionId === "wishlist") {
    youMayLikeSection.classList.add("active");
  } else {
    youMayLikeSection.classList.remove("active");
  }

  // Hide first two divs and show third div in product review section
  if (sectionId !== "productReview") {
    document.querySelector("#productReview > .sectionHeading").style.display =
      "flex";
    document.querySelector(
      "#productReview > .productReviewContent"
    ).style.display = "flex";
    document.querySelector(
      "#productReview > .productReturnDetails"
    ).style.display = "none";
  }
}

/** Modal for view Order Detail */
const viewOrderModalButton = document.querySelectorAll(".viewOrderModalButton");
const viewOrderDetailsModal = document.querySelector(".viewOrderDetailsModal");

viewOrderModalButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewOrderDetailsModal.showModal();
    viewOrderDetailsModal.style.display = "flex";
  });
});

const closeViewOrderModal = document.querySelector(".closeViewOrderModal");
closeViewOrderModal.addEventListener("click", () => {
  viewOrderDetailsModal.close();
  viewOrderDetailsModal.style.display = "none";
});

const viewOrderModalClose = document.querySelector(".viewOrderModalClose");
viewOrderModalClose.addEventListener("click", () => {
  viewOrderDetailsModal.close();
  viewOrderDetailsModal.style.display = "none";

  //showing the third div
  document.querySelector(".productReturnDetails").style.display = "block";

  //Hiding the first two div
  document.querySelector("#productReview > .sectionHeading").style.display =
    "none";
  document.querySelector(".productReviewContent").style.display = "none";

  // Simulate a click event on the product review tab
  document.querySelector(".accountTabs> p:nth-child(4)").click();
});

/* Hiding the product return content box by default  */
document.addEventListener("DOMContentLoaded", function () {
  // Hide the third div by default
  document.querySelector(".productReturnDetails").style.display = "none";
});

//Function to close modal when clicked outside
viewOrderDetailsModal.addEventListener("click", (e) => {
  const dialogDimensions = viewOrderDetailsModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    viewOrderDetailsModal.close();
    viewOrderDetailsModal.style.display = "none";
  }
});

const showReviewModal = document.querySelectorAll(".showReviewModal");
const reviewProductModal = document.querySelector(".reviewProductModal");

showReviewModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewOrderDetailsModal.close();
    viewOrderDetailsModal.style.display = "none";

    reviewProductModal.showModal();
    reviewProductModal.style.display = "flex";
  });
});

const closereviewModal = document.querySelector(".closereviewModal");
closereviewModal.addEventListener("click", () => {
  reviewProductModal.close();
  reviewProductModal.style.display = "none";
});

reviewProductModal.addEventListener("click", (e) => {
  const dialogDimensions = reviewProductModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    reviewProductModal.close();
    reviewProductModal.style.display = "none";
  }
});

/**Return order Modal */
const returnOrderDetailsModal = document.querySelector(
  ".returnOrderDetailsModal"
);

const returnOrderModalButton = document.querySelectorAll(
  ".returnOrderModalButton"
);

returnOrderModalButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    returnOrderDetailsModal.showModal();
    returnOrderDetailsModal.style.display = "flex";
  });
});

const closeReturnOrderModal = document.querySelector(".closeReturnOrderModal");
closeReturnOrderModal.addEventListener("click", () => {
  returnOrderDetailsModal.close();
  returnOrderDetailsModal.style.display = "none";
});

//Function to close modal when clicked outside
returnOrderDetailsModal.addEventListener("click", (e) => {
  const dialogDimensions = returnOrderDetailsModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    returnOrderDetailsModal.close();
    returnOrderDetailsModal.style.display = "none";
  }
});

/**Review Successful latte  */
const reviewSubmitSuccess = document.querySelector(".reviewSubmitSuccess");

const successfullLottieFileModalReview = document.querySelector(
  ".successfullLottieFileModalReview"
);

reviewSubmitSuccess.addEventListener("click", () => {
  reviewProductModal.close();
  reviewProductModal.style.display = "none";
  successfullLottieFileModalReview.showModal();
  successfullLottieFileModalReview.style.display = "block";
});

const successfullLottieFileModalReviewClose = document.querySelector(
  ".successfullLottieFileModalReviewClose"
);
successfullLottieFileModalReviewClose.addEventListener("click", () => {
  successfullLottieFileModalReview.close();
  successfullLottieFileModalReview.style.display = "none";
});

//Function to close modal when clicked outside
successfullLottieFileModalReview.addEventListener("click", (e) => {
  const dialogDimensions =
    successfullLottieFileModalReview.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    successfullLottieFileModalReview.close();
    successfullLottieFileModalReview.style.display = "none";
  }
});

/*Accordian toggle for small screen */
function toggleAccordian(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    let content = section.querySelector(".accordianSectionContent");
    if (content) {
      // Check if the clicked section is already active
      let isActive = content.classList.contains("active");

      // Close other accordion sections
      let allSections = document.querySelectorAll(".accordianSection");
      allSections.forEach(function (sec) {
        let secContent = sec.querySelector(".accordianSectionContent");
        if (sec.id !== sectionId && secContent.classList.contains("active")) {
          secContent.classList.remove("active");
        }
      });

      // Toggle active class on the section content to show/hide it
      if (!isActive) {
        content.classList.add("active");

        // Scroll to the top of the page if the section is not already active
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      console.error("Section content not found for ID: " + sectionId);
    }
  } else {
    console.error("Section not found for ID: " + sectionId);
  }
}
