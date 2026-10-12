# Tic Tac Toe

A classic Tic Tac Toe browser game built with modern JavaScript, HTML5, and CSS3. Created as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

## 🚀 Live Demo

[View Live Project] (https://chriistopheraaron.github.io/tic-tac-toe/)

---

## 🎯 Features

- **Custom Player Names:** Input custom names for both Player X and Player O.
- **Interactive UI:** Dynamic grid rendering with custom marker styling.
- **Game State Tracking:** Automatic win and tie detection across all rows, columns, and diagonals.
- **Restart Option:** Quickly reset the board for a new round without re-entering player names.

---

## 🛠️ Concepts & Patterns Applied

The main objective of this project was to minimize global variables and organize code cleanly using JavaScript design patterns:

- **Module Pattern (IIFE):**
  - `Gameboard`: Encapsulates the 3x3 board array and array mutation methods.
  - `GameController`: Manages turn order, active player, and win/tie validation.
  - `DisplayController`: Handles all DOM manipulation, click handlers, and status messages.
- **Factory Functions:**
  - `Player`: Generates individual player objects with custom names and markers.
- **CSS Grid & Flexbox:** Clean layout and responsive styling using custom properties.

---

## 💻 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Git & GitHub Pages**

---

## ⚙️ Local Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/ChriistopherAaron/tic-tac-toe.git](https://github.com/ChriistopherAaron/tic-tac-toe.git)