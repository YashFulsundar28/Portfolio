# Yash Fulsundar — Portfolio

A personal portfolio website for **Yash Fulsundar**, a Computer Engineering
student and aspiring full-stack developer. Built with plain HTML, CSS, and
JavaScript — no frameworks, no build step, no backend.

## About the project

The site presents Yash's education, technical skills, internship
experience, featured project, achievements, and contact details in a
premium, dark, glassmorphism-styled design. It's a single static page with
smooth-scrolling navigation between sections.

## Features

- Sticky navigation bar with active-section highlighting and a mobile
  hamburger menu
- Hero section with profile photo, intro, and resume/contact CTAs
- About, Skills, Experience (timeline), Education (cards), Featured Project,
  Achievements & Certifications, Languages, and Contact sections
- Contact form that opens the visitor's email client with the message
  pre-filled (no backend involved — nothing is sent automatically)
- Scroll-based fade-in animations via `IntersectionObserver`, with full
  support for `prefers-reduced-motion`
- Fully responsive from 375px mobile screens up to 1920px desktops
- Semantic HTML, keyboard-accessible navigation, visible focus states, and
  alt text throughout

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox — no framework)
- Vanilla JavaScript (no libraries or dependencies)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Project structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── Yash-Fulsundar-Profile.jpg
│   └── resume/
│       └── Yash_Fulsundar_Resume.pdf
└── README.md
```

## How to run locally

No build tools or installation required.

**Option A — open directly:**
Double-click `index.html`, or open it from your browser with
`File > Open`.

**Option B — simple local server (recommended, avoids browser file-access
restrictions on some systems):**

```bash
cd portfolio
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

## How to replace the profile photo

1. Replace `assets/images/Yash-Fulsundar-Profile.jpg` with your actual
   photo, **keeping the same filename** (or update the `src` reference
   below if you use a different filename).
2. If you use a different filename or format, update this line in
   `index.html`:
   ```html
   <img src="assets/images/Yash-Fulsundar-Profile.jpg" alt="Portrait of Yash Fulsundar" class="portrait-frame__img">
   ```
3. A square photo (ideally at least 800×800px) works best with the circular
   glass frame.

> **Note:** The photo currently included is a placeholder graphic, not a
> real photograph. Replace it with your actual professional photo before
> publishing the site.

## How to update your resume

1. Replace `assets/resume/Yash_Fulsundar_Resume.pdf` with your real resume
   PDF, keeping the exact same filename. All three "Download Resume"
   buttons (navbar, hero, and anywhere else) point to this single file, so
   no other changes are needed.
2. If you'd rather use a different filename, update every
   `assets/resume/Yash_Fulsundar_Resume.pdf` reference in `index.html`.

> **Note:** The PDF currently included is a placeholder — replace it before
> publishing the site.

## How to update your GitHub / LinkedIn links

Open `js/script.js` and edit the single line near the top:

```js
const GITHUB_URL = "https://github.com/yourusername"; // <-- replace with your GitHub URL
```

Every GitHub button and link across the site (hero, project card, contact
section, and footer) reads from this one value, so you only need to change
it in this one place.

Your LinkedIn URL (`linkedin.com/in/yashfulsundar`) is already set
correctly across the site. If it ever changes, search `index.html` for
`linkedin.com/in/yashfulsundar` and replace all instances.

## How to deploy using GitHub Pages

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
2. On GitHub, go to your repository's **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **Deploy from a
   branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub will publish the site at
   `https://yourusername.github.io/your-repo/` within a minute or two.

## Notes

- All resume-derived content (education, internship, project, skills,
  achievements) reflects only what was provided — nothing has been
  invented.
- The internship is presented as a 2-month internship in 2024, as
  specified.
- If any detail on the site needs correcting, everything lives in plain
  HTML in `index.html`, so it's easy to find and edit directly.
