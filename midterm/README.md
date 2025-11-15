# Project Name: Huckle-Bearies Website
## CIS 185 - Midterm Project
## Author: Sarah Morgan
## Date: Nov 14th 2025

---

## 1. Project Description
I decided to create this website as a mock branding website for the coffee stand I work full-time at. It showcases some of our top-selling recipes, explains who we are, as well as gets some user input to help us create next month's specialty menu!

## 2. Target Audience
My target audience would be newcomers to the stand or even regulars, ages 16 and up as we are a drive-thru.

## 3. Main Features
Feature 1:
* Responsive Display: All pages are equipped with Bootstrap 5 grid system to keep a cohesive and mobile-responsive design.
This includes a collapsible navigation menu for mobile devices, automatic image scaling, and an overall consistent layout.

```img-fluid
<div class="col-6 col-md-4 col-lg-3">
  <img src="./images/3lotus.png" class="gallery-img img-fluid" alt="Three Lotuses">
</div>
```

Feature 2:
* Interactive Survey with Javascript: A fully client side survey that allows users to submit their ideas & preferences for next month's specialty menu. Includes custom <strong>Javascript form validation<strong>, checking input length and required field selections, as well as hex color formatting. Shows alert messages and processes form results with a confirmation message followed by the form resetting.

```js
function processForm(formData) {
  console.log("Form Data:", formData);
  alert(`Thank you for your input! See you at the window! ☕︎`);
  document.getElementById("specials-survey").reset();
}
```
Feature 3:
* Custom Styling with CSS: I used additional CSS to personalize the Bootstrap layout with custom colors, a centered form card, and various spacial overrides.


## 4. Technologies Used
* HTML5 - semantic page structure
* CSS3 - custom styling & layout
* Bootstrap 5 - responsive design
* Javascript - form validation and alerts

## 5. File Structure
index.html -> Home + Contact
menu.html -> Menu + monthly specials
css/styles.css -> custom styles
js/script.js -> form validation & interactions
images/ -> all graphics and menu photos

## 6. Challenges Faced
What I belive was the most difficult was taking the time to work more with Bootstrap. I knew coming into the project that I didn't have much time, but I still wanted to make something that showcased all the things I learned within this quarter as well as use this project to get more fluent with a tool I'm not used to. Hence- my use of Bootstrap.

My goal for this project wasn't to make something advanced and perfect, because I am neither, but to do as much as I could using very few resources. I looked at slides and searched Google as few times as possible, and only really got help with features of Bootstrap I didn't know how to implement. That is truly what took the longest. Do I wish I could have gone farther with this? Yes. Do I also think I learned a ton? Also- yes.

## 7. AI Tools Used
ChatGPT: Used for small implementation questions on Bootstrap (i.e. How can I make this centered without centering abc as well?) & debugging.

## 8. Future Improvements
* Online ordering (answering the phone is annoying)
* Modal for the gallery
* Reviews and Ratings page

## 9. Credits
My Boss: for sending me all the pictures
Zak's slides: references for implementation best practices