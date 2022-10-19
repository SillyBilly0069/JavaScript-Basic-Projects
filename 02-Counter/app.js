// Set initial count
let count = 0; // Current value of the count variable is: 0

// Select value and buttons
const value = document.querySelector("#value"); // Grabs the id 'value' from the HTML
const btns = document.querySelectorAll(".btn"); // Grabs all buttons that have a class 'btn' from the HTML

btns.forEach((btn) => {
  // For each 'btns' execute code. In this case all the buttons we have in our HTML are 3 buttons, each one of them has the class 'btn'
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList; // Targets the classes of each 'btn'

    if (styles.contains("decrease")) {
      // If the 'styles' variable 'target class' value 'contains' the class 'decrease' then execute code inside curly braces
      count--; // If the condition is true decrement the 'count' variable by 1
    } else if (styles.contains("increase")) {
      // If the 'styles' variable 'target class' value 'contains' the class 'increase' then execute code inside curly braces
      count++; // If the condition is true and the first condition is false increment the 'count' variable by 1
    } else if (styles.contains("reset")) {
      // If the 'styles' variable 'target class' value 'contains' the class 'reset' then execute code inside curly braces
      count = 0; // If the condition is true and first and second conditions are false set the 'count' variable to 0
    }

    if (count < 0) {
      // If the variable 'count' value is less than 0 then the condition is true, if not then it's false
      value.style.color = "red"; // If the condition is true change the 'value' variable text color to 'red'
    } else if (count === 0) {
      // If the variable 'count' value is strictly equal to 0 then the condition is true, if not then it's false
      value.style.color = "#173C5E"; // If the condition is true change the 'value' variable text color to '#173C5E'
    } else if (count > 0) {
      // If the variable 'count' value is greater than 0 then the condition is true, if not then it's false
      value.style.color = "green"; // If the condition is true change the 'value' variable text color to 'green'
    }

    value.textContent = count; // Change the 'value' variable text content to the current variable 'count' value
  });
});
