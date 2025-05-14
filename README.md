# Dropdown Sidebar Menu (HTML, CSS, JavaScript)

This project demonstrates how to build a **dropdown sidebar menu** using only HTML, CSS, and vanilla JavaScript. It's designed to help beginners understand DOM manipulation, event handling, and dynamic icon toggling.

## Features

- **Three out of four dropdown sections**: Projects, Services, and Contact.
- **Expandable/collapsible submenus** using JavaScript.
- **Icon toggle** (▼/▲) based on the menu state.
- Clean and responsive layout.
- Fully commented code for easy learning.

## Folder Structure
```
DOM project 1/
├── index.html # Main HTML file containing structure, styling, and script
├── styles.css # CSS file
├── script.js # Javascript file
└── README.md # Project documentation
```
## How It Works

- Each `.menu-title` element has a `click` event listener attached via JavaScript.
- When clicked, the related `.submenu` is toggled using `.classList.toggle("active")`.
- The icon (▼/▲) is updated based on the current state using `textContent`.

## Live Preview

> You can host this project using GitHub Pages or CodePen to try it live.

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Click on any menu title to expand or collapse its submenu.

## Learning Outcome

This is a great mini-project to:
- Practice JavaScript DOM navigation (`nextElementSibling`, `querySelector`).
- Understand toggling classes and icons based on state.
- See how HTML, CSS, and JavaScript interact for UI components.

---

Happy Coding!


