document.addEventListener("DOMContentLoaded", function () {
  // Get all question set heads
  let questionSetHeads = document.querySelectorAll(".faq-question-set-head");

  // Add click event listener to each question set head
  questionSetHeads.forEach(function (questionSetHead) {
    questionSetHead.addEventListener("click", function () {
      // Toggle visibility of question set
      let questionSet = this.nextElementSibling;
      questionSet.style.display =
        questionSet.style.display === "none" ? "block" : "none";
    });
  });

  // Get all individual questions
  let individualQuestions = document.querySelectorAll(
    ".faq-question > p:nth-child(1)"
  );

  // Add click event listener to each individual question
  individualQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      // Toggle visibility of answer
      let answer = this.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
