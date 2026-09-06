# 🔢 Counter & Random Number Generator

A simple and interactive **React.js application** that combines a Counter and a Random Number Generator. This project demonstrates the use of **React functional components, `useState`, event handlers, and conditional rendering**.

## 🚀 Features

### 🔢 Counter App

* Increment the counter value.
* Decrement the counter value.
* Reset the counter to `0`.
* Prevents the counter from going below `0`.
* Displays **"Minimum limit reached"** when the counter is `0`.

### 🎲 Random Number Generator

* Generates a random number between **1 and 100**.
* Generates a new number every time the button is clicked.
* Displays **"No number generated yet"** before generating a number.

## 🛠️ Technologies Used

* ⚛️ React.js
* ⚡ Vite
* 🟨 JavaScript
* 🎨 CSS
* 🧠 React `useState`

## 🎯 React Concepts Practiced

This project helps practice the following React concepts:

* Functional Components
* `useState` Hook
* State Management
* Event Handling
* Conditional Rendering
* Dynamic UI Updates
* JavaScript `Math.random()`

## 📌 Expected Behavior

### Counter

| Action         | Result                        |
| -------------- | ----------------------------- |
| Increment      | Counter increases by 1        |
| Decrement      | Counter decreases by 1        |
| Decrement at 0 | Counter remains 0             |
| Reset          | Counter returns to 0          |
| Counter = 0    | Shows "Minimum limit reached" |

### Random Number Generator

Before clicking:

```text
No number generated yet
```

After clicking:

```text
Random Number: 57
```

Clicking the button again generates another number between **1 and 100**.


## 🌱 Future Improvements

* Add minimum and maximum number inputs.
* Add a random number history.
* Add a dark/light mode.
* Add animations.
* Add a clear history button.
* Make the UI fully responsive.
