let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let candy = document.getElementById("candy").value;
  let guests = Number(document.getElementById("guests").value);

  let costume = "";
  let costumeOptions = document.getElementsByName("costume");
  for (let option of costumeOptions) {
    if (option.checked) {
      costume = option.value;
      break;
    }
  }

  let favorites = [];
  let checkboxes = ["diabetes", "children", "money"];
  checkboxes.forEach(id => {
    let box = document.getElementById(id);
    if (box.checked) {
      favorites.push(box.value);
    }
  });

  let errorMessage = "";
  if (name.length < 2) {
    errorMessage += "⟡ That is not your name. Must be at least 2 characters long (obviously).\n";
  }

  if (!email.includes("@")) {
    errorMessage += "⟡ Please enter an actual email.\n";
  }

  if (candy === "") {
    errorMessage += "⟡ Don't pretend you don't like candy. Choose a candy.\n";
  }

  if (!document.getElementById("terms").checked) {
    errorMessage += "⟡ You need to agree to RSVP.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  processForm ({
    name: name,
    email: email,
    candy: candy,
    costume: costume,
    favorites: favorites,
    guests: guests
  });
});

function processForm(formData) {
  console.log("Form Data:", formData);
  alert(`🎃 You are RSVPed! 🎃`);
  document.getElementById("registrationForm").reset();
}