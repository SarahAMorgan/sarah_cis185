# Responsive Design, Manual vs Bootstrapped

**Name:** Sarah Morgan
**Course:** CIS 185
**Assignment:** Week 3 - Responsive Design, Manual vs Bootstrapped
**Date:** October 12th, 2025

## Project Overview

This project expands on my Assignment 1 portfolio by creating two responsive versions:

**Version 1:** MANUALLY responsive using only CSS tools
  (media queries, viewport units, flexible images, Grid, and Flexbox)
**Version 2:** BOOTSTRAPPED version using the Bootstrap 5 framework
  (Bootstrap’s grid system, components, and utility classes)

The goal was to essentially explore how the same website layout can be made responsive both manually and with a CSS framework, and to analyze which method is faster, cleaner, and easier to maintain.

## Code Complexity Comparison

**MANUAL**
- Have to write custom CSS for all breakpoints and layout logic.
- Several `@media` queries to handle header, grid, and image adjustments.
- **Flexbox** for the header/footer alignment and **CSS Grid** for the project cards and hero layout.
- More control over spacing, color, and structure but also more repetitive.

**BOOTSTRAP**
- Minimal custom CSS- mostly used Bootstrap classes directly in HTML.
- The grid, columns, spacing, and navbar behavior were automatic by Bootstrap utilities.
- Cleaner HTML structure but more dependant on the external classes.
- Less typing overall, but the design felt more generic.


## Development Time Analysis

In the contect of this assignment, Bootstrap only took longer because I didn't quite understand it at first and I had to completely rearrange and change my code. I can imagine that in the future it would take LESS time than the manual alternative, but because it was a new concept this time around it was more time consuming. My manual code already had many of the requirements so it was just a matter of updating and rearranging it.

## Pros/Cons

# MANUAL
**Pros**
- Full design freedom and lots of wiggle room for creativity.
- You get used to all the core responsive principles (Grid, Flexbox, media queries).

**Cons**
- Time-consuming and very VERY frustrating lol.
- Handling all breakpoints manually.
- Easier to make layout inconsistencies.

# BOOTSTRAP
**Pros**
- Very fast and easy to build.
- Consistent layout and spacing system.
- Components (cards, navbars, forms) are already responsive.

**Cons**
- Limited uniqueness without overrides.
- Harder to understand *why* something is responsive.


## Personal Preference & Reasoning

I would prefer **manual responsive design** for personal or creative projects because it allows more visual control and helps reinforce core CSS knowledge. You really have to troubleshoot and explore and I really enjoy that.
However, for more larger or collaborative projects, I would probably choose **Bootstrap** for its speed and built-in mobile-friendly grid system. Less effort, better results.