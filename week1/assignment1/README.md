# HTML Elements Exploration Assignment

**Name:** Sarah Morgan
**Course:** CIS 185
**Assignment 1:** HTML Elements Challenge
**Date:** September 29th, 2025

## Project Overview

This project demonstrates the use of various HTML elements beyond the basic ones we covered in class
together. For this, I decided to start the outline of a personal portfolio website that showcases basic HTML as well as some custom styling with CSS.

## HTML Elements Implemented

### 1. `<details>` and `<summary>`
**Purpose:** Created a section of text or list able to be collapsed.
**How I used it:** Made a short bulleted list of things I like to do.
**Why it's useful:** Saves space on the page while organizing content in an interactive way.

```html
  <details>
    <summary>Click to take a looksie ↓</summary>
  <ul>
    <li>Research</li>
    <li>Reading</li>
    <li>Fitness</li>
  </ul>
  </details>
```

### 2. `<figure>` and `<figcaption>`
**Purpose:** Groups media content with its caption.
**How I used it:** Added a picture of me and my friend, and then added a caption describing the photo.
**Why it's useful:** Provides semantic meaning to images and their descriptions, improving accessibility and SEO.

```html
  <figure>
    <img src="friend.png" alt="A picture of me and my friend.">
    <figcaption>Me and my friend Leigh about to hit the slopes ❄️🏔️ </figcaption>
  </figure>
```

### 3. `<progress>`
**Purpose:** Displays the completion progress of a task.
**How I used it:** Created a bar showing the level of frustration I'm at with C# currently.
**Why it's useful:** Visually represents completion or loading states without JavaScript.

```html
<section class="mind-progress">
  <label for="cs-progress">How close I am to losing my mind over C#!</label>
  <progress id="cs-progress" value="85" max="100">85%</progress>
</section>
```

### 4. `<time>`
**Purpose:** Represents a specific period in time.
**How I used it:** Marked the amount of time it took to have a meltdown over C#.
**Why it's useful:** Makes dates machine-readable for search engines and browsers.

```html
<p>My last coding meltdown lasted <time datetime="PT2H"><strong>2 hours</strong></time> straight.</p>
```

### 5. `<meter>`
**Purpose:** Displays a scalar measurement within a known range.
**How I used it:** Created a rating system for different programming languages.
**Why it's useful:** Provides a visual gauge for measurements, scores, or ratings

```html
<div class="rating">
  <label for="uhoh-meter">
    My rating for taking Programming Bus Objects with 0 experience: 0/10
  </label>
  <meter id="uhoh-meter" min="0" max="10" value="0">0 out of 10</meter>
</div>
```

## CSS Styling Applied

I applied custom styling to the following elements:

- **`<details>`**: Made it bolder and removed the arrow.
- **`<progress>`**: Made my progress bar a different color.
- **`<meter>`**: Changed the size and look.

## Learning Outcomes

Through this assignment, I learned:

1. **Semantic HTML importance** - Using the right element for the right purpose improves accessibility.
2. **Interactive elements** - HTML can provide user interaction without JavaScript.
3. **Content organization** - Elements like `<details>` and `<figure>` help structure content meaningfully.
4. **CSS integration** - How to style newer HTML5 elements effectively.

## Challenges Encountered

- **Alignment Issues** - Centering lists, bars, and captions meant playing with the default margins/padding a LOT.
- **Consistency** - Trying to match all new elements to a common visual theme (might have went off topic a bit).
- **Accessibility** - Trying to make sure <time>, <meter>, and <details>/<summary> remainded readable for screen readers. Would love feedback.


## Resources Used

- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C HTML5 Specification](https://www.w3.org/TR/html52/)

## Files Included

- `index.html` - Main HTML file with all implemented elements.
- `README.md` - This documentation file.

## How to View

1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Interact with the various elements to see their functionality.