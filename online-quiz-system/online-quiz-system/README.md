# Online Quiz System

A responsive mini-project built with **HTML, CSS and vanilla JavaScript**. It provides an administrator area for creating and managing quizzes and a student area for taking timed quizzes and reviewing results.

## Features

### Student
- Register and log in.
- View published quizzes.
- Take multiple-choice and True/False assessments.
- Countdown timer with automatic submission when time expires.
- Move between questions and see answered-question indicators.
- Receive automatic scores and percentage results.
- Review correct answers and previous attempts.

### Administrator
- Demonstration admin login.
- Dashboard statistics.
- Create, edit, publish/unpublish and delete quizzes.
- Add multiple-choice and True/False questions.
- Set quiz duration and optional single-attempt restriction.
- Review student attempts and scores.

### Technical
- HTML5, CSS3 and vanilla JavaScript.
- Browser Local Storage persistence.
- Responsive layout for mobile, tablet and desktop.
- No build tools or package installation required.

## Run locally

1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. For the most reliable local testing, use Visual Studio Code with the Live Server extension.

## Demo administrator account

- **Email:** `admin@quiz.com`
- **Password:** `Admin123!`

Students can create their own accounts from the registration page.

## Deploy to Netlify

1. Extract the ZIP file.
2. Open Netlify and sign in.
3. Choose **Add new site** → **Deploy manually** (wording may vary).
4. Drag the extracted `online-quiz-system` folder into the deployment area.
5. Wait for deployment, then open the generated site URL.

No build command or publish directory configuration is needed. The root folder containing `index.html` is the site.

## Important project limitations

This is a front-end mini-project intended for demonstration and learning:

- Local Storage is specific to the browser and device. Data is not shared between students on different devices.
- The administrator account and passwords are stored in browser-side data. This is **not secure authentication** and must not be used for sensitive or real examinations.
- Clearing browser data can remove saved users, quizzes and results.
- Because the application has no backend, quiz answers and application data can be inspected by a technically capable user.

A production multi-user system should use a backend API, database, secure authentication and server-side marking.

## Reset demo data

The application initializes sample quizzes and the demo administrator account when no valid application data exists. To reset the browser's saved demo data, clear the site's Local Storage for this website through browser developer tools, then reload.

## Project structure

```text
online-quiz-system/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── storage.js
│   └── app.js
└── README.md
```
