# HTML Elements Exploration Assignment

**Name:** Sarah Morgan
**Course:** CIS 185
**Assignment 1:** Personal Portfolio Page
**Date:** October 8th, 2025

## Project Overview

This project demonstrates the use of semantic HTML5 elements and modern CSS layout techniques. I created a personal portfolio website that includes a navigation menu, introduction section, project cards, and footer, all styled using external CSS with Flexbox and Grid layouts.

## HTML Elements Implemented

### `<header>``<nav>` `<main>` `<main>` `<section>``<footer>`
**Purpose:** Provides structure to each part of the page.
**How I used it:** Organized my content into separate sections for clarity: header for navigation, main for content, and footer for closing information.
**Why it's useful:** Accessibility and helps search engines.

```html example
<header>
  <h1>Sarah Morgan</h1>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

## Flexbox Layout
**Purpose:** ALigns and evenly spaces elements in a row or column.
**How I used it:** Used Flexbox in header to spread navigation links evenly across the top.

```flex example
header nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
## Grid Layout
**Purpose:** Created a "responsive" multi-column layout.
**How I used it:** Used Grid to display three project cards side by side in the Projects section.

```grid example
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```

## Learning Outcomes

Through this assignment, I learned:

1. **Flexbox** - How to use for alignment and spacing.
2. **Grid** - How to use for more structure layouts that are easily manipulated.
3. **Semantic HTML5** - How semantic HTML improves accessibility.

## Files Included

- `index.html` - Main HTML file with all implemented elements.
- `style.css` - Flexbox and Grid layout.
- `README.md` - This documentation file.

## How to View

1. Clone this repository.
2. Open `index.html` in any modern web browser.