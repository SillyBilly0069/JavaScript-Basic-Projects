// Traversing the dom way:
// const buttons = document.querySelectorAll('.question-btn'); // Gets the 'question-btn' class from the HTML

// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement; // First you get the event and current target of the html tag, then the first 'parentElement' is 'question-title', then you add another 'parentElement' and you get 'question', so basically parent of the parent (In humans that would be a grandparent). The 'question-btn' has 'question-title' as a parent, and the 'question-title' has 'question' as a parent, so we are targeting: 'question'
//         question.classList.toggle('show-text'); // Adds the class list 'show-text' when you click on it to the 'question' class and once clicked again it removes it
//     });
// });

// Using selectors inside the element way:
const questions = document.querySelectorAll(".question"); // Gets the '.question' class from the HTML and add it to the 'questions' variable as a value

questions.forEach((question) => {
  // For each 'questions' value in this case '.question' classes, execute code
  const btn = question.querySelector(".question-btn"); // Gets the 'question-btn' class from the HTML

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      // Loops over the 'question' classes (in this case multiple ones)
      if (item !== question) {
        // If the 'item' selected is not strictly equal to 'question' classes
        item.classList.remove("show-text"); // Removes class list 'show-text' from the 'question' class (This making it so there's only one element with the class 'question show-text')
      }
    });

    question.classList.toggle("show-text"); // Adds the class list 'show-text' when you click on it to the 'question' class and once clicked again it removes it
  });
});
