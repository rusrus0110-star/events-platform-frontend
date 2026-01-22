Event Platform Frontend

Event Platform Frontend is a front-end project for an events platform, built with pure HTML, SCSS, and Vanilla JavaScript.
The project demonstrates modular architecture, responsive layout, and client-side data filtering logic.

🔗 Live demo:
https://rusrus0110-star.github.io/events-platform-frontend/

📌 Project Overview

Event Platform is a static front-end interface for browsing and filtering events by multiple parameters:

event type (online / offline)

category

distance

The project is built without frameworks or build tools, with a strong focus on:

clean and maintainable project structure

readable, well-organized code

full mobile responsiveness

clear separation of responsibilities (data / services / UI)

⚙️ Technologies

HTML5

SCSS (modular architecture)

Vanilla JavaScript (ES6+)

Git / GitHub

GitHub Pages

🗂 Project Structure
/
├── assets/
│ └── images/
│
├── js/
│ ├── data/
│ │ └── events.data.js // data source
│ │
│ ├── services/
│ │ └── events.filter.js // filtering logic
│ │
│ ├── ui/
│ │ ├── eventCard.js // event card template
│ │ └── events.render.js // event list rendering
│ │
│ ├── utils/
│ │ └── date.js // date utilities
│ │
│ └── main.js // entry point
│
├── pages/
│ └── events.html // events page
│
├── scss/
│ ├── base/ // reset, variables, fonts
│ ├── components/ // cards, buttons
│ ├── layout/ // header, footer, grid
│ ├── pages/ // page-specific styles
│ ├── responsive/ // media queries
│ └── main.scss
│
└── index.html

🔑 Key Features
🔹 Modular JavaScript Architecture

data separated from business logic

UI rendering isolated into dedicated modules

filtering implemented via a service layer

🔹 Responsive Layout

mobile-first approach

optimized for screens starting from 360px

Flexbox and CSS Grid without third-party libraries

🔹 Clean SCSS Architecture

clear separation into base / components / layout / pages

centralized variables and reusable styles

unified responsive configuration

📱 Responsiveness & Testing

The project was tested on:

360px (Android)

375px (iPhone)

414px

tablet and desktop resolutions

Special attention was given to:

eliminating horizontal scrolling

correct behavior of event cards and filters across breakpoints
