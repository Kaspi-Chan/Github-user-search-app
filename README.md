# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [My process](#process-overview)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is a Github user search app built entirely for practice and fun. The idea and design are provided by [Frontendmentor](frontendmentor.io).
The app has light and dark themes and It uses the user's default preferences with the css media query `prefers-color-scheme`.
Additionally, `localStorage` is used to memorize the last theme set by the user for a more seamless UX experience.

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

## Process Overview

### 1. Analyze the Design and Setup Themes
The first step was to analyze the design and set up the colors for the different themes (light and dark). I applied a basic CSS reset to ensure consistency across different browsers. Additionally, I set up the typography to match the design requirements.

### 2. Setup the HTML Structure
I structured the HTML by primarily looking at the desktop version of the design. This approach helps ensure that all elements are included from the start, and it is a practice I usually follow. Starting with the desktop layout ensures that I don't miss any elements or sections.

### 3. Implement Dark and Light Mode Switch
Next, I implemented the dark and light mode switch. This involved adding a toggle button and writing the corresponding CSS to switch between themes dynamically.

### 4. Style the Components
After setting up the basic structure and theme switch, I proceeded to style the components in order. This step included writing CSS for each component to ensure they look good and are responsive across different devices.

### 5. Add JavaScript Logic
Finally, I added the JavaScript logic for the app. This included fetching data from the GitHub API, handling user input, and updating the UI based on the search results.

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

## What I learned

Improved my skills with relative css units like `em` and `rem`.
Learned how to use local storage to store last used theme on the user's machine, improving the UI of the application.
Practiced responsible design.

