How to Run the Project Locally

Step 1: Install Node.js
Make sure you have Node.js and npm installed.

Node instal
----------------l
node -v
npm -v

---

Step 2: Create a React App
if you don’t already have the project created

npm create vite@latest (Name of project : first)
cd first

---

Step 3: Add TailwindCSS
Install TailwindCSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Config tailwind
tailwind.config.js file name
example
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{js,jsx,ts,tsx}"],
theme: {
extend: {},
},
plugins: [],
};

Update src/index.css:

@import "tailwindcss";

\*Note i'm already config tailwind

---

Step 4: Step 5: Run the Project
npm run dev

---

Project start local server....
