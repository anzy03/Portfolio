# Arnav Sanghavi — Portfolio

A sleek, warm cinematic portfolio website for gameplay programming and game development, styled following Maahi Likhari's design system.

## 📁 Directory Structure

`	ext
D:\Dev\Portfolio\
├── index.html        # Main HTML structure
├── styles.css        # Stylesheet (dark/light themes, animations, layout)
├── app.js            # Data model, filter logic, marquee ticker, interactive modal
└── assets\
    └── images\       # Project thumbnails and animated GIFs
`

## 🚀 How to Run

1. Simply double-click index.html to open it in your browser (Chrome, Edge, etc.).
2. Or serve it locally with Python:
   `ash
   cd D:\Dev\Portfolio
   python -m http.server 3000
   `
   and navigate to http://localhost:3000.

## 🎨 Design Features
- **Warm Cinematic Palette**: Charcoal backgrounds (#1a1814), Firewatch canyon orange accents (#e06a20), Abzu teal (#5a9c8a).
- **Typography**: Nunito + DM Mono font pairings.
- **Theme Switcher**: Dark and Light theme with localStorage persistence.
- **Dynamic Marquee Ticker**: Infinite auto-scrolling highlight reel.
- **Filterable Grid**: Filter projects by Games, Mechanics & Physics, Tools, and Shaders.
- **Interactive Modal**: In-depth project view with media preview, technical workflows, and direct links to Itch.io and GitHub.
