# ALX Simple Quiz

A simple, browser-based quiz application built using **HTML**, **CSS**, and **JavaScript**.  
The goal is to turn a static quiz template into an interactive, functional quiz where users can select answers, submit them, and receive immediate feedback.

---

## 📄 Overview

- The repository provides a static HTML + CSS quiz template.  
- Your task is to implement the interactivity (via JavaScript) so that the quiz becomes functional: capturing users’ answers, validating them, and showing feedback.  
- Once setup, users can take the quiz directly in their browser — no backend required.

---

## 🧰 Project Structure

```

/ (root)
├── index.html     — Main quiz markup (questions, answers)
├── styles.css     — Styling for quiz UI
├── quiz.js        
└── LICENSE        — MIT License

```

---

## 🚀 Getting Started (How to Run the Quiz Locally)

1. Clone the repository:

    ```bash
    git clone https://github.com/Alphakeem-Adroit/ALX_Simple_Quiz.git
    ```

2. Navigate into the project directory.

3. Open `index.html` in your preferred browser.  
   The quiz should load immediately — no build steps or server needed.

---

## ✅ What the Quiz Does (or Should Do)

- Displays questions with multiple-choice answers (radio buttons / checkboxes)  
- Lets user select an answer for each question  
- On “Submit” (or equivalent), captures their selection(s)  
- Validates the selected answers against the correct ones defined in the JS  
- Displays feedback: correct / incorrect / score or message  
- Prevents submission or shows warning if user submits without selecting an answer  

---

## 🔧 How to Use / Extend This Project

You (or another dev) can easily:

- Add more questions (just modify the HTML or generate dynamically via JS)  
- Use a JS data structure (e.g. array or JSON) for questions + answers instead of hardcoding in HTML — makes it scalable  
- Style the quiz further: responsive design, animations, improved UI/UX  
- Add features like timer, scoring, result summary, or next-quiz button  
- Add persistence (e.g. localStorage) to save progress  
- Add unit or integration tests if you convert it into a larger app  

---

## 📝 Example Usage Snippet

```js
const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  const selected = document.querySelector('input[name="question1"]:checked');
  if (!selected) {
    alert("Please select an answer!");
    return;
  }
  const userAnswer = selected.value;
  if (userAnswer === "correctValue") {
    // user is correct
  } else {
    // user is wrong
  }
});
```

---

## 📚 Why This Project Matters

* Great learning exercise: combines HTML, CSS and JavaScript — useful for beginners/intermediate developers.
* Demonstrates **DOM manipulation**, **event handling**, and **form / user input validation**.
* Acts as a base template for more complex quizzes or survey-style apps.

---

## 🖋️ License

This project is released under the **MIT License**. See the `LICENSE` file for full details.

---

## 🙏 Contribution & Customization

Feel free to fork / clone this repository and customize it to your needs.
If you build additional features (more questions, scoring, UI enhancements, etc.), consider submitting a pull request or simply using it as a learning base.

---

## ⚠️ (Optional) What’s *Not* Included — Use as Starting Point

* No backend or server-side logic — this is browser-only (frontend)
* No persistent storage (unless added) — page reload resets the quiz
* Basic styling only — UI can be improved or extended

---

#### Created by Alphakeem Adroit