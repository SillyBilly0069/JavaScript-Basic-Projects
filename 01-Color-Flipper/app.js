const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // An array named 'colors' with 4 elements in it

const btn = document.getElementById("btn"); // Grabs the id 'btn' from the HTML
const color = document.querySelector(".color"); // Grabs the class 'color' from the HTML

btn.addEventListener("click", () => {
  // Get random number between 0 - 3
  const randomNumber = Math.floor(Math.random() * colors.length); // This will generate a random whole number based on the length of the 'colors' array

  document.body.style.backgroundColor = colors[randomNumber]; // This will change the background color based on the 'colors' array elements/values
  color.textContent = colors[randomNumber]; // Changes the text of the color and makes it the same as the background color. So basically if it's 'red' background then the "Background Color : [color name here]" will be also 'red' in this case only
});
