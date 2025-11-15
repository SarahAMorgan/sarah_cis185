# Halloween Registration Form

**Student Name:** Sarah  
**Course:** CIS 185
**Assignment:** Halloween Registration Form  
**Date:** Nov 11th 2025

This project is a simple registration form used to "RSVP" to a halloween-themed party.

## Description

The form allows a user to enter their name, email, number of guests, favorite candy, costume choice,
and other Halloween preferences. JavaScript is used to make sure the user fills out important fields
correctly before the form can be submitted. If validation passes, the information is gathered into an
object, shown in the console, and a confirmation message is displayed. The form is styled with CSS to
fit a fun Halloween aesthetic.

## Getting Started

### Dependencies

This project only requires:
* A modern wed browser (Chrome, Firefox, etc)

### Installing

* Download or copy the project folder.
* Ensure the files are in the same directory: index.html, styles.css, app.js

### Executing program

* Double-click index.html to open it in your browser.
* Fill out the form and click Register.
* Open the browser console to view collectd form data if desired.

## Implementation

### Input Controls Implemented
### `Text` `Number` and `Email`
**Purpose:** Collects information using text fields with different requirements.  
**How I used it:** Collected the name of who was RSVP-ing, how many guests they were bringing, and their email.
**Why it's useful:** Can be used in a vast amount of different ways.

```html
<label for="name">Who is RSVP-ing?</label>
<input id="name" type="text" placeholder="Wednesday Addams"/>
```
### `Color` `Dropdown` `Checkbox` and `Radio Buttons`
**Purpose:** Collects information using different methods and giving different options.
**How I used it:** Asked for them to pick a color, choose a candy, or check the box next to their fav part of halloween.
**Why it's useful:** Again- Can be used in a vast amount of different ways.

```html
<label for="candy">Sugar Coma of Choice?</label>
<select id="candy" name="candy">
  <option value="">Choose one...</option>
  <option value="chocolate">Chocolate🍫</option>
  <option value="gummy">Gummies🍬</option>
  <option value="sour">SOUR💥</option>
</select>
```
### DOM Techniques Implemented

* `document.getElementById()` – Used to access values typed into inputs like name, email, candy, guests, etc.
* `document.getElementsByName()` – Used to loop through the costume radio buttons and find which one was selected.
* `addEventListener("submit")` – Runs the validation and form processing code when the user clicks Register.
* `event.preventDefault()` – Stops the form from automatically refreshing so the validation can happen first.
* `.value` and `.checked` – Used to read what the user typed or selected.
* `form.reset()` – Clears the form after a successful submission.

### Javascript Validation

I added simple validation rules to make sure the form is filled out correctly:
* Name must be at least 2 characters long.
* Email must contain an "@"
* A candy must be selected from the dropdown.
* The terms checkbox must be checked before submitting.

### Processing Form Data

Once the form passes validation, the input values are stored inside a JavaScript object called `formData`.

This object is printed to the console for review, a confirmation message appears for the user, and the form is reset.

```example
Form Data: {
  name: "Sarah",
  email: "example@email.com",
  candy: "gummy",
  costume: "witch",
  favorites: ["money"],
  guests: 2
}
```
