const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // An array named 'hex' with 16 elements in it

const btn = document.getElementById("btn"); // Grabs the id 'btn' from the HTML
const color = document.querySelector(".color"); // Grabs the class 'color' from the HTML

btn.addEventListener("click", () => {
  let hexColor = "#"; // Current value of the 'hexColor' variable is: #

  for (let i = 0; i < 6; i++) {
    // This will loop and individually pick and element from the 'hex' array 6 times so it's random (Based on the code inside the curly braces in the for loop)
    let randomNumber = Math.floor(Math.random() * hex.length); // This will pick a random element from the 'hex' array

    hexColor += hex[randomNumber]; // This will give the 'hexColor' variable a value that is randomly generated. An example would be: #51B3FA in this loop
  }

  document.body.style.backgroundColor = hexColor; // This will change the background color based on the 'hexColor' array elements/values
  color.textContent = hexColor; // Changes the text content of the color and makes it the same as the background color.
});
