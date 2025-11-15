// Midterm Project - Javascript for Form
// Name: Sarah Morgan
// Date: Nov 13th 2025

let form = document.getElementById("specials-survey");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let goody = document.getElementById("goody").value.trim();
  let color = document.getElementById("color").value.trim();
  let flavor = document.getElementById("flavor").value.trim();
  let idea = document.getElementById("idea").value.trim();

  let errorMessage = "";
  if (goody.length < 2) {
    errorMessage += "✦ Must be at least 2 characters long.\n";
  }

  let hexColor = /^#([1-9A-Fa-f]{6})$/;
  if (!hexColor.test(color)){
    errorMessage += "✦ Must be a valid color hex code (example: #ABC123).\n";
  }

  if (flavor === "") {
    errorMessage += "✦ If you don't like either, you should pick a different stand... Pick a flavor!\n";
  }

  if (idea.length < 2) {
    errorMessage += "✦ Please input a valid flavor combo idea. Must be 2 characters long or more.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  processForm ({
    goody: goody,
    color: color,
    flavor: flavor,
    idea: idea,
  });
});

function processForm(formData) {
  console.log("Form Data:", formData);
  alert(`Thank you for your input! See you at the window! ☕︎`);
  document.getElementById("specials-survey").reset();
}